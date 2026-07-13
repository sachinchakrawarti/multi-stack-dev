// ===== EXPORT FUNCTIONS =====

let exportProgress = 0;
let isExporting = false;

function showProgress(show) {
    const progressDiv = document.getElementById('exportProgress');
    if (show) {
        progressDiv.style.display = 'block';
        document.querySelector('.export-toolbar').style.opacity = '0.3';
        document.querySelector('.export-toolbar').style.pointerEvents = 'none';
    } else {
        progressDiv.style.display = 'none';
        document.querySelector('.export-toolbar').style.opacity = '1';
        document.querySelector('.export-toolbar').style.pointerEvents = 'auto';
    }
}

function updateProgress(percent, status = '') {
    exportProgress = Math.min(percent, 100);
    document.getElementById('progressFill').style.width = exportProgress + '%';
    document.getElementById('progressStatus').textContent = Math.round(exportProgress) + '%';
    if (status) {
        document.querySelector('.progress-text').textContent = status;
    }
}

// ===== EXPORT TO PDF =====
async function exportToPDF() {
    if (isExporting) return;
    isExporting = true;
    
    try {
        showProgress(true);
        updateProgress(0, '📄 Preparing PDF export...');
        
        // Get all slides
        const slides = document.querySelectorAll('.slides > section');
        const totalSlides = slides.length;
        
        updateProgress(10, `📸 Capturing ${totalSlides} slides...`);
        
        // Create a container for the PDF
        const pdfContainer = document.createElement('div');
        pdfContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 1280px;
            background: #0a0e1a;
            z-index: -9999;
            opacity: 0;
            pointer-events: none;
        `;
        document.body.appendChild(pdfContainer);
        
        // Process each slide
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            const progress = 10 + ((i + 1) / totalSlides) * 70;
            updateProgress(progress, `📸 Processing slide ${i + 1}/${totalSlides}`);
            
            // Clone slide for PDF
            const clone = slide.cloneNode(true);
            clone.style.cssText = `
                width: 1280px;
                height: 720px;
                padding: 40px 60px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: ${slide.style.background || '#0a0e1a'};
                position: relative;
                margin: 0;
                page-break-after: always;
            `;
            
            // Ensure all elements are visible
            clone.querySelectorAll('*').forEach(el => {
                el.style.display = el.style.display === 'none' ? 'block' : el.style.display;
                el.style.visibility = 'visible';
                el.style.opacity = '1';
            });
            
            pdfContainer.appendChild(clone);
        }
        
        updateProgress(85, '📄 Generating PDF...');
        
        // Generate PDF using html2pdf
        const opt = {
            margin: 0,
            filename: `JavaScript_Variables_Presentation_${getDateString()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true,
                logging: false,
                backgroundColor: '#0a0e1a'
            },
            jsPDF: { 
                unit: 'px', 
                format: [1280, 720], 
                orientation: 'landscape' 
            }
        };
        
        // Use a temporary div for PDF generation
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = pdfContainer.innerHTML;
        tempDiv.style.cssText = `
            width: 1280px;
            background: #0a0e1a;
            padding: 0;
            margin: 0;
        `;
        document.body.appendChild(tempDiv);
        
        updateProgress(90, '💾 Saving PDF...');
        
        await html2pdf()
            .set(opt)
            .from(tempDiv)
            .save();
        
        // Cleanup
        document.body.removeChild(tempDiv);
        document.body.removeChild(pdfContainer);
        
        updateProgress(100, '✅ PDF exported successfully!');
        
        setTimeout(() => {
            showProgress(false);
            isExporting = false;
            updateProgress(0);
        }, 2000);
        
    } catch (error) {
        console.error('PDF Export Error:', error);
        alert('Error exporting PDF: ' + error.message);
        showProgress(false);
        isExporting = false;
    }
}

