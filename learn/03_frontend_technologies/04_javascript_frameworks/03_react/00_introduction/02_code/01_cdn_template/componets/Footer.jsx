/**
 * Footer Component
 * Displays the footer of the application
 */

function Footer({ year = new Date().getFullYear(), company = "Your Company" }) {
    return (
        <footer style={{
            background: '#161b22',
            padding: '20px',
            marginTop: '30px',
            borderTop: '2px solid #30363d'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center',
                color: '#8b949e'
            }}>
                <p>© {year} {company}. All rights reserved.</p>
                <p style={{ fontSize: '14px', marginTop: '5px' }}>
                    Built with React ⚛️
                </p>
            </div>
        </footer>
    );
}

export default Footer;