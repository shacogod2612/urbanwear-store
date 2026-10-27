
function Cart({ cart, onRemove, onUpdateQuantity }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <section className="cart" id="carrito" aria-labelledby="cart-title">
      <h2 id="cart-title">Tu carrito</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => {
              const subtotal = product.price * product.quantity;

              return (
                <article key={product.id} className="cart-item">
                  <h3>{product.name}</h3>

                  <p>
                    Precio por unidad: S/ {product.price.toFixed(2)}
                  </p>

                  <div className="cart-quantity">
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(product.id, -1)
                      }
                      aria-label={`Disminuir cantidad de ${product.name}`}
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>

                    <span aria-live="polite">
                      {product.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(product.id, 1)
                      }
                      aria-label={`Aumentar cantidad de ${product.name}`}
                      disabled={product.quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Subtotal: S/ {subtotal.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => onRemove(product.id)}
                    aria-label={`Eliminar ${product.name} del carrito`}
                  >
                    Eliminar
                  </button>
                </article>
              );
            })}
          </div>

          <p className="cart-total">
            Total: S/ {total.toFixed(2)}
          </p>
        </>
      )}
    </section>
  );
}

export default Cart;
