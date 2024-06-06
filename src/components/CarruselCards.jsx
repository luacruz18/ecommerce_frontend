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
    <div className="">
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            focus: "0",
            pagination: false
            
          }}
        >
          {products.map((product, index) => (
            <SplideSlide style="width: 150px" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default CarouselWithControls;
