import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const CarouselWithControls = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const options = {
    type: "loop",
    perPage: 4,
    focus: "center",
    pagination: false,
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    interval: 3000 // Cambiar el intervalo según sea necesario
  };

  return (
    <div className="">
      <Splide
        options={options}
      >
        {products.map((product, index) => (
          <SplideSlide key={index}>
            <div>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CarouselWithControls;
