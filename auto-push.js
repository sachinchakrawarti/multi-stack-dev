const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();
const DEBOUNCE_MS = 2000;
let timeoutId = null;
let isPushing = false;

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

console.log('╔═══════════════════════════════════════════════════╗');
console.log('║   🚀 AUTO-PUSH WATCHER STARTED                   ║');
console.log('╚═══════════════════════════════════════════════════╝');
console.log(`\n📁 Root: ${process.cwd()}`);
console.log(`⏱️  Debounce: ${DEBOUNCE_MS/1000} seconds`);
console.log('🔒 Press Ctrl+C to stop\n');

async function pushChanges() {
    if (isPushing) return;
    isPushing = true;
    
    try {
        const status = await git.status();
        
        if (status.files.length === 0 && status.staging.length === 0) {
            console.log(`⏭️  No changes to commit (${new Date().toLocaleTimeString()})`);
            isPushing = false;
            return;
        }

        const timestamp = new Date().toLocaleString();
        console.log(`\n📝 Changes detected at ${timestamp}`);
        console.log(`📄 Files changed: ${status.files.length}`);

        await git.add('.');
        
        const commitMessage = `🤖 Auto-commit: ${new Date().toISOString().replace('T', ' ').substring(0, 19)}`;
        const commitResult = await git.commit(commitMessage);
        
        if (commitResult.commit) {
            console.log(`✅ Committed: ${commitResult.commit.substring(0, 7)}`);
            await git.push();
            console.log('✅ Push successful! ✨\n');
        } else {
            console.log('⏭️  Nothing to commit');
        }
        
    } catch (error) {
        console.error('❌ Error:', error.message);
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
        console.log(`🔄 Modified: ${path.basename(filePath)}`);
        schedulePush();
    })
    .on('add', (filePath) => {
        console.log(`➕ Added: ${path.basename(filePath)}`);
        schedulePush();
    })
    .on('unlink', (filePath) => {
        console.log(`➖ Deleted: ${path.basename(filePath)}`);
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
    console.log('\n\n👋 Shutting down auto-push...');
    if (timeoutId) {
        clearTimeout(timeoutId);
        await pushChanges();
    }
    await watcher.close();
    console.log('✅ Auto-push stopped');
    process.exit(0);
});

console.log('📂 Watching for file changes...');
console.log('💡 Make changes and watch auto-push!\n');

setTimeout(async () => {
    try {
        const status = await git.status();
        if (status.files.length > 0) {
            console.log(`📄 Found ${status.files.length} uncommitted changes`);
            await pushChanges();
        }
    } catch (error) {
        // Silent initial check
    }
}, 1000);