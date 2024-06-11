import React from "react";
import "../App.css";

function CardProduct({ product }) {
  if (!product) {
    return null; 
  }

  return (
    <div>
      <div className="card border-0" style={{ width: "18rem" }}>
        <img className="card-img-top" src={product.pic} alt={product.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
