// basic_props example
/**
 * React CDN Template
 * 
 * This is the entry point for your React application.
 * Everything starts from here.
 */

// ============================================================
// 1. BASIC COMPONENT
// ============================================================

function App() {
    return (
        <div className="container">
            {/* Logo */}
            <div className="logo">⚛️</div>
            
            {/* Heading */}
            <h1>React is Ready!</h1>
            
            {/* Subtitle */}
            <p className="subtitle">
                CDN setup is working perfectly
            </p>
            
            {/* Status Badge */}
            <div className="status">
                ✅ React {React.version} loaded
            </div>
            
            {/* Quick Info */}
            <div style={{ marginTop: '30px', color: '#8b949e', fontSize: '14px' }}>
                <p>📦 File: app.jsx</p>
                <p>🚀 Start editing to see changes</p>
            </div>
        </div>
    );
}

// ============================================================
// 2. RENDER TO DOM
// ============================================================

// Get the root element
const rootElement = document.getElementById('root');

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(<App />);

// ============================================================
// 3. CONSOLE LOG (for debugging)
// ============================================================

console.log('⚛️ React App is running!');
console.log('📦 React Version:', React.version);
console.log('🔄 App component rendered successfully');