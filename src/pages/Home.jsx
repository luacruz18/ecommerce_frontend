import React from "react";
import Navbar from "../components/Navbar";
import CarouselWithCards from "../components/CarruselCards";
import IndividualIntervalsExample from "../components/Carousel";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <IndividualIntervalsExample />
      <CarouselWithCards />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
