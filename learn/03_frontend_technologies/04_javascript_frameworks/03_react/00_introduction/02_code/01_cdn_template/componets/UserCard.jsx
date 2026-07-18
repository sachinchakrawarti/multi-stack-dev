/**
 * UserCard Component
 * Displays user information in a card format
 */

function UserCard({ 
    name, 
    email, 
    age, 
    city, 
    avatar = null,
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
            width: '300px',
            display: 'inline-block'
        }}>
            {/* Avatar */}
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
                {avatar || name.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
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

export default UserCard;