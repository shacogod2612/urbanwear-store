
export function filterProducts(products, searchTerm, category) {
  const normalizedSearch = String(searchTerm ?? "")
    .trim()
    .toLowerCase();

  return products.filter((product) => {
    const name = String(product.name ?? "").toLowerCase();
    const productCategory = String(
      product.category ?? ""
    ).toLowerCase();

    const matchesSearch =
      name.includes(normalizedSearch) ||
      productCategory.includes(normalizedSearch);

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });
}
