import React from "react";

const FilterProduct = () => {
  const products = [
    { id: 1, name: "apple ipad", category: "tablet", price: 150000 },
    { id: 2, name: "Samsung S24", category: "Smartphone", price: 120000 },
    { id: 3, name: "Oneplus 12", category: "Smartphone", price: 80000 },
    { id: 4, name: "sony", category: "camera", price: 30000 },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === "Smartphone" && product.price > 100000,
  );
  console.log(filteredProducts);
  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterProduct;
