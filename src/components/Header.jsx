
import "../styles/Header.css";

function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__logo"
          href="#inicio"
          aria-label="UrbanWear, inicio"
        >
          URBAN<span>WEAR</span>
          <small>STREETWEAR CULTURE</small>
        </a>

        <nav
          className="site-header__nav"
          aria-label="Navegación principal"
        >
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Nosotros</a>
        </nav>

        <a
          className="site-header__cart"
          href="#carrito"
          aria-label={`Carrito de compras, ${cartCount} unidades`}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1" fill="currentColor" />
            <circle cx="18" cy="20" r="1" fill="currentColor" />
          </svg>

          <span className="site-header__cart-text">Carrito</span>
          <span className="site-header__count">{cartCount}</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
