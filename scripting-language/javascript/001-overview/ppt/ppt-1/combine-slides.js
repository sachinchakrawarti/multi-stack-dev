// combine-slides.js
const fs = require('fs');
const path = require('path');

// Read all slide files
const slidesDir = 'slides';
const files = fs.readdirSync(slidesDir)
    .filter(f => f.endsWith('.md'))
    .sort();

if (files.length === 0) {
    console.error('No markdown files found');
    process.exit(1);
}

console.log('  Found ' + files.length + ' slide files');

// Build combined markdown
let combined = `---
marp: true
theme: uncover
paginate: true
style: |
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
    font-size: 32px;
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
---

<!-- _class: title-slide -->

# 🚀 JavaScript Complete Guide

## Master JavaScript From Basics to Advanced

### *A Comprehensive 20-Part Series*

---

# 📚 Table of Contents

`;

// Add table of contents
files.forEach((file, index) => {
    const content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
    const lines = content.split('\n');
    let title = 'Slide ' + (index + 1);
    for (const line of lines) {
        if (line.startsWith('# ')) {
            title = line.replace('# ', '');
            break;
        }
    }
    combined += (index + 1) + '. ' + title + '\n';
});

combined += '\n---\n\n';

// Add all slides
files.forEach((file) => {
    const content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
    combined += content.trim() + '\n\n---\n\n';
});

// Add thank you slide
combined += `<!-- _class: title-slide -->

# 🎉 Thank You!

## Happy Coding! 💻🚀

---

*"JavaScript is the language of the web, and it's here to stay!"*

**Keep Learning, Keep Building!** 🌟
`;

// Write combined file
fs.writeFileSync('combined.md', combined);
console.log('✅ Combined slides created: combined.md');
console.log('  Total slides: ' + (files.length + 2));