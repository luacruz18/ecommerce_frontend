import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { CartPlus, Trash } from "react-bootstrap-icons"; 

function CardProductList({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isInCart, setIsInCart] = useState(false);

  // chequea si el producto está en el carrito
  useState(() => {
    const found = cartItems.some(item => item.id === product.id);
    setIsInCart(found);
  }, [cartItems, product.id]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addItem(product));
    }
    setIsInCart(!isInCart);
  };

  return (
    <div className="border-0" style={{ width: "100%" }}>
      <div>
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
                color: "white",
                textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
              }}
            >
              {truncateText(product.name, 20)}
            </h5>
            <p className="card-text" style={{ color: "white", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              ${product.price}
            </p>
          </div>
        </Link>
      </div>
      <div className="mt-3" style={{ textAlign: "center" }}>
        <Button
          variant="danger"
          style={{
            width: "50px",
            height: "50px",
          }}
          onClick={handleToggleCart}
        >
          {isInCart ? <Trash size={24} color="white" /> : <CartPlus size={24} color="white" />}
        </Button>
      </div>
    </div>
  );
}

export default CardProductList;
