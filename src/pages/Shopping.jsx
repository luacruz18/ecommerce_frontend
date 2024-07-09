import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/App.css";
import Formulario from "../components/Formulario";

const Shopping = () => {
  return (
    <div className="shopping-content">
      <Navbar />
      <div className="">
        <div className="Banner">
          <video loop autoPlay muted>
            <source src="/img/Banner.experiencia.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Formulario></Formulario>
      <Footer />
    </div>
  );
};

export default Shopping;
