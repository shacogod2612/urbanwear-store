
function Cart({ cart, onRemove, onUpdateQuantity }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>Tu carrito</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((product) => (
            <article key={product.id} className="cart-item">
              <h3>{product.name}</h3>

              <p>Precio: S/ {product.price.toFixed(2)}</p>

                <div className="cart-quantity">
                    <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        arial-label={`Disminuir cantidad de ${product.name}`}
                    >
                        -
                    </button>

                    <span>{product.quantity}</span>

                    <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        arial-label={`Aumentar cantidad de ${product.name}`}
                    >
                        +
                    </button>
                </div>

              <p>
                Subtotal: S/{" "}
                {(product.price * product.quantity).toFixed(2)}
              </p>

                <button
                    type="button"
                    onClick={() => onRemove(product.id)}
                >
                    Eliminar
                </button>
            </article>
          ))}

          <h3>Total: S/ {total.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}

export default Cart;
