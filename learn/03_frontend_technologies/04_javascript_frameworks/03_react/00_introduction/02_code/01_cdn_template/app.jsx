/**
 * React CDN Template
 * All components in one file - No imports needed!
 * Babel standalone will process this automatically
 */

// ============================================================
// 1. HEADER COMPONENT
// ============================================================

function Header({ title = "React App", user = null }) {
    return (
        <header style={{
            background: '#161b22',
            padding: '20px',
            borderBottom: '2px solid #30363d',
            marginBottom: '20px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1 style={{ color: '#58a6ff', fontSize: '24px' }}>
                    {title}
                </h1>
                
                <nav>
                    <a href="#" style={{ color: '#8b949e', marginRight: '20px' }}>Home</a>
                    <a href="#" style={{ color: '#8b949e', marginRight: '20px' }}>About</a>
                    <a href="#" style={{ color: '#8b949e' }}>Contact</a>
                    
                    {user && (
                        <span style={{ color: '#3fb950', marginLeft: '20px' }}>
                            👤 {user}
                        </span>
                    )}
                </nav>
            </div>
        </header>
    );
}

// ============================================================
// 2. FOOTER COMPONENT
// ============================================================

function Footer({ year = new Date().getFullYear(), company = "Your Company" }) {
    return (
        <footer style={{
            background: '#161b22',
            padding: '20px',
            marginTop: '30px',
            borderTop: '2px solid #30363d',
            textAlign: 'center',
            color: '#8b949e'
        }}>
            <p>© {year} {company}. All rights reserved.</p>
            <p style={{ fontSize: '14px', marginTop: '5px' }}>
                Built with React ⚛️
            </p>
        </footer>
    );
}

// ============================================================
// 3. BUTTON COMPONENT
// ============================================================

function Button({ 
    label, 
    onClick, 
    variant = 'primary', 
    size = 'medium',
    disabled = false
}) {
    const variants = {
        primary: { background: '#238636', color: 'white', hover: '#2ea043' },
        secondary: { background: '#21262d', color: 'white', hover: '#30363d' },
        danger: { background: '#da3633', color: 'white', hover: '#f85149' },
        outline: { background: 'transparent', color: '#58a6ff', border: '1px solid #58a6ff' }
    };

    const sizes = {
        small: { padding: '6px 12px', fontSize: '12px' },
        medium: { padding: '10px 20px', fontSize: '16px' },
        large: { padding: '14px 28px', fontSize: '18px' }
    };

    const style = {
        padding: sizes[size].padding,
        fontSize: sizes[size].fontSize,
        background: variants[variant].background,
        color: variants[variant].color,
        border: variants[variant].border || 'none',
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.3s ease',
        margin: '5px'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={style}
            onMouseEnter={(e) => {
                if (!disabled) {
                    e.target.style.background = variants[variant].hover || variants[variant].background;
                }
            }}
            onMouseLeave={(e) => {
                if (!disabled) {
                    e.target.style.background = variants[variant].background;
                }
            }}
        >
            {label}
        </button>
    );
}

// ============================================================
// 4. USER CARD COMPONENT
// ============================================================

function UserCard({ 
    name, 
    email, 
    age, 
    city, 
    role = "User",
    skills = []
}) {
    return (
        <div style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            width: '280px',
            display: 'inline-block',
            verticalAlign: 'top'
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#238636',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                fontSize: '32px',
                color: 'white'
            }}>
                {name.charAt(0).toUpperCase()}
            </div>

            <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
                {name}
            </h3>
            
            <div style={{ color: '#8b949e', fontSize: '14px' }}>
                <p>📧 {email}</p>
                <p>🎂 Age: {age}</p>
                <p>📍 {city}</p>
                <p>💼 {role}</p>
                
                {skills.length > 0 && (
                    <div style={{ marginTop: '10px' }}>
                        <strong>Skills:</strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '5px' }}>
                            {skills.map((skill, index) => (
                                <span key={index} style={{
                                    background: '#21262d',
                                    padding: '2px 10px',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    color: '#58a6ff'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// ============================================================
// 5. CARD COMPONENT (Container)
// ============================================================

function Card({ children, title = null, subtitle = null, icon = null }) {
    return (
        <div style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
        }}>
            {(title || subtitle || icon) && (
                <div style={{ 
                    marginBottom: '15px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid #30363d'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {icon && <span style={{ fontSize: '24px' }}>{icon}</span>}
                        {title && <h2 style={{ margin: 0 }}>{title}</h2>}
                    </div>
                    {subtitle && (
                        <p style={{ color: '#8b949e', marginTop: '5px', fontSize: '14px' }}>
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {children}
        </div>
    );
}

// ============================================================
// 6. ALERT COMPONENT
// ============================================================

function Alert({ 
    type = 'info', 
    message, 
    children,
    dismissible = false,
    onDismiss = null
}) {
    const types = {
        info: { background: '#1f6feb', color: '#58a6ff', icon: 'ℹ️' },
        success: { background: '#0d4426', color: '#3fb950', icon: '✅' },
        warning: { background: '#3d2e00', color: '#d29922', icon: '⚠️' },
        error: { background: '#4a1a1a', color: '#f85149', icon: '❌' }
    };

    const currentType = types[type] || types.info;

    return (
        <div style={{
            background: currentType.background,
            border: `1px solid ${currentType.color}`,
            borderRadius: '6px',
            padding: '12px 20px',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#e6edf3'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>{currentType.icon}</span>
                <span>{message || children}</span>
            </div>
            
            {dismissible && onDismiss && (
                <button
                    onClick={onDismiss}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#8b949e',
                        cursor: 'pointer',
                        fontSize: '18px'
                    }}
                >
                    ✕
                </button>
            )}
        </div>
    );
}

// ============================================================
// 7. COUNTER COMPONENT
// ============================================================

function Counter({ initialValue = 0, step = 1, min = null, max = null }) {
    const [count, setCount] = React.useState(initialValue);

    const increment = () => {
        if (max !== null && count >= max) return;
        setCount(count + step);
    };

    const decrement = () => {
        if (min !== null && count <= min) return;
        setCount(count - step);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return (
        <div style={{
            background: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '48px', marginBottom: '20px', color: '#58a6ff' }}>
                {count}
            </h2>
            
            <div>
                <Button label="−" onClick={decrement} variant="secondary" />
                <Button label="Reset" onClick={reset} variant="primary" />
                <Button label="+" onClick={increment} variant="secondary" />
            </div>
            
            <div style={{ marginTop: '10px', color: '#8b949e', fontSize: '14px' }}>
                Step: {step} {min !== null && `| Min: ${min}`} {max !== null && `| Max: ${max}`}
            </div>
        </div>
    );
}

// ============================================================
// 8. PRODUCT LIST COMPONENT
// ============================================================

function ProductItem({ product }) {
    return (
        <div style={{
            background: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '6px',
            padding: '15px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <h4 style={{ color: '#e6edf3' }}>{product.name}</h4>
                <p style={{ color: '#8b949e', fontSize: '14px' }}>
                    {product.category}
                </p>
            </div>
            <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#3fb950', fontWeight: 'bold' }}>
                    ₹{product.price}
                </p>
                <p style={{ 
                    color: product.inStock ? '#3fb950' : '#f85149',
                    fontSize: '12px'
                }}>
                    {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </p>
            </div>
        </div>
    );
}

function ProductList({ products, title = "Products" }) {
    return (
        <div style={{ margin: '10px 0' }}>
            <h3 style={{ marginBottom: '15px' }}>{title}</h3>
            {products.length === 0 ? (
                <p style={{ color: '#8b949e' }}>No products available</p>
            ) : (
                products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))
            )}
        </div>
    );
}

// ============================================================
// 9. MAIN APP COMPONENT
// ============================================================

function App() {
    const [showAlert, setShowAlert] = React.useState(true);

    // Sample data
    const users = [
        { name: "Sachin Kumar", email: "sachin@example.com", age: 25, city: "Mumbai", role: "Developer", skills: ["React", "JavaScript", "CSS"] },
        { name: "Priya Singh", email: "priya@example.com", age: 28, city: "Delhi", role: "Designer", skills: ["UI/UX", "Figma"] },
        { name: "Rahul Sharma", email: "rahul@example.com", age: 30, city: "Bangalore", role: "Manager", skills: ["Leadership", "Project Management"] }
    ];

    const products = [
        { name: "Laptop", price: 45000, category: "Electronics", inStock: true },
        { name: "Book", price: 500, category: "Education", inStock: false },
        { name: "Headphones", price: 2500, category: "Accessories", inStock: true },
        { name: "Mouse", price: 800, category: "Accessories", inStock: true }
    ];

    return (
        <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Header */}
            <Header title="React Component Library" user="Sachin" />

            {/* Main Content */}
            <main style={{ flex: 1 }}>
                <h1 style={{ marginBottom: '20px', color: '#e6edf3' }}>
                    🎯 React Components Demo
                </h1>

                {/* Alert */}
                {showAlert && (
                    <Alert 
                        type="success" 
                        message="🎉 All components are working perfectly!"
                        dismissible
                        onDismiss={() => setShowAlert(false)}
                    />
                )}

                {/* Buttons Section */}
                <Card title="Buttons" subtitle="Different variants and sizes">
                    <div>
                        <Button label="Primary" variant="primary" />
                        <Button label="Secondary" variant="secondary" />
                        <Button label="Danger" variant="danger" />
                        <Button label="Outline" variant="outline" />
                        <Button label="Large" size="large" variant="primary" />
                        <Button label="Small" size="small" variant="primary" />
                        <Button label="Disabled" disabled variant="primary" />
                    </div>
                </Card>

                {/* Counter */}
                <Card title="Counter" subtitle="Interactive counter with controls">
                    <Counter initialValue={0} step={1} min={0} max={10} />
                </Card>

                {/* User Cards */}
                <Card title="User Profiles" subtitle="Displaying user information">
                    <div>
                        {users.map((user, index) => (
                            <UserCard key={index} {...user} />
                        ))}
                    </div>
                </Card>

                {/* Product List */}
                <Card title="Product Catalog" subtitle="Available products">
                    <ProductList products={products} />
                </Card>

                {/* Info Alert */}
                <Alert 
                    type="info" 
                    message="💡 All components are defined in app.jsx - Check the file to see how they work!"
                />
            </main>

            {/* Footer */}
            <Footer year={2024} company="React Learning" />
        </div>
    );
}

// ============================================================
// 10. RENDER TO DOM
// ============================================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

console.log('⚛️ React App is running!');
console.log('📦 React Version:', React.version);
console.log('🔄 App rendered successfully');