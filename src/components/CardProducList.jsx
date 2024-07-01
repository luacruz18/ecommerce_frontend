import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice"; 

function CardProductList({ product }) {
  const dispatch = useDispatch();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  const handleAddToCart = () => {
    dispatch(addItem(product)); 
  };

  return (
    <div className="border-0" style={{ width: "100%" }}>
      <div>
      <Link
        to={`/productos/${product.id}`}
        style={{ textDecoration: "none" }}
      >
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
          </div>
          </Link>
          </div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e93d3a",
              color: "white",
              width: "100%",
            }}
            onClick={handleAddToCart} 
          >
            Agregar al carrito
          </Button>
        </div>
      
 
  );
}

export default CardProductList;
