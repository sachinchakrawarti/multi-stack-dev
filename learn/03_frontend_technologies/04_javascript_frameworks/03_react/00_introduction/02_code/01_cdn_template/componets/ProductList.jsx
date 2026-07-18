/**
 * ProductList Component
 * Renders a list of products
 */

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

export default ProductList;