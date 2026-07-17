const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');
const notifier = require('node-notifier');
const cliProgress = require('cli-progress');
const chalk = require('chalk');
const ora = require('ora');

const git = simpleGit();
const DEBOUNCE_MS = 2000;
let timeoutId = null;
let isPushing = false;
let pushCount = 0;
let todayPushes = 0;
let totalFilesChanged = 0;
let startTime = new Date();
let xpPoints = 0;
let achievements = [];
let pushHistory = [];

// Color-coded logging
const log = {
    success: (msg) => console.log(chalk.green(`✅ ${msg}`)),
    warning: (msg) => console.log(chalk.yellow(`⚠️  ${msg}`)),
    error: (msg) => console.log(chalk.red(`❌ ${msg}`)),
    info: (msg) => console.log(chalk.blue(`ℹ️  ${msg}`)),
    highlight: (msg) => console.log(chalk.magenta(`✨ ${msg}`)),
    dim: (msg) => console.log(chalk.dim(msg))
};

// Achievements configuration
const ACHIEVEMENTS = {
    FIRST_PUSH: { id: 'first_push', name: 'First Push', icon: '🏆', condition: (count) => count === 1 },
    TEN_PUSHES: { id: 'ten_pushes', name: '10 Pushes', icon: '🥈', condition: (count) => count === 10 },
    FIFTY_PUSHES: { id: 'fifty_pushes', name: '50 Pushes', icon: '🥇', condition: (count) => count === 50 },
    HUNDRED_PUSHES: { id: 'hundred_pushes', name: '100 Pushes', icon: '👑', condition: (count) => count === 100 },
    NIGHT_OWL: { id: 'night_owl', name: 'Night Owl', icon: '🦉', condition: (count, hour) => hour >= 0 && hour < 5 },
    EARLY_BIRD: { id: 'early_bird', name: 'Early Bird', icon: '🐦', condition: (count, hour) => hour >= 5 && hour < 8 },
    PRODUCTIVE_DAY: { id: 'productive_day', name: 'Productive Day', icon: '📈', condition: (count, hour, todayCount) => todayCount >= 10 },
    STREAK_3: { id: 'streak_3', name: '3-Day Streak', icon: '🔥', condition: (count, hour, todayCount, days) => days >= 3 },
    STREAK_7: { id: 'streak_7', name: '7-Day Streak', icon: '⚡', condition: (count, hour, todayCount, days) => days >= 7 },
};

// Ignored paths
const IGNORED_PATHS = [
    /(^|[\/\\])\../,
    /node_modules/,
    /\.git/,
    /build/,
    /dist/,
    /\.docusaurus/,
    /\.cache/,
    /package-lock\.json/,
    /Out-Null/
];

// Function to get formatted date and time
function getFormattedDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    return { date, time, full: `${date} ${time}`, hour: now.getHours() };
}

// Function to print separator line
function printSeparator(char = '═', length = 70) {
    console.log(chalk.dim(char.repeat(length)));
}

// Function to print header
function printHeader(title, char = '═') {
    printSeparator(char);
    console.log(chalk.cyan(`║   ${title}`));
    printSeparator(char);
}

// Show achievements
function checkAchievements(count, hour, todayCount, daysActive) {
    const unlocked = [];
    
    for (const [key, achievement] of Object.entries(ACHIEVEMENTS)) {
        if (!achievements.includes(key)) {
            let condition = false;
            if (key === 'NIGHT_OWL') {
                condition = achievement.condition(count, hour);
            } else if (key === 'EARLY_BIRD') {
                condition = achievement.condition(count, hour);
            } else if (key === 'PRODUCTIVE_DAY') {
                condition = achievement.condition(count, hour, todayCount);
            } else if (key === 'STREAK_3' || key === 'STREAK_7') {
                condition = achievement.condition(count, hour, todayCount, daysActive);
            } else {
                condition = achievement.condition(count);
            }
            
            if (condition) {
                achievements.push(key);
                unlocked.push(achievement);
            }
        }
    }
    
    return unlocked;
}

