import "../App.css";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [selectedPrice, setSelectedPrice] = useState(10);
  const [selectedQty, setSelectedQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selectedPrice * selectedQty);
  const [installmentPlan, setInstallmentPlan] = useState("1");
  const [showInstallmentMenu, setShowInstallmentMenu] = useState(false);

  const handleQtyChange = (e) => {
    setSelectedQty(parseInt(e.target.value, 10));
  };

  const handleInstallmentChange = (e) => {
    setInstallmentPlan(e);
    setShowInstallmentMenu(false); // Cierra el menú después de seleccionar una opción
  };

  useEffect(() => {
    setTotalPrice(selectedPrice * selectedQty);
  }, [selectedPrice, selectedQty]);

  const toggleInstallmentMenu = () => {
    setShowInstallmentMenu(!showInstallmentMenu);
  };

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="image1.jpg" alt="Product Image" />
      </div>
      <div className="product-details">
        <h1>Product Name</h1>
        <p>Price: ${selectedPrice}</p>
        <label htmlFor="qty-select">Quantity:</label>
        <select id="qty-select" value={selectedQty} onChange={handleQtyChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>Total Price: ${totalPrice}</p>
        <div className="custom-dropdown">
          <span onClick={toggleInstallmentMenu} className="text-link">
            Planes de Cuotas
          </span>
          {showInstallmentMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => handleInstallmentChange("1")}>
                1 cuota sin interés
              </div>
              <div className="dropdown-item" onClick={() => handleInstallmentChange("3")}>
                3 cuotas sin interés
              </div>
              <div className="dropdown-item" onClick={() => handleInstallmentChange("6")}>
                6 cuotas sin interés
              </div>
              <div className="dropdown-item" onClick={() => handleInstallmentChange("12")}>
                12 cuotas sin interés
              </div>
            </div>
          )}
        </div>
        <div className="add-to-cart">
          <button className="btn mt-3">AÑADIR AL CARRITO</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
