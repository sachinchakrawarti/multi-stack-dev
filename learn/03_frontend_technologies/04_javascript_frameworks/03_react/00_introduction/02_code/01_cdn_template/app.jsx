/**
 * Main App Component
 * Demonstrates all components working together
 */

// Import all components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import UserCard from './components/UserCard.jsx';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import Alert from './components/Alert.jsx';
import ProductList from './components/ProductList.jsx';
import Counter from './components/Counter.jsx';

function App() {
    // Sample data
    const users = [
        { name: "Sachin Kumar", email: "sachin@example.com", age: 25, city: "Mumbai", role: "Developer", skills: ["React", "JavaScript", "CSS"] },
        { name: "Priya Singh", email: "priya@example.com", age: 28, city: "Delhi", role: "Designer", skills: ["UI/UX", "Figma", "Photoshop"] },
        { name: "Rahul Sharma", email: "rahul@example.com", age: 30, city: "Bangalore", role: "Manager", skills: ["Leadership", "Project Management"] }
    ];

    const products = [
        { name: "Laptop", price: 45000, category: "Electronics", inStock: true },
        { name: "Book", price: 500, category: "Education", inStock: false },
        { name: "Headphones", price: 2500, category: "Accessories", inStock: true },
        { name: "Mouse", price: 800, category: "Accessories", inStock: true }
    ];

    const [showAlert, setShowAlert] = React.useState(true);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Header title="React Component Library" user="Sachin" />

            {/* Main Content */}
            <main style={{ 
                flex: 1,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px',
                width: '100%'
            }}>
                <h1 style={{ marginBottom: '20px' }}>Welcome to React Components</h1>

                {/* Alert */}
                {showAlert && (
                    <Alert 
                        type="success" 
                        message="🎉 All components are working perfectly!"
                        dismissible
                        onDismiss={() => setShowAlert(false)}
                    />
                )}

                {/* Buttons */}
                <Card title="Buttons" subtitle="Different variants and sizes">
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <Button label="Primary" variant="primary" />
                        <Button label="Secondary" variant="secondary" />
                        <Button label="Success" variant="success" />
                        <Button label="Danger" variant="danger" />
                        <Button label="Warning" variant="warning" />
                        <Button label="Outline" variant="outline" />
                        <Button label="Large" size="large" variant="primary" />
                        <Button label="Disabled" disabled variant="primary" />
                        <Button label="Full Width" fullWidth variant="primary" />
                    </div>
                </Card>

                {/* User Cards */}
                <Card title="User Profiles" subtitle="Displaying user information">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {users.map((user, index) => (
                            <UserCard key={index} {...user} />
                        ))}
                    </div>
                </Card>

                {/* Counter */}
                <Card title="Counter" subtitle="Interactive counter component">
                    <Counter initialValue={0} step={1} min={0} max={10} />
                </Card>

                {/* Product List */}
                <Card title="Product List" subtitle="Displaying product catalog">
                    <ProductList products={products} title="Available Products" />
                </Card>

                {/* Info Alert */}
                <Alert 
                    type="info" 
                    message="💡 Tip: Check the components folder to see how each component is built!"
                />
            </main>

            {/* Footer */}
            <Footer year={2024} company="React Learning" />
        </div>
    );
}

// Render the App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);