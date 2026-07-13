// ===== LOAD SLIDES DYNAMICALLY =====
const slideFiles = [
    '01_title.html',
    '02_agenda.html',
    '03_what_are_variables.html',
    '04_memory_architecture.html',
    '05_declaration_vs_initialization.html',
    '06_var_let_const.html',
    '07_var_keyword.html',
    '08_let_keyword.html',
    '09_const_keyword.html',
    '10_scope.html',
    '11_hoisting.html',
    '12_tdz.html',
    '13_best_practices.html',
    '14_naming_conventions.html',
    '15_real_world_examples.html',
    '16_common_mistakes.html',
    '17_interview_questions.html',
    '18_recap.html',
    '19_thank_you.html'
];

// Load slides when page loads
document.addEventListener('DOMContentLoaded', async function() {
    const container = document.getElementById('slide-container');
    
    for (const file of slideFiles) {
        try {
            const response = await fetch(`slides/${file}`);
            if (!response.ok) {
                console.warn(`Could not load ${file}, skipping...`);
                continue;
            }
            const html = await response.text();
            container.innerHTML += html;
        } catch (error) {
            console.error(`Error loading ${file}:`, error);
        }
    }
    
    // Initialize Reveal.js after slides are loaded
    setTimeout(() => {
        Reveal.initialize({
            hash: true,
            slideNumber: true,
            transition: 'slide',
            transitionSpeed: 'default',
            backgroundTransition: 'fade',
            center: true,
            controls: true,
            progress: true,
            keyboard: true,
            overview: true,
            touch: true,
            loop: false,
            rtl: false,
            shuffle: false,
            fragments: true,
            embedded: false,
            help: true,
            showNotes: false,
            autoPlayMedia: null,
            preloadIframes: null,
            autoSlide: 0,
            autoSlideStoppable: true,
            defaultTiming: 120,
            mouseWheel: false,
            hideInactiveCursor: true,
            hideCursorTime: 3000,
            hideAddressBar: true,
            previewLinks: false,
            viewDistance: 3,
            display: 'block',
            plugins: [
                RevealNotes,
                RevealHighlight,
                RevealZoom
            ]
        });
    }, 500);
});