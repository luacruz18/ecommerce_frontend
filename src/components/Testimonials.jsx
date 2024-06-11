import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../pages/Testimonials.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Testimonials() {
  return (
    <div className="testimonials-container">
  
      <div className="testimonials-text">
        <h1>Testimonios</h1>
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
  );
}