import React from "react";
import Navbar from "../components/Navbar";
import IndividualIntervalsExample from "../components/Carousel";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import Testimonials from "../components/Testimonials";
import CollageDos from "../components/CollageDos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccordionHome from "../components/AccordionHome"
const Home = () => {
  return (
    <div>
      <Navbar />
      <IndividualIntervalsExample />
      <h3 className="text-center mt-3">EXPLORA NUESTROS PRODUCTOS</h3>
      <ProductCarousel />
      <CollageDos />
      {/* <Testimonials /> */}
      <AccordionHome />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progressStyle={{ transition: "none" }}
      />
    </div>
  );
};

export default Home;