// Send Windows notification
function sendNotification(title, message, icon = null) {
    try {
        notifier.notify({
            title: title,
            message: message,
            icon: icon || path.join(__dirname, 'icon.png'),
            sound: true,
            wait: false
        });
        log.info(`🔔 Notification sent: ${title}`);
    } catch (error) {
        log.warning('Notification failed (silent mode)');
    }
}

// Save to log file
function saveToLog(data) {
    try {
        const logDir = path.join(__dirname, 'logs');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }
        
        const logFile = path.join(logDir, `push-log-${new Date().toISOString().split('T')[0]}.txt`);
        const logEntry = `${new Date().toISOString()} | ${data}\n`;
        fs.appendFileSync(logFile, logEntry);
        
        // Also save to JSON for analytics
        const jsonLog = path.join(logDir, 'push-history.json');
        let history = [];
        if (fs.existsSync(jsonLog)) {
            history = JSON.parse(fs.readFileSync(jsonLog, 'utf8'));
        }
        history.push({
            timestamp: new Date().toISOString(),
            pushNumber: pushCount,
            filesChanged: data.filesChanged || 0,
            commitHash: data.commitHash || '',
            xpEarned: data.xpEarned || 0
        });
        fs.writeFileSync(jsonLog, JSON.stringify(history, null, 2));
    } catch (error) {
        // Silent fail for logging
    }
}

