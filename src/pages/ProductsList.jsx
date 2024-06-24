// ProductList.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardProductList from "../components/CardProducList"; 
import { fetchProducts } from "../Hooks/api"; 
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <img
        className="w-100 d-none d-md-block"
        src="/img/Bannerenvío.jpg"
        alt=""
      />
      <div className="product-list container">
        <Breadcrumb />
        <Row className="m-0">
          <nav className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
              <h4>CATEGORÍAS</h4>
              <hr />
              <ul className="nav flex-column">
                <li className="nav-item product-li">
                  <a className="nav-link active" href="#">
                    Hardware{" "}
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Periféricos{" "}
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Monitores{" "}
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Equipos Armados{" "}
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Laptops{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Col md={10} className="ml-sm-auto px-4">
            <div className="container">
              <Row>
                {products.map((product) => (
                  <Col
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={3}
                    className="mb-4"
                  >
                    <CardProductList product={product} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
