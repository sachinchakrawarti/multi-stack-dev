// md-to-docx.js
// Convert specific Markdown file to DOCX format

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, 
        AlignmentType, convertInchesToTwip } = require('docx');

// ============================================
// Configuration - Update these paths
// ============================================
const CONFIG = {
    // Source markdown file
    mdFile: 'D:/Sachin Chakrawarti/Learn/Done/multi-stack-dev/learn/03_frontend_technologies/04_javascript_frameworks/03_react/00_introduction/01_docs/01_md/0001_what_is_react/what_is_react.md',
    
    // Output DOCX file
    docxFile: 'D:/Sachin Chakrawarti/Learn/Done/multi-stack-dev/learn/03_frontend_technologies/04_javascript_frameworks/03_react/00_introduction/01_docs/02_docx/0001_what_is_react/what_is_react.docx'
};

// ============================================
// Helper Functions
// ============================================

/**
 * Parse inline formatting (bold, italic, code, links)
 */
function parseInlineFormatting(text) {
    const textRuns = [];
    
    // Process bold: **text** or __text__
    const boldRegex = /\*\*(.*?)\*\*|__(.*?)__/g;
    let lastIndex = 0;
    let match;
    let hasFormatting = false;
    
    // Simple approach - split by formatting
    const parts = [];
    let remaining = text;
    
    // Handle bold
    const boldMatches = [...text.matchAll(/\*\*(.*?)\*\*|__(.*?)__/g)];
    const italicMatches = [...text.matchAll(/\*(.*?)\*|_(.*?)_/g)];
    const codeMatches = [...text.matchAll(/`(.*?)`/g)];
    const linkMatches = [...text.matchAll(/\[(.*?)\]\((.*?)\)/g)];
    
    // Combine all matches
    const allMatches = [];
    
    boldMatches.forEach(m => {
        const fullMatch = m[0];
        const content = m[1] || m[2];
        const index = m.index;
        allMatches.push({ index, fullMatch, content, type: 'bold' });
    });
    
    italicMatches.forEach(m => {
        const fullMatch = m[0];
        const content = m[1] || m[2];
        const index = m.index;
        allMatches.push({ index, fullMatch, content, type: 'italic' });
    });
    
    codeMatches.forEach(m => {
        const fullMatch = m[0];
        const content = m[1];
        const index = m.index;
        allMatches.push({ index, fullMatch, content, type: 'code' });
    });
    
    linkMatches.forEach(m => {
        const fullMatch = m[0];
        const content = m[1];
        const url = m[2];
        const index = m.index;
        allMatches.push({ index, fullMatch, content, type: 'link', url });
    });
    
    // Sort by index
    allMatches.sort((a, b) => a.index - b.index);
    
    if (allMatches.length === 0) {
        // No formatting, return plain text
        textRuns.push(new TextRun({
            text: text,
            size: 24,
        }));
        return textRuns;
    }
    
    // Build text runs with formatting
    let currentIndex = 0;
    
    allMatches.forEach(match => {
        // Add text before the match
        if (match.index > currentIndex) {
            const beforeText = text.substring(currentIndex, match.index);
            if (beforeText.trim()) {
                textRuns.push(new TextRun({
                    text: beforeText,
                    size: 24,
                }));
            }
        }
        
        // Add the formatted text
        switch (match.type) {
            case 'bold':
                textRuns.push(new TextRun({
                    text: match.content,
                    size: 24,
                    bold: true,
                }));
                break;
            case 'italic':
                textRuns.push(new TextRun({
                    text: match.content,
                    size: 24,
                    italics: true,
                }));
                break;
            case 'code':
                textRuns.push(new TextRun({
                    text: match.content,
                    size: 20,
                    font: 'Courier New',
                    color: '333333',
                }));
                break;
            case 'link':
                textRuns.push(new TextRun({
                    text: match.content,
                    size: 24,
                    color: '0066CC',
                    underline: { type: 'single' },
                }));
                break;
        }
        
        currentIndex = match.index + match.fullMatch.length;
    });
    
    // Add remaining text
    if (currentIndex < text.length) {
        const remainingText = text.substring(currentIndex);
        if (remainingText.trim()) {
            textRuns.push(new TextRun({
                text: remainingText,
                size: 24,
            }));
        }
    }
    
    return textRuns;
}

/**
 * Parse markdown content and convert to DOCX document structure
 */
