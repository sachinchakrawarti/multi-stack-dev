/**
 * Alert Component
 * Display different types of alerts
 */

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
            margin: '10px',
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

export default Alert;