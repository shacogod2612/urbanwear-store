function ProductCard({ product, onAddToCart }) {
    return (
        <article className="product-card">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p> S/ {product.price.toFixed(2)}</p>
            <p>
                {product.stock > 0
                ? `Stock: ${product.stock}`
                : "Agotado"}
            </p>

            <button
                type="button"
                onClick={() => onAddToCart(product)}
                disabled={product.stock === 0}
            >
                {product.stock > 0 ? "Agregar al carrito" : "Agotado"}
            </button>

        </article>
    );
}

export default ProductCard;