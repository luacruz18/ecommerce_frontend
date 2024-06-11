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

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className="testimonials-text">
        <h1>EXPLORA NUESTROS PRODUCTOS</h1>
        <div>
          <Splide
            options={{
              type: "loop",
              perPage: 6,
              autoplay: true,
            }}
          >
            {products.map((product) => (
              <SplideSlide key={product.id}>
                <div>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithControls;