// Generate report
function generateReport() {
    const { date, time } = getFormattedDateTime();
    const uptime = Math.floor((new Date() - startTime) / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;
    
    const report = `
╔═══════════════════════════════════════════════════════════════╗
║                    📊 PUSH REPORT                           ║
╚═══════════════════════════════════════════════════════════════╝

📅 Date: ${date}
⏰ Time: ${time}
⏱️  Uptime: ${hours}h ${minutes}m ${seconds}s

📊 Statistics:
   • Total Pushes: ${pushCount}
   • Today's Pushes: ${todayPushes}
   • Total Files Changed: ${totalFilesChanged}
   • XP Points: ${xpPoints} ⭐

🏆 Achievements Unlocked: ${achievements.length}
   ${achievements.map(a => `   ${ACHIEVEMENTS[a]?.icon || '🏅'} ${ACHIEVEMENTS[a]?.name || a}`).join('\n   ') || '   None yet'}

📈 Performance:
   • Average Files per Push: ${pushCount > 0 ? (totalFilesChanged / pushCount).toFixed(1) : 0}
   • Push Rate: ${pushCount > 0 ? (pushCount / (uptime / 3600)).toFixed(1) : 0} pushes/hour

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    
    return report;
}

async function pushChanges() {
    if (isPushing) {
        log.warning('Already pushing, skipping...');
        return;
    }
    isPushing = true;
    
    // Create progress bar
    const progressBar = new cliProgress.SingleBar({
        format: '📤 Push Progress |' + chalk.cyan('{bar}') + '| {percentage}% | {value}/{total} steps',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true,
        clearOnComplete: true
    });
    
    try {
        const status = await git.status();
        
        if (status.files.length === 0 && status.staging.length === 0) {
            const { time } = getFormattedDateTime();
            log.warning(`No changes to commit (${time})`);
            isPushing = false;
            return;
        }

        // Increment counters
        pushCount++;
        todayPushes++;
        totalFilesChanged += status.files.length;
        
        const { date, time, full, hour } = getFormattedDateTime();
        
        printSeparator('═');
        log.highlight(`📝 PUSH #${pushCount} - ${full}`);
        printSeparator('─');
        log.info(`📄 Files changed: ${status.files.length}`);
        
        // Show changed files
        if (status.files.length > 0 && status.files.length <= 10) {
            status.files.forEach(file => {
                console.log(`   📄 ${chalk.cyan(file.path)}`);
            });
        } else if (status.files.length > 10) {
            log.info(`Showing first 10 of ${status.files.length} files:`);
            status.files.slice(0, 10).forEach(file => {
                console.log(`   📄 ${chalk.cyan(file.path)}`);
            });
            log.dim(`   ... and ${status.files.length - 10} more`);
        }
        
        printSeparator('─');
        
        // Start progress
        progressBar.start(4, 0);
        
        // Step 1: Add files
        progressBar.update(1);
        log.info('📤 Staging files...');
        await git.add('.');
        
        // Step 2: Commit
        progressBar.update(2);
        log.info('📝 Committing...');
        const commitMessage = `🤖 Auto-commit #${pushCount}: ${new Date().toISOString().replace('T', ' ').substring(0, 19)}`;
        const commitResult = await git.commit(commitMessage);
        
        if (commitResult.commit) {
            // Step 3: Push
            progressBar.update(3);
            log.info('📤 Pushing to remote...');
            await git.push();
            
            // Step 4: Complete
            progressBar.update(4);
            progressBar.stop();
            
            // Calculate XP
            const xpEarned = Math.floor(status.files.length * 2) + 5;
            xpPoints += xpEarned;
            
            log.success(`✅ Push #${pushCount} successful!`);
            log.success(`✅ Committed: ${commitResult.commit.substring(0, 7)}`);
            
            // Show XP earned
            console.log(chalk.magenta(`⭐ +${xpEarned} XP (Total: ${xpPoints} XP)`));
            
            // Calculate uptime
            const uptime = Math.floor((new Date() - startTime) / 1000);
            const hours = Math.floor(uptime / 3600);
            const minutes = Math.floor((uptime % 3600) / 60);
            const seconds = uptime % 60;
            log.info(`⏱️  Uptime: ${hours}h ${minutes}m ${seconds}s`);
            
            // Calculate daily streak
            const daysActive = 1; // Simplified - would need to track from log
            
            // Check achievements
            const unlockedAchievements = checkAchievements(pushCount, hour, todayPushes, daysActive);
            if (unlockedAchievements.length > 0) {
                printSeparator('─');
                log.highlight('🏆 ACHIEVEMENT UNLOCKED! 🏆');
                unlockedAchievements.forEach(ach => {
                    console.log(chalk.magenta(`   ${ach.icon} ${ach.name}`));
                    // Send notification for achievement
                    sendNotification(
                        `🏆 Achievement Unlocked!`,
                        `${ach.icon} ${ach.name}`,
                        null
                    );
                });
            }
            
            // Send Windows notification
            sendNotification(
                `✅ Push #${pushCount} Successful`,
                `${status.files.length} files pushed | ⭐ +${xpEarned} XP`,
                null
            );
            
            // Save to log
            saveToLog({
                filesChanged: status.files.length,
                commitHash: commitResult.commit.substring(0, 7),
                xpEarned: xpEarned
            });
            
            printSeparator('═');
            log.highlight('✨ Done!\n');
            
        } else {
            progressBar.stop();
            log.warning('Nothing to commit');
            printSeparator('─');
        }
        
    } catch (error) {
        progressBar.stop();
        log.error(`Error: ${error.message}`);
        if (error.message.includes('Authentication failed')) {
            log.warning('💡 Please check your Git credentials');
            sendNotification('❌ Push Failed', 'Authentication error - check Git credentials');
        }
        printSeparator('─');
    } finally {
        isPushing = false;
    }
}

// Show daily stats
function showDailyStats() {
    const { date } = getFormattedDateTime();
    printSeparator('─');
    log.info(`📊 Today's Stats (${date}):`);
    log.info(`   Pushes: ${todayPushes}`);
    log.info(`   XP Earned: ${xpPoints} ⭐`);
    log.info(`   Achievements: ${achievements.length}`);
    printSeparator('─');
}

const watcher = chokidar.watch('.', {
    ignored: (path) => {
        for (const pattern of IGNORED_PATHS) {
            if (pattern.test(path)) return true;
        }
        return false;
    },
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: {
        stabilityThreshold: 500,
        pollInterval: 100
    }
});

