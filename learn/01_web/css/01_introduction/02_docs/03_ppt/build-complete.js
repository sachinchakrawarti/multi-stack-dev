const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');

console.log('🚀 Starting build...\n');

// Read main file
console.log('📖 Reading presentation.marp.md...');
let combined = fs.readFileSync('presentation.marp.md', 'utf8');

// Add all slides
const slideFiles = [
    '01_title.md', '02_agenda.md', '03_what_is_css.md',
    '04_history_of_css.md', '05_why_use_css.md', '06_how_css_works.md',
    '07_types_of_css.md', '08_css_syntax.md', '09_css_comments.md',
    '10_best_practices.md', '11_common_mistakes.md', '12_interview_questions.md',
    '13_summary.md', '14_faq.md', '15_thank_you.md'
];

combined += '\n\n';

for (const file of slideFiles) {
    const filePath = path.join('slides', file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        combined += content + '\n\n---\n\n';
        console.log(`✅ Added: ${file}`);
    } else {
        console.log(`❌ Missing: ${file}`);
    }
}

// Write combined file
fs.writeFileSync('combined.md', combined);
console.log('\n✅ combined.md created');
console.log(`📄 Size: ${(fs.statSync('combined.md').size / 1024).toFixed(2)} KB\n`);

// Create output folder
if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
    console.log('📁 output folder created\n');
}

// Check if Marp CLI is installed
console.log('🔍 Checking Marp CLI installation...');
exec('npx @marp-team/marp-cli --version', (versionError, versionStdout, versionStderr) => {
    if (versionError) {
        console.log('❌ Marp CLI not found. Installing...');
        exec('npm install -g @marp-team/marp-cli', (installError, installStdout, installStderr) => {
            if (installError) {
                console.error('❌ Failed to install Marp CLI:', installError.message);
                console.log('\n💡 Please install manually:');
                console.log('npm install -g @marp-team/marp-cli');
                return;
            }
            console.log('✅ Marp CLI installed successfully\n');
            generatePresentation();
        });
    } else {
        console.log(`✅ Marp CLI version: ${versionStdout.trim()}\n`);
        generatePresentation();
    }
});

function generatePresentation() {
    console.log('🎨 Generating HTML presentation...');
    console.log('⏳ This may take a few seconds...\n');
    
    // Use spawn for better output handling
    const marpProcess = spawn('npx', [
        '@marp-team/marp-cli',
        'combined.md',
        '--html',
        '--output',
        'output/presentation.html'
    ], { shell: true });
    
    let outputData = '';
    let errorData = '';
    
    marpProcess.stdout.on('data', (data) => {
        outputData += data.toString();
        console.log(`📝 ${data.toString()}`);
    });
    
    marpProcess.stderr.on('data', (data) => {
        errorData += data.toString();
        console.error(`⚠️  ${data.toString()}`);
    });
    
    marpProcess.on('close', (code) => {
        console.log(`\n📋 Process exited with code: ${code}`);
        
        if (code === 0) {
            console.log('✅ HTML generation completed successfully!');
            
            // Check if file was created
            const htmlFile = path.join('output', 'presentation.html');
            if (fs.existsSync(htmlFile)) {
                const stats = fs.statSync(htmlFile);
                console.log(`\n📄 File created: ${htmlFile}`);
                console.log(`📊 Size: ${(stats.size / 1024).toFixed(2)} KB`);
                console.log(`\n🎯 Open in browser: file:///${path.resolve(htmlFile).replace(/\\/g, '/')}`);
            } else {
                console.log(`\n⚠️  HTML file not found at: ${htmlFile}`);
            }
        } else {
            console.log('\n❌ HTML generation failed!');
            
            // Try alternative method
            console.log('\n🔄 Trying alternative method...');
            exec('marp combined.md --html --output output/presentation.html', 
                (error, stdout, stderr) => {
                    if (error) {
                        console.error('❌ Alternative method also failed:', error.message);
                        console.log('\n💡 Try these commands manually:');
                        console.log('1. npx @marp-team/marp-cli combined.md --html --output output/presentation.html');
                        console.log('2. marp combined.md --html --output output/presentation.html');
                        console.log('\n💡 Or install Marp CLI:');
                        console.log('npm install -g @marp-team/marp-cli');
                        return;
                    }
                    console.log('✅ Alternative method succeeded!');
                    const htmlFile = path.join('output', 'presentation.html');
                    if (fs.existsSync(htmlFile)) {
                        const stats = fs.statSync(htmlFile);
                        console.log(`\n📄 File created: ${htmlFile}`);
                        console.log(`📊 Size: ${(stats.size / 1024).toFixed(2)} KB`);
                    }
                }
            );
        }
    });
    
    // Timeout after 30 seconds
    const timeout = setTimeout(() => {
        console.log('\n⏰ Timeout: Process taking too long...');
        marpProcess.kill();
        console.log('💡 Try running the command manually:');
        console.log('npx @marp-team/marp-cli combined.md --html --output output/presentation.html');
    }, 30000);
    
    marpProcess.on('close', () => {
        clearTimeout(timeout);
    });
}