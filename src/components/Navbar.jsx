import React from "react";
import "../App.css";

class Navbar extends React.Component {
  render() {
    return (
     
        <div className="navbar">
            <div className="navbar-logo">
          <img src="public\img\Logo_Web.png" alt="Logo" className="logo" />
          <input type="text" placeholder="Buscar" className="search-bar" />
          </div>
          <div className="navbar-nav">
            <p>Productos</p>
            <p>Sobre Nosotros</p>
          </div>
        </div>
    );
  }
}

export default Navbar;
