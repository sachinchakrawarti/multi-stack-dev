const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();
const DEBOUNCE_MS = 2000;
let timeoutId = null;
let isPushing = false;
let pushCount = 0; // Push counter
let startTime = new Date(); // Start time

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
    return { date, time, full: `${date} ${time}` };
}

// Function to print separator line
function printSeparator(char = '═', length = 70) {
    console.log(char.repeat(length));
}

// Function to print header
function printHeader(title, char = '═') {
    printSeparator(char);
    console.log(`║   ${title}`);
    printSeparator(char);
}

console.log('╔═══════════════════════════════════════════════════════════════════╗');
console.log('║   🚀 AUTO-PUSH WATCHER STARTED                                   ║');
console.log('╚═══════════════════════════════════════════════════════════════════╝');
console.log(`\n📁 Root: ${process.cwd()}`);
console.log(`⏱️  Debounce: ${DEBOUNCE_MS/1000} seconds`);
console.log(`📅 Started: ${getFormattedDateTime().full}`);
console.log('🔒 Press Ctrl+C to stop\n');
printSeparator('─');

async function pushChanges() {
    if (isPushing) {
        console.log('⏳ Already pushing, skipping...');
        return;
    }
    isPushing = true;
    
    try {
        const status = await git.status();
        
        if (status.files.length === 0 && status.staging.length === 0) {
            const { time } = getFormattedDateTime();
            console.log(`⏭️  No changes to commit (${time})`);
            isPushing = false;
            return;
        }

        // Increment push counter
        pushCount++;
        const { date, time, full } = getFormattedDateTime();
        
        printSeparator('═');
        console.log(`📝 PUSH #${pushCount} - ${full}`);
        printSeparator('─');
        console.log(`📄 Files changed: ${status.files.length}`);
        
        // Show changed files
        if (status.files.length > 0 && status.files.length <= 10) {
            status.files.forEach(file => {
                console.log(`   📄 ${file.path}`);
            });
        } else if (status.files.length > 10) {
            console.log(`   📄 Showing first 10 of ${status.files.length} files:`);
            status.files.slice(0, 10).forEach(file => {
                console.log(`   📄 ${file.path}`);
            });
            console.log(`   ... and ${status.files.length - 10} more`);
        }
        
        printSeparator('─');

        await git.add('.');
        
        const commitMessage = `🤖 Auto-commit #${pushCount}: ${new Date().toISOString().replace('T', ' ').substring(0, 19)}`;
        const commitResult = await git.commit(commitMessage);
        
        if (commitResult.commit) {
            console.log(`✅ Committed: ${commitResult.commit.substring(0, 7)}`);
            await git.push();
            console.log(`✅ Push #${pushCount} successful!`);
            
            // Calculate uptime
            const uptime = Math.floor((new Date() - startTime) / 1000);
            const hours = Math.floor(uptime / 3600);
            const minutes = Math.floor((uptime % 3600) / 60);
            const seconds = uptime % 60;
            console.log(`⏱️  Uptime: ${hours}h ${minutes}m ${seconds}s`);
            
            printSeparator('═');
            console.log('✨ Done!\n');
        } else {
            console.log('⏭️  Nothing to commit');
            printSeparator('─');
        }
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        if (error.message.includes('Authentication failed')) {
            console.log('💡 Please check your Git credentials');
        }
        printSeparator('─');
    } finally {
        isPushing = false;
    }
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

watcher
    .on('change', (filePath) => {
        const { time } = getFormattedDateTime();
        console.log(`🔄 Modified: ${path.basename(filePath)} (${time})`);
        schedulePush();
    })
    .on('add', (filePath) => {
        const { time } = getFormattedDateTime();
        console.log(`➕ Added: ${path.basename(filePath)} (${time})`);
        schedulePush();
    })
    .on('unlink', (filePath) => {
        const { time } = getFormattedDateTime();
        console.log(`➖ Deleted: ${path.basename(filePath)} (${time})`);
        schedulePush();
    })
    .on('error', (error) => {
        console.error('⚠️  Watcher error:', error);
    });

function schedulePush() {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        pushChanges();
        timeoutId = null;
    }, DEBOUNCE_MS);
}

process.on('SIGINT', async () => {
    printSeparator('═');
    console.log('\n👋 Shutting down auto-push...');
    const { full } = getFormattedDateTime();
    console.log(`📅 Stopped at: ${full}`);
    console.log(`📊 Total pushes: ${pushCount}`);
    
    if (timeoutId) {
        clearTimeout(timeoutId);
        await pushChanges();
    }
    await watcher.close();
    console.log('✅ Auto-push stopped');
    printSeparator('═');
    process.exit(0);
});

console.log('📂 Watching for file changes...');
console.log('💡 Make changes and watch auto-push!\n');
printSeparator('─');

setTimeout(async () => {
    try {
        const status = await git.status();
        if (status.files.length > 0) {
            const { full } = getFormattedDateTime();
            console.log(`📄 Found ${status.files.length} uncommitted changes at ${full}`);
            await pushChanges();
        } else {
            console.log('✅ Repository clean');
            printSeparator('─');
        }
    } catch (error) {
        // Silent initial check
    }
}, 1000);