/**
 * Card Component
 * Container component with children prop
 */

function Card({ 
    children, 
    title = null,
    subtitle = null,
    icon = null,
    className = '',
    style = {}
}) {
    return (
        <div style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            ...style
        }}>
            {/* Card Header */}
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
            
            {/* Card Content */}
            {children}
        </div>
    );
}

export default Card;