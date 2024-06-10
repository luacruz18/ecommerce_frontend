import React from "react";
import "../pages/Testimonials.css";

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
        <p></p>
      </div>
    </div>
  );
}
