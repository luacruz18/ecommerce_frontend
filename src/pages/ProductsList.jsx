import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardProductList from "../components//CardProducList.jsx";
import { fetchProducts } from "../Hooks/api.jsx";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container fluid className="product-list">
        <Row>
          <nav className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Sidebar Item 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sidebar Item 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sidebar Item 3
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sidebar Item 4
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Col md={10} className="ml-sm-auto px-4">
            <h1 className="h2">Product List</h1>
            <Row>
              {products.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={6} lg={3} className="mb-4">
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