function parseMarkdownToDocx(content) {
    const tokens = marked.lexer(content);
    const children = [];
    
    tokens.forEach(token => {
        switch (token.type) {
            case 'heading': {
                const headingText = token.text;
                const level = token.depth;
                
                // Determine heading size (smaller number = larger text)
                let size = 32;
                let bold = true;
                
                switch (level) {
                    case 1: size = 36; break;
                    case 2: size = 32; break;
                    case 3: size = 28; break;
                    case 4: size = 24; break;
                    case 5: size = 22; break;
                    case 6: size = 20; break;
                    default: size = 24;
                }
                
                children.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: headingText,
                                size: size * 2,
                                bold: bold,
                                font: 'Arial',
                                color: '1a1a2e',
                            }),
                        ],
                        heading: HeadingLevel[`HEADING_${Math.min(level, 6)}`],
                        spacing: {
                            before: 400,
                            after: 200,
                        },
                    })
                );
                break;
            }
            
            case 'paragraph': {
                const text = token.text.trim();
                if (text) {
                    const textRuns = parseInlineFormatting(text);
                    children.push(
                        new Paragraph({
                            children: textRuns,
                            spacing: {
                                after: 150,
                            },
                        })
                    );
                }
                break;
            }
            
            case 'list': {
                token.items.forEach(item => {
                    const isOrdered = token.ordered;
                    const prefix = isOrdered ? `${token.items.indexOf(item) + 1}.` : '•';
                    const itemText = item.text;
                    
                    const textRuns = parseInlineFormatting(itemText);
                    
                    children.push(
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${prefix} `,
                                    size: 24,
                                }),
                                ...textRuns,
                            ],
                            spacing: {
                                after: 80,
                            },
                            indent: {
                                firstLine: 360,
                                hanging: 360,
                            },
                        })
                    );
                });
                break;
            }
            
            case 'code': {
                const codeText = token.text;
                children.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: codeText,
                                size: 20,
                                font: 'Courier New',
                                color: '333333',
                            }),
                        ],
                        spacing: {
                            before: 120,
                            after: 120,
                        },
                        shading: {
                            fill: 'f4f4f4',
                        },
                    })
                );
                break;
            }
            
            case 'blockquote': {
                const quoteText = token.text;
                children.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `❝ ${quoteText} ❞`,
                                size: 22,
                                italics: true,
                                color: '666666',
                            }),
                        ],
                        spacing: {
                            before: 120,
                            after: 120,
                        },
                        indent: {
                            left: 720,
                        },
                    })
                );
                break;
            }
            
            case 'table': {
                // Handle table header
                if (token.header && token.header.length > 0) {
                    const headerCells = token.header.map(cell => 
                        new TextRun({
                            text: cell.text || '',
                            size: 22,
                            bold: true,
                        })
                    );
                    
                    children.push(
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: headerCells.map(run => run.text).join(' | '),
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 80,
                            },
                        })
                    );
                }
                
                // Handle table rows
                if (token.rows && token.rows.length > 0) {
                    token.rows.forEach(row => {
                        const rowCells = row.map(cell => 
                            new TextRun({
                                text: cell.text || '',
                                size: 22,
                            })
                        );
                        
                        children.push(
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: rowCells.map(run => run.text).join(' | '),
                                        size: 22,
                                    }),
                                ],
                                spacing: {
                                    after: 60,
                                },
                            })
                        );
                    });
                }
                break;
            }
            
            case 'hr': {
                children.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: '──────────────────────────────────────────────',
                                size: 20,
                                color: '999999',
                            }),
                        ],
                        spacing: {
                            before: 200,
                            after: 200,
                        },
                        alignment: AlignmentType.CENTER,
                    })
                );
                break;
            }
        }
    });
    
    return children;
}

// ============================================
// Main Function
// ============================================
async function convertMarkdownToDocx() {
    try {
        console.log('📄 Starting conversion...');
        
        // Ensure the output directory exists
        const outputDir = path.dirname(CONFIG.docxFile);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
            console.log(`✅ Created output directory: ${outputDir}`);
        }
        
        // Read the markdown file
        if (!fs.existsSync(CONFIG.mdFile)) {
            throw new Error(`Markdown file not found: ${CONFIG.mdFile}`);
        }
        
        const markdownContent = fs.readFileSync(CONFIG.mdFile, 'utf8');
        console.log(`✅ Read markdown file: ${path.basename(CONFIG.mdFile)}`);
        
        // Parse markdown to DOCX structure
        const content = parseMarkdownToDocx(markdownContent);
        console.log(`✅ Parsed markdown content`);
        
        // Create the document
        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: convertInchesToTwip(1),
                            bottom: convertInchesToTwip(1),
                            left: convertInchesToTwip(1.25),
                            right: convertInchesToTwip(1.25),
                        },
                    },
                },
                children: content,
            }],
        });
        
        // Generate the DOCX file
        const buffer = await Packer.toBuffer(doc);
        
        // Write the DOCX file
        fs.writeFileSync(CONFIG.docxFile, buffer);
        console.log(`✅ DOCX file created: ${CONFIG.docxFile}`);
        
        // Get file size
        const stats = fs.statSync(CONFIG.docxFile);
        const fileSizeInKB = (stats.size / 1024).toFixed(2);
        console.log(`📊 File size: ${fileSizeInKB} KB`);
        
        console.log('\n🎉 Conversion completed successfully!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        if (error.stack) {
            console.error(error.stack);
        }
        process.exit(1);
    }
}

// ============================================
// Run the conversion
// ============================================
console.log('🚀 Markdown to DOCX Converter');
console.log('================================');
console.log(`📁 Input:  ${CONFIG.mdFile}`);
console.log(`📁 Output: ${CONFIG.docxFile}`);
console.log('================================\n');

convertMarkdownToDocx();