/**
 * Header Component
 * Displays the main navigation/header of the application
 */

function Header({ title = "React App", user = null }) {
    return (
        <header style={{
            background: '#161b22',
            padding: '20px',
            borderBottom: '2px solid #30363d'
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

export default Header;