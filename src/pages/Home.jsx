import React from "react";
import Navbar from "../components/Navbar";
import IndividualIntervalsExample from "../components/Carousel";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <IndividualIntervalsExample />
      <h3 className="text-center mt-3">EXPLORA NUESTROS PRODUCTOS</h3>
      <ProductCarousel />
      <Testimonials />
      <Footer />
   
    </div>
  );
};

export default Home;
