import React from "react";
import "../pages/Testimonials.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Testimonials() {
  return (
    <div style={{ width: "100%", height: "80vh", position: "relative" }}>
      <img
        src="public\img\fondotestimonios.jpg"
        alt="testimonios"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className="testimonials-text">
        <h1>Testimonios</h1>
        <div>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              autoplay: true,
            }}
          >
            <SplideSlide>
              <h3>Hola</h3>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}
