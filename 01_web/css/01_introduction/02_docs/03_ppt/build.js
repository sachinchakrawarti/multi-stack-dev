const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🚀 Building presentation with Blue Theme...\n');

// Read main file
console.log('📖 Reading presentation.marp.md...');
let combined = fs.readFileSync('presentation.marp.md', 'utf8');

// Get all slide files
const slideFiles = fs.readdirSync('slides')
    .filter(f => f.endsWith('.md'))
    .sort();

combined += '\n\n';

for (const file of slideFiles) {
    const filePath = path.join('slides', file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if corresponding CSS file exists
        const cssFile = file.replace('.md', '.css');
        const cssPath = path.join('slides', cssFile);
        
        if (fs.existsSync(cssPath)) {
            const cssContent = fs.readFileSync(cssPath, 'utf8');
            // Inject CSS as a style tag properly
            const styleTag = `<style>\n${cssContent}\n</style>\n\n`;
            // Add after frontmatter if present
            if (content.startsWith('---')) {
                const parts = content.split('---');
                if (parts.length >= 3) {
                    // Has frontmatter
                    content = parts[0] + '---' + parts[1] + '---\n\n' + styleTag + parts.slice(2).join('---');
                } else {
                    content = styleTag + content;
                }
            } else {
                content = styleTag + content;
            }
            console.log(`🎨 Added CSS: ${cssFile}`);
        }
        
        combined += content + '\n\n---\n\n';
        console.log(`✅ Added: ${file}`);
    }
}

// Write combined file
fs.writeFileSync('combined.md', combined);
console.log('\n✅ combined.md created');
console.log(`📄 Size: ${(fs.statSync('combined.md').size / 1024).toFixed(2)} KB`);

// Create output folder
if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
    console.log('📁 output folder created');
}

// Generate HTML
console.log('\n🎨 Generating HTML with Blue Theme...');
exec('npx @marp-team/marp-cli combined.md --html --output output/presentation.html', 
    (error, stdout, stderr) => {
        if (error) {
            console.error('❌ Error:', error.message);
            console.log('\n💡 Trying alternative method...');
            exec('marp combined.md --html --output output/presentation.html', 
                (err2, stdout2, stderr2) => {
                    if (err2) {
                        console.error('❌ Both methods failed!');
                        return;
                    }
                    console.log('✅ Presentation generated successfully!');
                }
            );
            return;
        }
        console.log('✅ Presentation generated successfully!');
        console.log('📄 Output: output/presentation.html');
    }
);