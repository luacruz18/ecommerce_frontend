import React from 'react';
import Navbar from '../components/Navbar';
import CarouselWithCards from '../components/CarruselCards';
import IndividualIntervalsExample from '../components/Carousel';
import Footer from '../components/Footer';




const Home = () => {
  return (
    <div>
      <Navbar />
      <IndividualIntervalsExample />
      <h3 className='d-flex justify-content-center mt-3'>EXPLORA NUESTROS PRODUCTOS</h3>
      <CarouselWithCards />
      <h3>hola</h3>
      <Footer />
      
    </div>
  );
};

export default Home;
