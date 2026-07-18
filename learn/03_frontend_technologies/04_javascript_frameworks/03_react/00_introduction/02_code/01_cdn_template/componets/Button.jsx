/**
 * Button Component
 * Reusable button with different variants
 */

function Button({ 
    label, 
    onClick, 
    variant = 'primary', 
    size = 'medium',
    disabled = false,
    fullWidth = false
}) {
    // Button variants
    const variants = {
        primary: { background: '#238636', color: 'white', hover: '#2ea043' },
        secondary: { background: '#21262d', color: 'white', hover: '#30363d' },
        danger: { background: '#da3633', color: 'white', hover: '#f85149' },
        success: { background: '#238636', color: 'white', hover: '#2ea043' },
        warning: { background: '#d29922', color: 'white', hover: '#e3b341' },
        outline: { background: 'transparent', color: '#58a6ff', border: '1px solid #58a6ff', hover: '#1f6feb' }
    };

    // Button sizes
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
        width: fullWidth ? '100%' : 'auto',
        ...(variant === 'outline' ? { background: 'transparent' } : {})
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

export default Button;