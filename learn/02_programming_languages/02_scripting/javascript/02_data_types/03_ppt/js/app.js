const { useState, useEffect, useRef, useCallback } = React;

// All component imports (they're loaded via script tags in index.html)
// Components are available as window.ComponentName

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    const [theme, setTheme] = useState('light');
    const [fontSize, setFontSize] = useState(16);
    const [timerStart, setTimerStart] = useState(Date.now());
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    
    const totalSlides = slides.length;
    const slideRef = useRef(null);

    // Use fullscreen hook
    const { isFullscreen, toggleFullscreen } = window.useFullscreen();

    // Navigation functions
    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const previousSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const homeSlide = () => {
        setCurrentSlide(0);
    };

    const goToSlide = (index) => {
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index);
        }
    };

    // Export functions
    const saveAsFile = (blob, fileName) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(link.href), 100);
    };

    const loadScript = (url) => {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${url}"]`)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    const exportToPDF = async () => {
        try {
            setIsExporting(true);
            setShowDropdown(false);

            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');

            const canvas = await html2canvas.default(slideRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                logging: false
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf.jsPDF('landscape', 'mm', 'a4');
            
            const imgWidth = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            
            const pdfBlob = pdf.output('blob');
            saveAsFile(pdfBlob, `slide-${currentSlide + 1}.pdf`);

        } catch (error) {
            console.error('PDF Export Error:', error);
            alert('Error exporting PDF. Please try again.');
        } finally {
            setIsExporting(false);
        }
    };

    const exportToPNG = async () => {
        try {
            setIsExporting(true);
            setShowDropdown(false);

            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
            
            const canvas = await html2canvas.default(slideRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff'
            });

            canvas.toBlob((blob) => {
                saveAsFile(blob, `slide-${currentSlide + 1}.png`);
            });

        } catch (error) {
            console.error('PNG Export Error:', error);
            alert('Error exporting PNG. Please try again.');
        } finally {
            setIsExporting(false);
        }
    };

    const exportToPPTX = async () => {
        try {
            setIsExporting(true);
            setShowDropdown(false);

            await loadScript('https://cdn.jsdelivr.net/gh/gitbrent/pptxgenjs/dist/pptxgen.bundle.js');
            
            const pptx = new PptxGenJS();
            pptx.defineLayout({ name: 'WIDE', width: 13.33, height: 7.5 });
            pptx.layout = 'WIDE';

            const slideData = slides[currentSlide];
            const slide = pptx.addSlide();
            slide.background = { color: 'FFFFFF' };

            if (slideData.title) {
                slide.addText(slideData.title, {
                    x: 0.5, y: 0.5, w: 12.33, h: 1.0,
                    fontSize: 32, fontFace: 'Arial', color: '0F172A',
                    bold: true, align: 'center'
                });
            }

            if (slideData.subtitle) {
                slide.addText(slideData.subtitle, {
                    x: 0.5, y: 1.6, w: 12.33, h: 0.8,
                    fontSize: 20, fontFace: 'Arial', color: '475569',
                    align: 'center'
                });
            }

            if (slideData.bullets) {
                let yPos = 2.8;
                slideData.bullets.forEach((bullet) => {
                    slide.addText(`• ${bullet}`, {
                        x: 1.0, y: yPos, w: 11.33, h: 0.6,
                        fontSize: 18, fontFace: 'Arial', color: '1E293B'
                    });
                    yPos += 0.7;
                });
            }

            if (slideData.code) {
                slide.addText(slideData.code, {
                    x: 1.0, y: 2.5, w: 11.33, h: 4.0,
                    fontSize: 16, fontFace: 'Courier New',
                    color: 'E2E8F0', fill: { color: '0F172A' },
                    valign: 'middle', lineSpacing: 1.5
                });
            }

            if (slideData.table) {
                const rows = [slideData.table.headers, ...slideData.table.rows];
                slide.addTable(rows, {
                    x: 1.0, y: 2.5, w: 11.33, h: 4.0,
                    fontSize: 16, border: { type: 'solid', color: 'E2E8F0', pt: 1 },
                    fill: { color: 'FFFFFF' }, align: 'center',
                    colW: [4, 3.66, 3.67], rowH: [0.8, 0.8, 0.8, 0.8]
                });
            }

            const pptxBlob = await pptx.write({ outputType: 'blob' });
            saveAsFile(pptxBlob, `slide-${currentSlide + 1}.pptx`);

        } catch (error) {
            console.error('PPTX Export Error:', error);
            alert('Error exporting PPTX. Please try again.');
        } finally {
            setIsExporting(false);
        }
    };

    const exportAllToPPTX = async () => {
        try {
            setIsExporting(true);
            setShowDropdown(false);

            await loadScript('https://cdn.jsdelivr.net/gh/gitbrent/pptxgenjs/dist/pptxgen.bundle.js');
            
            const pptx = new PptxGenJS();
            pptx.defineLayout({ name: 'WIDE', width: 13.33, height: 7.5 });
            pptx.layout = 'WIDE';

            for (let i = 0; i < slides.length; i++) {
                const slideData = slides[i];
                const slide = pptx.addSlide();
                slide.background = { color: 'FFFFFF' };

                if (slideData.title) {
                    slide.addText(slideData.title, {
                        x: 0.5, y: 0.5, w: 12.33, h: 1.0,
                        fontSize: 28, fontFace: 'Arial', color: '0F172A',
                        bold: true, align: 'center'
                    });
                }

                if (slideData.subtitle) {
                    slide.addText(slideData.subtitle, {
                        x: 0.5, y: 1.6, w: 12.33, h: 0.8,
                        fontSize: 18, fontFace: 'Arial', color: '475569',
                        align: 'center'
                    });
                }

                if (slideData.bullets) {
                    let yPos = 2.8;
                    slideData.bullets.forEach((bullet) => {
                        slide.addText(`• ${bullet}`, {
                            x: 1.0, y: yPos, w: 11.33, h: 0.6,
                            fontSize: 16, fontFace: 'Arial', color: '1E293B'
                        });
                        yPos += 0.7;
                    });
                }

                if (slideData.code) {
                    slide.addText(slideData.code, {
                        x: 1.0, y: 2.5, w: 11.33, h: 4.0,
                        fontSize: 14, fontFace: 'Courier New',
                        color: 'E2E8F0', fill: { color: '0F172A' },
                        valign: 'middle', lineSpacing: 1.5
                    });
                }

                if (slideData.table) {
                    const rows = [slideData.table.headers, ...slideData.table.rows];
                    slide.addTable(rows, {
                        x: 1.0, y: 2.5, w: 11.33, h: 4.0,
                        fontSize: 14, border: { type: 'solid', color: 'E2E8F0', pt: 1 },
                        fill: { color: 'FFFFFF' }, align: 'center',
                        colW: [4, 3.66, 3.67], rowH: [0.7, 0.7, 0.7, 0.7]
                    });
                }

                slide.addText(`${i + 1}/${slides.length}`, {
                    x: 11.5, y: 6.8, w: 1.33, h: 0.5,
                    fontSize: 12, color: '94A3B8', align: 'right'
                });
            }

            const pptxBlob = await pptx.write({ outputType: 'blob' });
            saveAsFile(pptxBlob, 'full-presentation.pptx');

        } catch (error) {
            console.error('PPTX Export Error:', error);
            alert('Error exporting PPTX. Please try again.');
        } finally {
            setIsExporting(false);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowRight":
                case "PageDown":
                case " ":
                    e.preventDefault();
                    nextSlide();
                    break;
                case "ArrowLeft":
                case "PageUp":
                    e.preventDefault();
                    previousSlide();
                    break;
                case "Home":
                    e.preventDefault();
                    homeSlide();
                    break;
                case "End":
                    e.preventDefault();
                    setCurrentSlide(totalSlides - 1);
                    break;
                case "f":
                case "F11":
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case "h":
                case "?":
                    e.preventDefault();
                    setShowHelp(!showHelp);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide, totalSlides, toggleFullscreen, showHelp]);

    // Auto-Play
    useEffect(() => {
        let interval;
        if (isAutoPlay && currentSlide < totalSlides - 1) {
            interval = setInterval(() => {
                nextSlide();
            }, 3000);
        } else if (isAutoPlay && currentSlide === totalSlides - 1) {
            setIsAutoPlay(false);
        }
        return () => clearInterval(interval);
    }, [isAutoPlay, currentSlide, totalSlides]);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showDropdown && !e.target.closest('.btn-export-dropdown')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showDropdown]);

    const progress = ((currentSlide + 1) / totalSlides) * 100;
    const current = slides[currentSlide];

    // Render slide using SlideRenderer
    const renderSlide = (slide) => {
        // Use the SlideRenderer component
        return <window.SlideRenderer slide={slide} />;
    };

    return (
        <div className="presentation">
            {/* Header */}
            <window.Header
                title="JavaScript PPT"
                autoPlay={isAutoPlay}
                onAutoPlayToggle={() => setIsAutoPlay(!isAutoPlay)}
                onExportClick={() => setShowDropdown(!showDropdown)}
                onSettingsClick={() => setShowSettings(!showSettings)}
                onHelpClick={() => setShowHelp(!showHelp)}
                onFullscreenToggle={toggleFullscreen}
                isFullscreen={isFullscreen}
                currentSlide={currentSlide}
                totalSlides={totalSlides}
            >
                {/* Timer */}
                <window.Timer 
                    startTime={timerStart} 
                    isRunning={isTimerRunning} 
                />

                {/* Auto-Play Button */}
                <window.AutoPlayButton 
                    isActive={isAutoPlay} 
                    onToggle={() => setIsAutoPlay(!isAutoPlay)} 
                />

                {/* Export Button */}
                <window.ExportButton
                    isExporting={isExporting}
                    showDropdown={showDropdown}
                    onToggle={() => setShowDropdown(!showDropdown)}
                    onExportPDF={exportToPDF}
                    onExportPPTX={exportToPPTX}
                    onExportAllPPTX={exportAllToPPTX}
                    onExportPNG={exportToPNG}
                />

                {/* Settings Button */}
                <button 
                    className="btn-icon"
                    onClick={() => setShowSettings(!showSettings)}
                    title="Settings"
                >
                    <i className="fas fa-cog"></i>
                </button>

                {/* Help Button */}
                <button 
                    className="btn-icon"
                    onClick={() => setShowHelp(!showHelp)}
                    title="Help (h)"
                >
                    <i className="fas fa-question-circle"></i>
                </button>

                {/* Fullscreen Button */}
                <window.FullscreenButton 
                    isFullscreen={isFullscreen} 
                    onToggle={toggleFullscreen} 
                />

                {/* Slide Counter */}
                <window.SlideCounter 
                    current={currentSlide} 
                    total={totalSlides} 
                />
            </window.Header>

            {/* Progress Bar */}
            <window.ProgressBar progress={progress} />

            {/* Slide */}
            <div className="slide-container" ref={slideRef}>
                <div style={{ fontSize: `${fontSize}px` }}>
                    {renderSlide(current)}
                </div>
            </div>

            {/* Footer */}
            <window.Footer
                onHome={homeSlide}
                onPrev={previousSlide}
                onNext={nextSlide}
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                prevDisabled={currentSlide === 0}
                nextDisabled={currentSlide === totalSlides - 1}
            />

            {/* Help Overlay */}
            <window.HelpOverlay 
                isOpen={showHelp} 
                onClose={() => setShowHelp(false)} 
            />

            {/* Settings Panel */}
            <window.SettingsPanel
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
                theme={theme}
                onThemeChange={setTheme}
                fontSize={fontSize}
                onFontSizeChange={setFontSize}
                autoPlay={isAutoPlay}
                onAutoPlayToggle={() => setIsAutoPlay(!isAutoPlay)}
            />
        </div>
    );
}

// ============================================
// Render App
// ============================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);