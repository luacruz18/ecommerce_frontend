import React, { useEffect, useState } from "react";
import "../styles/Collage.css";
import { fetchProducts } from "../Hooks/api";

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

  return (
    <div>
      <div className="collage-2 pt-5">
        <div className="row m-0">
          <div className="col-6">
            <div className="parent text-light">
              <div
                className="div1"
                style={{ backgroundImage: `url(${getProductImageUrl(0)})` }}
              >
                {products[0] && <h3>{products[0].name}</h3>}
              </div>
              <div
                className="div2"
                style={{ backgroundImage: `url(${getProductImageUrl(1)})` }}
              >
                <h3>{products[1] && products[1].name}</h3>
              </div>
              <div
                className="div3"
                style={{ backgroundImage: `url(${getProductImageUrl(2)})` }}
              >
                <h3>{products[2] && products[2].name}</h3>
              </div>
              <div
                className="div4"
                style={{ backgroundImage: `url(${getProductImageUrl(3)})` }}
              >
                <h3>{products[3] && products[3].name}</h3>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="parent-2 text-light">
              <div
                className="div5"
                style={{ backgroundImage: `url(${getProductImageUrl(6)})` }}
              >
                <h3>{products[6] && products[6].name}</h3>
              </div>
              <div
                className="div6"
                style={{ backgroundImage: `url(${getProductImageUrl(7)})` }}
              >
                <h3>{products[7] && products[7].name}</h3>
              </div>
              <div
                className="div7"
                style={{ backgroundImage: `url(${getProductImageUrl(6)})` }}
              >
                <h3>{products[6] && products[6].name}</h3>
              </div>
              <div
                className="div8"
                style={{ backgroundImage: `url(${getProductImageUrl(7)})` }}
              >
                <h3>{products[7] && products[7].name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageDos;
