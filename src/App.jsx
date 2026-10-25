import { useState } from "react";
import {products} from './data/products';
import { filterProducts } from './utils/filterProducts';
import ProductList  from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/global.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);  

  function addToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );
    
    if (existingProduct) {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? {...item, quantity: item.quantity +1}
        : item
      );

      setCart(updateCart);
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  }

  function removeFromCart(productId) {
    const updateCart = cart.filter(
      (item) => item.id !== productId
    );
    setCart(updateCart);
  }

  const visibleProducts = filterProducts (
    products,
    searchTerm,
    category,
  );

  function updateQuantity(productId, change) {
    const updateCart = cart.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        if (newQuantity > item.stock) {
          return item;
        }
          return {...item, quantity: newQuantity,};
      }
    })

    .filter((item) => item.quantity > 0);
    setCart(updateCart);
  }

  return (
      <main className="store">
      <header className="store-header">
        <h1>UrbanWear Store</h1>
        <p>Encuentra tu estilo urbano.</p>
      </header>

      <Cart
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      
      <p>Productos en el carrito: {cart.length}</p>
      <section className="catalog">
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

        <p>Productos encontrados: {visibleProducts.length}</p>

        <ProductList 
          products={visibleProducts}
          onAddToCart={addToCart}  
        />

      </section>
    </main>
  );
}

export default App
