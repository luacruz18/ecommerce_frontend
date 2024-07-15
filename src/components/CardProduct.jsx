import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function CardProduct({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div>
      <Link to={`/productos/${product.id}`} style={{ textDecoration: "none", color: "white" }}>
        <div className=" border-0" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={import.meta.env.VITE_IMG_URL + product.pic}
            alt={product.name}
            style={{ width: "18rem", height: "18rem" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title" style={{ color: "white" }}>{product.name}</h5>
            <p className="card-text" style={{ color: "white" }}>${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardProduct;
