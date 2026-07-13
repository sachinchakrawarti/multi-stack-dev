// convert.js
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configuration
const CONFIG = {
    slidesDir: 'slides',
    outputDir: 'output',
    combinedFile: 'slides.md',
    outputPPTX: 'JavaScript_Complete_Overview.pptx',
    primaryColor: '#F7DF1E',
    secondaryColor: '#000000'
};

// Create output directory if it doesn't exist
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
    }
}

// Read all markdown files in order
function readSlides() {
    const slidesPath = path.join(__dirname, CONFIG.slidesDir);
    const files = fs.readdirSync(slidesPath)
        .filter(file => file.endsWith('.md'))
        .sort(); // Sorts alphabetically (01, 02, 03...)

    console.log(`📖 Found ${files.length} slide files`);
    
    const slides = [];
    files.forEach((file, index) => {
        const content = fs.readFileSync(path.join(slidesPath, file), 'utf8');
        slides.push({
            file: file,
            content: content,
            number: index + 1
        });
        console.log(`  ✅ ${file} (${content.split('\n').length} lines)`);
    });
    
    return slides;
}

// Create combined markdown file
function createCombinedMarkdown(slides) {
    const header = `---
marp: true
theme: uncover
paginate: true
style: |
  /* Global Styles */
  section {
    background: #FFFFFF;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  section.title-slide {
    background: #F7DF1E;
  }
  section.title-slide h1 {
    color: #000000;
    font-size: 56px;
  }
  section.title-slide h2 {
    color: #333333;
    font-size: 28px;
  }
  h1 {
    color: #1E1E1E;
    font-size: 40px;
  }
  h2 {
    color: #2C3E50;
    font-size: 32px;
  }
  code {
    background: #1E1E1E;
    color: #F7DF1E;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Consolas', monospace;
  }
  pre {
    background: #1E1E1E;
    color: #F7DF1E;
    padding: 15px;
    border-radius: 8px;
    font-family: 'Consolas', monospace;
  }
  table {
    font-size: 18px;
    border-collapse: collapse;
    width: 100%;
  }
  th {
    background: #F7DF1E;
    color: #000000;
    padding: 10px;
  }
  td {
    padding: 8px;
    border-bottom: 1px solid #DDD;
  }
  .highlight {
    background: #FFF3CD;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .quote {
    font-style: italic;
    color: #555;
    border-left: 4px solid #F7DF1E;
    padding-left: 20px;
  }
---

`;

    // Start with title slide
    let combined = header + `
<!-- _class: title-slide -->

# 🚀 JavaScript Complete Guide

## From Basics to Advanced

### *A Comprehensive 20-Part Series*

---

📚 **Table of Contents**

`;

    // Add table of contents
    slides.forEach((slide, index) => {
        // Extract title from markdown (first line that starts with #)
        const lines = slide.content.split('\n');
        let title = `Slide ${index + 1}`;
        for (const line of lines) {
            if (line.startsWith('# ')) {
                title = line.replace('# ', '');
                break;
            }
        }
        combined += `${index + 1}. ${title}\n`;
    });

    combined += '\n---\n\n';

    // Add all slide content with slide separators
    slides.forEach((slide, index) => {
        // Remove any existing slide separators and clean content
        let content = slide.content;
        
        // Ensure content starts with a heading
        if (!content.trim().startsWith('#')) {
            content = `# ${slide.file.replace('.md', '').replace(/-/g, ' ')}\n\n${content}`;
        }
        
        // Add slide content (without duplicate separators)
        combined += content.trim() + '\n\n---\n\n';
    });

    // Write combined file
    const outputPath = path.join(__dirname, CONFIG.combinedFile);
    fs.writeFileSync(outputPath, combined, 'utf8');
    console.log(`✅ Created combined markdown: ${CONFIG.combinedFile}`);
    console.log(`📊 Total slides: ${slides.length}`);
    
    return outputPath;
}

