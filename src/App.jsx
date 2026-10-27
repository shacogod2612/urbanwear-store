
import { useState } from "react";

import { products } from "./data/products";
import { filterProducts } from "./utils/filterProducts";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);

  // Total de unidades del carrito.
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Añadir un producto respetando el stock.
  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        if (existingProduct.quantity >= product.stock) {
          return currentCart;
        }

        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      if (product.stock <= 0) {
        return currentCart;
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  // Eliminar un producto del carrito.
  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  // Actualizar la cantidad de un producto.
  function updateQuantity(productId, change) {
    if (change !== 1 && change !== -1) {
      return;
    }

    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id !== productId) {
            return item;
          }

          const newQuantity = item.quantity + change;

          if (newQuantity > item.stock) {
            return item;
          }

          return {
            ...item,
            quantity: newQuantity,
          };
        })
        .filter((item) => item.quantity > 0)
    );
  }

  // Productos visibles según la búsqueda y categoría.
  const visibleProducts = filterProducts(
    products,
    searchTerm,
    category
  );

  return (
    <>
      <Header cartCount={cartCount} />

      <main className="store"  id="inicio">
        <Cart
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        <section className="catalog" id="catalogo">
          <div className="catalog-controls">
            <input
              type="search"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              aria-label="Buscar productos"
            />

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              aria-label="Filtrar por categoría"
            >
              <option value="all">Todas las categorías</option>
              <option value="Camisetas">Camisetas</option>
              <option value="Poleras">Poleras</option>
              <option value="Pantalones">Pantalones</option>
            </select>
          </div>

          <p>
            Productos encontrados: {visibleProducts.length}
          </p>

          <ProductList
            products={visibleProducts}
            onAddToCart={addToCart}
          />
        </section>
      </main>
    </>
  );
}

export default App;
