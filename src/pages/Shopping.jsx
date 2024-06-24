import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import Formulario from "../components/Formulario";

const Shopping = () => {
  return (
    <div className="shopping-content">
      <Navbar />
      <div>
        <img
          className="banner-img"
          src={import.meta.env.VITE_IMG_URL + "Bannerenvío.jpg"}
          alt="BannerEnvio"
        />
      </div>
      <Formulario></Formulario>
      <Footer />
    </div>
  );
};

export default Shopping;
