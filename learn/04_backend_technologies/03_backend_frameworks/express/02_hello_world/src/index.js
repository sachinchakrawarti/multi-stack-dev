/**
 * Express.js - Hello World with CDN
 * Simple Express server with CDN integration
 */

// ============================================================
// 1. IMPORTS
// ============================================================

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

// ============================================================
// 2. INITIALIZE APP
// ============================================================

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// 3. CDN CONFIGURATION
// ============================================================

// CDN URLs for frontend libraries
const CDN = {
    // CSS Libraries
    bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
    bootstrapIcons: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
    fontAwesome: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    
    // JavaScript Libraries
    alpinejs: 'https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js',
    axios: 'https://cdn.jsdelivr.net/npm/axios@1.6.5/dist/axios.min.js',
    htmx: 'https://unpkg.com/htmx.org@1.9.10',
    
    // Utility
    lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js'
};

// ============================================================
// 4. MIDDLEWARE
// ============================================================

// CORS
app.use(cors({
    origin: '*',
    credentials: true
}));

// Logging
app.use(morgan('dev'));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (local fallback)
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: 31556926 // 1 year cache
}));

// ============================================================
// 5. VIEW ENGINE
// ============================================================

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ============================================================
// 6. CDN INJECTION MIDDLEWARE
// ============================================================

app.use((req, res, next) => {
    // Inject CDN URLs into all templates
    res.locals.cdn = CDN;
    res.locals.timestamp = new Date().toISOString();
    res.locals.nodeEnv = process.env.NODE_ENV || 'development';
    next();
});

// ============================================================
// 7. ROUTES
// ============================================================

// Hello World Route
app.get('/', (req, res) => {
    res.render('hello', {
        title: 'Hello World - Express CDN',
        message: 'Hello from Express.js with CDN! 🚀',
        features: [
            { icon: 'fa-cloud', title: 'CDN Integration', desc: 'Fast delivery via CDN' },
            { icon: 'fa-bolt', title: 'Lightning Fast', desc: 'Optimized performance' },
            { icon: 'fa-shield', title: 'Secure', desc: 'Best security practices' },
            { icon: 'fa-code', title: 'Modern Stack', desc: 'Express.js + EJS' }
        ],
        libraries: [
            { name: 'Bootstrap', version: '5.3.2', type: 'CSS' },
            { name: 'Font Awesome', version: '6.5.1', type: 'CSS' },
            { name: 'Alpine.js', version: '3.14.1', type: 'JavaScript' },
            { name: 'Axios', version: '1.6.5', type: 'JavaScript' },
            { name: 'HTMX', version: '1.9.10', type: 'JavaScript' },
            { name: 'Lodash', version: '4.17.21', type: 'JavaScript' }
        ]
    });
});

// About Route
app.get('/about', (req, res) => {
    res.render('hello', {
        title: 'About - Express CDN',
        message: 'About Express.js CDN Template',
        features: [
            { icon: 'fa-info', title: 'About', desc: 'Learning Express.js with CDN' }
        ],
        libraries: []
    });
});

// Health Check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        version: process.version,
        cdn: Object.keys(CDN)
    });
});

// ============================================================
// 8. ERROR HANDLING
// ============================================================

// 404 Handler
app.use((req, res) => {
    res.status(404).render('hello', {
        title: '404 - Not Found',
        message: 'Page not found 😢',
        features: [],
        libraries: []
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).render('hello', {
        title: '500 - Server Error',
        message: 'Something went wrong 😢',
        features: [],
        libraries: []
    });
});

// ============================================================
// 9. START SERVER
// ============================================================

app.listen(PORT, () => {
    console.log('========================================');
    console.log('🚀 Express.js Hello World with CDN');
    console.log('========================================');
    console.log(`📡 Server: http://localhost:${PORT}`);
    console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📊 Health: http://localhost:${PORT}/health`);
    console.log('========================================');
    console.log('📦 CDN Libraries Loaded:');
    Object.keys(CDN).forEach(key => {
        console.log(`   - ${key}`);
    });
    console.log('========================================');
});

// ============================================================
// 10. EXPORT
// ============================================================

module.exports = app;