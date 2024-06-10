import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BsPersonFill } from "react-icons/bs";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="navbar-logo">
        <img src={import.meta.env.VITE_IMG_URL + "Logo_Web.png"}  alt="Logo" className="logo" />
      </div>
      <div className="navbar-nav">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            <BsPersonFill className="person-fill"/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;