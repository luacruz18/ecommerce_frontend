import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../Hooks/api";
import "../styles/Collage.css";

const CollageDos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  const getProductImageUrl = (index) => {
    if (products[index] && products[index].gallery) {
      return import.meta.env.VITE_IMG_URL + products[index].gallery;
    }
    return "";
  };

  const h3Style = {
    textShadow: "0 0 10px black",
  };

  const buyButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "#e93d3a",
    textShadow: "0 0 10px black",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "0px",
  };

  const iconStyle = {
    marginLeft: "5px",
  };

  return (
    <div>
      <div className="collage-2 pt-5">
        <div className="row m-0">
          <div className="col-6">
            <div className="parent text-light">
              <div className="div1 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(0)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[0] && products[0].name}</h3>
                  <Link to={`/productos/${products[0]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
              <div className="div2 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(1)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[1] && products[1].name}</h3>
                  <Link to={`/productos/${products[1]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
              <div className="div3 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(15)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[15] && products[15].name}</h3>
                  <Link to={`/productos/${products[15]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
              <div className="div4 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(13)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[13] && products[13].name}</h3>
                  <Link to={`/productos/${products[13]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="parent-2 text-light">
              <div className="div5 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(6)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[6] && products[6].name}</h3>
                  <Link to={`/productos/${products[6]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
              <div className="div6 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(10)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[10] && products[10].name}</h3>
                  <Link to={`/productos/${products[10]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
              <div className="div7 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(21)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[21] && products[21].name}</h3>
                  <Link to={`/productos/${products[21]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
              <div className="div8 d-flex align-items-end" style={{ backgroundImage: `url(${getProductImageUrl(30)})` }}>
                <div className="product-info p-2">
                  <h3 style={h3Style}>{products[30] && products[30].name}</h3>
                  <Link to={`/productos/${products[30]?.id}`} className="btn" style={buyButtonStyle}>
                    COMPRAR AHORA <i className="bi bi-chevron-right" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageDos;
