import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsPersonFill, BsCart } from "react-icons/bs";
import "../App.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home" className="navbar-logo">
        <img src={"../img/Logo_Web.png"} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Menú" id="dropdown-basic" className="dropdown">
            <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Otra cosa</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Otra cosa</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Sobre nosotros
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <BsCart className="cart-icon" />
          <BsPersonFill className="person-fill" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
