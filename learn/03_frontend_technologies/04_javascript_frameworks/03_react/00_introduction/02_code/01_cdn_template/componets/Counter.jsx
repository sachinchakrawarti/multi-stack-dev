/**
 * Counter Component
 * Interactive counter with increment/decrement
 */

const { useState } = React;

function Counter({ initialValue = 0, step = 1, min = null, max = null }) {
    const [count, setCount] = useState(initialValue);

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
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '48px', marginBottom: '20px', color: '#58a6ff' }}>
                {count}
            </h2>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button
                    onClick={decrement}
                    style={{
                        padding: '10px 20px',
                        background: '#21262d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '18px'
                    }}
                >
                    −
                </button>
                
                <button
                    onClick={reset}
                    style={{
                        padding: '10px 20px',
                        background: '#238636',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Reset
                </button>
                
                <button
                    onClick={increment}
                    style={{
                        padding: '10px 20px',
                        background: '#21262d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '18px'
                    }}
                >
                    +
                </button>
            </div>
            
            <div style={{ marginTop: '10px', color: '#8b949e', fontSize: '14px' }}>
                <p>Step: {step}</p>
                {min !== null && <p>Min: {min}</p>}
                {max !== null && <p>Max: {max}</p>}
            </div>
        </div>
    );
}

export default Counter;