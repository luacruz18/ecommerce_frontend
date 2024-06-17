import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";  

const Home = () => {
  return (
    <div className="product-content">
      <Navbar />
      <Product />
      <div className="container mt-5">
        <h3 className="product-description-title text-center">DESCRIPCIÓN</h3>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
          felis magna. Proin ultricies efficitur augue, id blandit lorem
          consectetur id. Fusce ut hendrerit leo, non venenatis quam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ipsa vel natus aut architecto totam? Deleniti rem iusto odit suscipit! Veniam architecto cum maxime laboriosam praesentium, culpa quis alias sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloribus labore, officia culpa sit exercitationem necessitatibus velit, facere soluta, nisi optio iste hic esse possimus itaque unde maxime ipsam facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo unde repellendus libero ullam sint at porro! Impedit amet minima accusamus hic blanditiis, explicabo qui totam, velit unde omnis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia neque, ea veritatis vel reiciendis aliquid molestias porro enim hic quisquam corporis voluptatum impedit perferendis? Possimus mollitia fugiat sequi placeat.
        </p>
        <div><h3 className="text-center product-description-title">TAMBIÉN TE PODRÍA INTERESAR</h3></div>
      </div>
      <ProductCarousel />
  
      <Footer />
    </div>
  );
};

export default Home;
