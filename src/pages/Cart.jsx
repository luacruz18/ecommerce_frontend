import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let subtotal = 0;
  let tax = 0;
  let total = 0;

  if (cartItems.length > 0) {
    subtotal = cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0; //  item.price es undefined asigna 0
      const itemQuantity = item.quantity || 1; // item.quantity undefine asigna 1

      return total + itemPrice * itemQuantity;
    }, 0);

    tax = 1.22 * subtotal;
    total = subtotal + tax;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Carrito de Compras</h1>
        <div className="row">
          <div className="col-md-6">
            {cartItems.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={import.meta.env.VITE_IMG_URL + item.pic}
                          className="img-fluid rounded-start"
                          alt={item.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">Precio: ${item.price}</p>
                          {item.quantity > 1 && (
                            <p className="card-text">
                              Cantidad: {item.quantity}
                            </p>
                          )}
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            Quitar del carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button className=" button btn btn" onClick={handleClearCart}>
                  Vaciar carrito
                </button>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen del Pedido</h5>
                <p className="card-text">Subtotal: ${subtotal.toFixed(2)}</p>
                <p className="card-text">Impuestos: ${tax.toFixed(2)}</p>
                <h3 className="card-text">Total: ${total.toFixed(2)}</h3>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    navigate("/shopping");
                  }}
                >
                  SIGUIENTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
