import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonFill, BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/userReducer';
import '../styles/App.css';

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(removeUser()); 
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-logo">
        <img
          src={import.meta.env.VITE_IMG_URL + 'Logo_Web.png'}
          alt="logo"
          className="logo"
          style={{ maxHeight: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="navbar-nav justify-content-end"
      >
        <Nav>
          <Nav.Link as={Link} to="/listaproductos" className="product-nav">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/sobrenosotros" className="about-us-nav">
            Sobre nuestro proyecto
          </Nav.Link>
          <Nav.Link as={Link} to="/carrito" className="cart-icon">
            <BsCart />
          </Nav.Link>
          <Dropdown align="end">
            <Dropdown.Toggle
              as="a"
              className="person-fill"
              id="dropdown-basic"
            >
              <BsPersonFill />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              {token ? (
                <Dropdown.Item onClick={handleLogout} className="dropdown-item">
                  <Link to="/login" className="nav-link">
                    Cerrar sesión
                  </Link>
                </Dropdown.Item>
              ) : (
                <>
                  <Dropdown.Item as={Link} to="/login" className="dropdown-item">
                    Iniciar sesión como usuario
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/administrador" className="dropdown-item">
                    Iniciar sesión como administrador
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
