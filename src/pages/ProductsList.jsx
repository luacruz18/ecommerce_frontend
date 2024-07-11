import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fetchProducts } from "../Hooks/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import CardProductList from "../components/CardProducList";
import "../styles/ProductList.css";

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
      <Container className="product-list">
        <Breadcrumb />
        <Row>
          <Col md={2} className="d-none d-md-block sidebar">
            <div className="sidebar-sticky">
              <h4>CATEGORÍAS</h4>
              <hr />
              <ul className="nav flex-column">
                <li className="nav-item product-li">
                  <a className="nav-link active" href="#">
                    Hardware
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Periféricos
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Monitores
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Equipos Armados
                  </a>
                </li>
                <li className="nav-item product-li">
                  <a className="nav-link" href="#">
                    Laptops
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={10}>
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductList;