// Animated spinner for waiting
const spinner = ora({
    text: 'Watching for file changes...',
    color: 'cyan',
    spinner: 'dots12'
}).start();

watcher
    .on('change', (filePath) => {
        const { time } = getFormattedDateTime();
        spinner.text = `🔄 Modified: ${path.basename(filePath)} (${time})`;
        spinner.color = 'yellow';
        schedulePush();
    })
    .on('add', (filePath) => {
        const { time } = getFormattedDateTime();
        spinner.text = `➕ Added: ${path.basename(filePath)} (${time})`;
        spinner.color = 'green';
        schedulePush();
    })
    .on('unlink', (filePath) => {
        const { time } = getFormattedDateTime();
        spinner.text = `➖ Deleted: ${path.basename(filePath)} (${time})`;
        spinner.color = 'red';
        schedulePush();
    })
    .on('error', (error) => {
        spinner.text = `⚠️  Watcher error: ${error.message}`;
        spinner.color = 'red';
    });

function schedulePush() {
    if (timeoutId) clearTimeout(timeoutId);
    spinner.text = '⏳ Waiting for changes to settle...';
    spinner.color = 'yellow';
    timeoutId = setTimeout(() => {
        spinner.stop();
        pushChanges();
        spinner.start();
        timeoutId = null;
    }, DEBOUNCE_MS);
}

process.on('SIGINT', async () => {
    spinner.stop();
    printSeparator('═');
    log.info('\n👋 Shutting down auto-push...');
    const { full } = getFormattedDateTime();
    log.info(`📅 Stopped at: ${full}`);
    log.info(`📊 Total pushes: ${pushCount}`);
    log.info(`⭐ Total XP: ${xpPoints}`);
    log.info(`🏆 Achievements: ${achievements.length}`);
    
    // Generate and save final report
    const report = generateReport();
    console.log(report);
    
    // Save report to file
    const reportDir = path.join(__dirname, 'reports');
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir);
    }
    const reportFile = path.join(reportDir, `report-${new Date().toISOString().split('T')[0]}.txt`);
    fs.writeFileSync(reportFile, report);
    log.info(`📊 Report saved to: ${reportFile}`);
    
    if (timeoutId) {
        clearTimeout(timeoutId);
        await pushChanges();
    }
    await watcher.close();
    log.success('✅ Auto-push stopped');
    printSeparator('═');
    process.exit(0);
});

// Display startup
console.log(chalk.bold.cyan('╔═══════════════════════════════════════════════════════════════════╗'));
console.log(chalk.bold.cyan('║   🚀 AUTO-PUSH WATCHER STARTED                                   ║'));
console.log(chalk.bold.cyan('╚═══════════════════════════════════════════════════════════════════╝'));
console.log(`\n📁 Root: ${chalk.cyan(process.cwd())}`);
console.log(`⏱️  Debounce: ${chalk.yellow(DEBOUNCE_MS/1000)} seconds`);
console.log(`📅 Started: ${chalk.green(getFormattedDateTime().full)}`);
console.log(`🏆 Achievements: ${chalk.magenta('Enabled')}`);
console.log(`⭐ XP System: ${chalk.magenta('Enabled')}`);
console.log(`🔔 Notifications: ${chalk.magenta('Enabled')}`);
console.log('🔒 Press Ctrl+C to stop\n');
printSeparator('─');

// Show daily stats every hour
setInterval(() => {
    if (pushCount > 0) {
        showDailyStats();
    }
}, 3600000);

setTimeout(async () => {
    try {
        const status = await git.status();
        if (status.files.length > 0) {
            const { full } = getFormattedDateTime();
            log.info(`📄 Found ${status.files.length} uncommitted changes at ${full}`);
            spinner.stop();
            await pushChanges();
            spinner.start();
        } else {
            log.success('✅ Repository clean');
            printSeparator('─');
        }
    } catch (error) {
        // Silent initial check
    }
}, 1000);