// Convert to PowerPoint using marp2pptx
function convertToPPTX() {
    return new Promise((resolve, reject) => {
        const inputFile = path.join(__dirname, CONFIG.combinedFile);
        const outputFile = path.join(__dirname, CONFIG.outputDir, CONFIG.outputPPTX);
        
        ensureDirectoryExists(CONFIG.outputDir);
        
        const command = `marp2pptx "${inputFile}" -o "${outputFile}" --primary-color "${CONFIG.primaryColor}" --secondary-color "${CONFIG.secondaryColor}"`;
        
        console.log(`\n🔄 Converting to PowerPoint...`);
        console.log(`📥 Input: ${CONFIG.combinedFile}`);
        console.log(`📤 Output: ${CONFIG.outputDir}/${CONFIG.outputPPTX}`);
        
        const process = exec(command);
        
        process.stdout.on('data', (data) => {
            console.log(data);
        });
        
        process.stderr.on('data', (data) => {
            console.error(data);
        });
        
        process.on('close', (code) => {
            if (code === 0) {
                console.log(`\n✅ Successfully created: ${CONFIG.outputDir}/${CONFIG.outputPPTX}`);
                resolve(outputFile);
            } else {
                reject(new Error(`Process exited with code ${code}`));
            }
        });
    });
}

// Check if marp2pptx is installed
function checkMarpInstalled() {
    return new Promise((resolve) => {
        exec('marp2pptx --version', (error) => {
            if (error) {
                console.log('❌ marp2pptx not found. Installing...');
                const install = exec('npm install -g marp2pptx');
                install.stdout.pipe(process.stdout);
                install.stderr.pipe(process.stderr);
                install.on('close', (code) => {
                    resolve(code === 0);
                });
            } else {
                console.log('✅ marp2pptx is installed');
                resolve(true);
            }
        });
    });
}

// Main function
async function main() {
    console.log('🚀 JavaScript Presentation Generator\n');
    console.log('📂 Working Directory:', __dirname);
    console.log('📁 Slides Directory:', CONFIG.slidesDir);
    console.log('📁 Output Directory:', CONFIG.outputDir);
    console.log('━'.repeat(50));
    
    // Check if slides directory exists
    if (!fs.existsSync(path.join(__dirname, CONFIG.slidesDir))) {
        console.error(`❌ Slides directory not found: ${CONFIG.slidesDir}`);
        console.log('\n💡 Please create the slides directory and add your .md files');
        return;
    }
    
    // Read all slides
    const slides = readSlides();
    
    if (slides.length === 0) {
        console.error('❌ No markdown files found in slides directory');
        return;
    }
    
    // Check and install marp2pptx
    const installed = await checkMarpInstalled();
    if (!installed) {
        console.error('❌ Failed to install marp2pptx');
        return;
    }
    
    // Create combined markdown
    createCombinedMarkdown(slides);
    
    // Convert to PowerPoint
    try {
        await convertToPPTX();
        
        // Get file info
        const outputPath = path.join(__dirname, CONFIG.outputDir, CONFIG.outputPPTX);
        const stats = fs.statSync(outputPath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        console.log(`\n📊 File Size: ${fileSizeMB} MB`);
        console.log(`📄 Total Slides: ${slides.length}`);
        console.log('\n✅ Presentation ready!');
        console.log(`📍 Location: ${outputPath}`);
        
        // Show slide titles
        console.log('\n📋 Slide Titles:');
        slides.forEach((slide, i) => {
            const lines = slide.content.split('\n');
            let title = `Slide ${i + 1}`;
            for (const line of lines) {
                if (line.startsWith('# ')) {
                    title = line.replace('# ', '');
                    break;
                }
            }
            console.log(`  ${String(i + 1).padStart(2, '0')}. ${title}`);
        });
        
    } catch (error) {
        console.error('❌ Error during conversion:', error.message);
    }
}

// Run
main();