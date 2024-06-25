
import React from "react";

const TopProducts = () => {
  const products = [
    { id: 1, name: "Gaming Laptop", sales: 120 },
    { id: 2, name: "Gaming Headset", sales: 85 },
    { id: 3, name: "Mechanical Keyboard", sales: 60 },
  ];

  return (
    <div className="top-products">
      <h2>Top Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.sales} sales
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
