
import "../styles/ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const isOutOfStock = product.stock <= 0;

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(event) => {
            const image = event.currentTarget;
            image.onerror = null;

            if (!image.src.endsWith("/images/product-placeholder.webp")) {
              image.src = "/images/product-placeholder.webp";
            }
          }}
        />

        <span
          className={`product-card__stock ${
            isOutOfStock ? "product-card__stock--out" : ""
          }`}
        >
          {isOutOfStock ? "Agotado" : "Disponible"}
        </span>
      </div>

      <div className="product-card__content">
        <p className="product-card__category">
          {product.category}
        </p>

        <h3 className="product-card__title">
          {product.name}
        </h3>

        <p className="product-card__price">
          S/ {product.price.toFixed(2)}
        </p>

        <p className="product-card__availability">
          {isOutOfStock
            ? "Sin unidades disponibles"
            : `${product.stock} unidades disponibles`}
        </p>

        <button
          className="product-card__button"
          type="button"
          onClick={() => onAddToCart(product)}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Producto agotado" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
