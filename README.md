# UrbanWear Store 👕🛍️

Tienda virtual de ropa urbana desarrollada con **React, Vite y CSS**, como proyecto práctico para fortalecer mis habilidades de desarrollo frontend.

UrbanWear Store permite explorar un catálogo de prendas, buscar productos, filtrar por categorías y gestionar un carrito de compras con cálculo automático de subtotales y total.

## ✨ Características

- **Catálogo de productos:** visualización de prendas con nombre, categoría, precio y stock.
- **Búsqueda dinámica:** búsqueda de productos por nombre o categoría.
- **Filtro por categorías:** selección de camisetas, poleras y pantalones.
- **Carrito de compras:** agregar productos, modificar cantidades y eliminar artículos.
- **Control de stock:** validación de cantidades disponibles y productos agotados.
- **Cálculo automático:** actualización de subtotales y total de la compra.
- **Diseño responsive:** adaptación de la interfaz a distintos tamaños de pantalla.
- **Componentes reutilizables:** estructura organizada para facilitar el mantenimiento del código.

## 🛠️ Tecnologías utilizadas

- React
- JavaScript
- Vite
- HTML5
- CSS3
- Git y GitHub

## 📂 Estructura del proyecto

```text
urbanwear-store/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   ├── data/
│   │   └── products.js
│   ├── hooks/
│   ├── utils/
│   │   └── filterProducts.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🚀 Instalación y ejecución

### Requisitos

- Node.js
- npm
- Git (opcional, para clonar el repositorio)

### Pasos

1. Clona el repositorio:

   ```bash
   git clone URL_DE_TU_REPOSITORIO
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd urbanwear-store
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre en el navegador la dirección local que muestra Vite en la terminal.

## 🧠 Aprendizajes

Durante el desarrollo de este proyecto practiqué:

- Gestión del estado con `useState`.
- Comunicación entre componentes mediante props.
- Renderizado de listas con `map()` y uso de claves con `key`.
- Filtrado de datos con `filter()`.
- Búsqueda de elementos con `find()`.
- Cálculo de totales mediante `reduce()`.
- Actualización inmutable de arrays y objetos mediante el operador spread.
- Manejo de eventos en React.
- Diseño responsive con CSS Grid, Flexbox y media queries.
- Organización del código en componentes, datos y funciones auxiliares.

## 📌 Estado del proyecto

Proyecto frontend funcional con catálogo, filtros y carrito de compras. Está orientado al aprendizaje y a la demostración de habilidades de desarrollo frontend.

**Nota:** esta versión es una demostración de tienda virtual. No representa un sistema de comercio electrónico con pagos reales ni procesamiento de pedidos mediante un backend.

## 👨‍💻 Autor

Desarrollado por **Jackson Vega**.

Estudiante de Desarrollo de Sistemas de Información y desarrollador frontend junior en formación, enfocado en seguir mejorando mis habilidades con JavaScript, React y desarrollo web.

