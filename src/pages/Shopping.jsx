import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/App.css";
import Forms from "../components/Forms";

const Shopping = () => {
  return (
    <div className="shopping-content">
      <Navbar />
      <div className="">
        <div className="Banner">
          <video className="w-100" loop autoPlay muted>
            <source src="/img/Banner.experiencia.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Forms></Forms>
      <Footer />
    </div>
  );
};

export default Shopping;
