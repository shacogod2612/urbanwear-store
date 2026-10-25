
export function filterProducts(products, searchTerm, category) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
     product.name.toLowerCase().includes(normalizedSearch) ||
     product.category.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return filteredProducts;
}
