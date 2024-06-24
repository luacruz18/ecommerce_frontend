import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BsPersonFill, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/App.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Navbar.Brand as={Link} to="/" className="navbar-logo">
        <img
          src={import.meta.env.VITE_IMG_URL + "Logo_Web.png"}
          alt="logo"
          className="logo"
          style={{ maxHeight: "50px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="navbar-nav justify-content-end"
      >
        <Nav>
          <Nav.Link as={Link} to="/productos" className="product-nav">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/sobrenosotros" className="about-us-nav">
            Sobre nosotros
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="cart-icon">
            <BsCart />
          </Nav.Link>
          <Nav.Link as={Link} to="/iniciarsesion" className="person-fill">
            <BsPersonFill />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