// ===== EXPORT TO PPTX =====
async function exportToPPTX() {
    if (isExporting) return;
    isExporting = true;
    
    try {
        showProgress(true);
        updateProgress(0, '📊 Preparing PPTX export...');
        
        const slides = document.querySelectorAll('.slides > section');
        const totalSlides = slides.length;
        
        updateProgress(10, `📸 Capturing ${totalSlides} slides...`);
        
        // Create PPTX
        const pptx = new PptxGenJS();
        pptx.defineLayout({ name: 'WIDE', width: 13.33, height: 7.5 });
        pptx.layout = 'WIDE';
        pptx.title = 'JavaScript Variables - Master Presentation';
        pptx.subject = 'JavaScript Core Series';
        pptx.author = 'JavaScript Core Series';
        
        // Process each slide
        for (let i = 0; i < slides.length; i++) {
            const slideElement = slides[i];
            const progress = 10 + ((i + 1) / totalSlides) * 80;
            updateProgress(progress, `📸 Capturing slide ${i + 1}/${totalSlides}`);
            
            try {
                // Capture screenshot
                const canvas = await html2canvas(slideElement, {
                    scale: 1.5,
                    useCORS: true,
                    logging: false,
                    backgroundColor: null,
                    width: 1280,
                    height: 720
                });
                
                // Add slide to PPTX
                const slide = pptx.addSlide();
                slide.background = { color: '0A0E1A' };
                
                slide.addImage({
                    data: canvas.toDataURL('image/png'),
                    x: 0,
                    y: 0,
                    w: 13.33,
                    h: 7.5
                });
                
            } catch (error) {
                console.warn(`Error on slide ${i + 1}:`, error);
                // Add empty slide with error message
                const slide = pptx.addSlide();
                slide.background = { color: '0A0E1A' };
                slide.addText(`Slide ${i + 1} - Error loading`, {
                    x: 1,
                    y: 3,
                    w: 11,
                    h: 1.5,
                    fontSize: 24,
                    color: 'FF6B6B',
                    align: 'center'
                });
            }
        }
        
        updateProgress(95, '💾 Saving PowerPoint file...');
        
        // Save PPTX
        const filename = `JavaScript_Variables_Presentation_${getDateString()}.pptx`;
        await pptx.writeFile({ fileName: filename });
        
        updateProgress(100, '✅ PPTX exported successfully!');
        
        setTimeout(() => {
            showProgress(false);
            isExporting = false;
            updateProgress(0);
        }, 2000);
        
    } catch (error) {
        console.error('PPTX Export Error:', error);
        alert('Error exporting PPTX: ' + error.message);
        showProgress(false);
        isExporting = false;
    }
}

// ===== HELPER FUNCTIONS =====

function getDateString() {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// ===== ADD KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
    // Ctrl+P for PDF
    if (e.ctrlKey && e.key === 'p') {
        // Let browser handle print
        return;
    }
    
    // E for Export PPTX
    if (e.key === 'e' && !e.ctrlKey && !e.metaKey) {
        if (!isExporting) {
            exportToPPTX();
        }
    }
    
    // P for PDF (without Ctrl)
    if (e.key === 'p' && !e.ctrlKey && !e.metaKey) {
        if (!isExporting) {
            exportToPDF();
        }
    }
});

// ===== STYLE THE PROGRESS INDICATOR =====
const style = document.createElement('style');
style.textContent = `
    .export-progress {
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: rgba(10, 14, 26, 0.95);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 14px;
        padding: 20px 25px;
        min-width: 280px;
        backdrop-filter: blur(20px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        z-index: 9999;
    }
    
    .export-progress .progress-text {
        color: #e2e8f0;
        font-size: 0.95rem;
        margin-bottom: 12px;
        font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    }
    
    .export-progress .progress-bar {
        width: 100%;
        height: 6px;
        background: rgba(255,255,255,0.06);
        border-radius: 3px;
        overflow: hidden;
        margin: 8px 0;
    }
    
    .export-progress .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #3b82f6, #60a5fa, #8b5cf6);
        width: 0%;
        transition: width 0.4s ease;
        border-radius: 3px;
    }
    
    .export-progress .progress-status {
        color: #94a3b8;
        font-size: 0.8rem;
        text-align: right;
        font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    }
`;
document.head.appendChild(style);