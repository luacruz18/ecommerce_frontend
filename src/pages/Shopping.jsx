import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

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

      <Footer />
    </div>
  );
};

export default Shopping;
