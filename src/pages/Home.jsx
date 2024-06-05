import React from 'react';
import Navbar from '../components/Navbar';
import CarouselWithCards from '../components/CarruselCards';
import IndividualIntervalsExample from '../components/Carousel';


const Home = () => {
  return (
    <div>
      <Navbar />
      <IndividualIntervalsExample />
      <CarouselWithCards />
      
    </div>
  );
};

export default Home;
