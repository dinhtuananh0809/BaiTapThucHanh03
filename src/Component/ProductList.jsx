import React, { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "product 1", price: 10 },
    { id: 2, name: "product 2", price: 20 },
    { id: 3, name: "product 3", price: 30 },
  ]);
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
