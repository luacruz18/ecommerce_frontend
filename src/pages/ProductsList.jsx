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

  const categories = [
    { name: 'Hardware', active: true },
    { name: 'Periféricos', active: false },
    { name: 'Monitores', active: false },
    { name: 'Equipos Armados', active: false },
    { name: 'Laptops', active: false },
  ];

  return (
    <div>
      <Navbar />
      <img
        className="w-100 d-none d-md-block"
        src="/img/Bannerenvío.jpg"
        alt=""
      />
      <Container className="product-list">
        <Breadcrumb className="breadcrumb" />
        <Row>
          <Col md={2} className="d-none d-md-block sidebar-unique">
            <div className="sidebar-sticky-unique">
              <h4>CATEGORÍAS</h4>
              <hr />
              <ul className="nav-unique flex-column">
                {categories.map((category) => (
                  <li className="nav-item product-li-unique" key={category.name}>
                    <a className={`nav-link ${category.active ? 'active' : ''}`} href="#">
                      {category.name}
                    </a>
                  </li>
                ))}
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
                  <CardProductList product={product} className="card-product-unique"/>
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
