import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function CardProductList({ product }) {

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="border-0" style={{ width: "100%" }}>
      <Link to={`/productos/${product.id}`} style={{ textDecoration: "none" }}>
        <div style={{ overflow: "hidden", height: "18rem" }}>
          <img
            className="card-img-top"
            src={import.meta.env.VITE_IMG_URL + product.pic}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="card-body text-center">
          <h5
            className="card-title"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {truncateText(product.name, 20)}
          </h5>
          <p className="card-text">${product.price}</p>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e93d3a",
              color: "white",
              width: "75%",
            }}
          >
            Ver Detalles
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default CardProductList;
