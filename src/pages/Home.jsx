import React from 'react';
import Navbar from '../components/Navbar';
import CarouselWithCards from '../components/CarruselCards';


const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselWithCards />
      <IndividualIntervalsExample />
    </div>
  );
};

export default Home;
