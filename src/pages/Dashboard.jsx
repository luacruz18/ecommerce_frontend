import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UsersComponent from "../components/UsersComponent";
import ProductsComponent from "../components/ProductsComponent";
import CategoryComponent from "../components/CategoryComponent";

import "../styles/Dashboard.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Productos");

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="sidebar">
          <ul>
            <li
              className={activeSection === "Usuarios" ? "active" : ""}
              onClick={() => setActiveSection("Usuarios")}
            >
              Usuarios
            </li>
            <li
              className={activeSection === "Categorías" ? "active" : ""}
              onClick={() => setActiveSection("Categorías")}
            >
              Categorías
            </li>
            <li
              className={activeSection === "Productos" ? "active" : ""}
              onClick={() => setActiveSection("Productos")}
            >
              Productos
            </li>
          </ul>
        </div>
        <div className="content">
          {activeSection === "Usuarios" && <UsersComponent />}
          {activeSection === "Categorías" && <CategoryComponent />}
          {activeSection === "Productos" && <ProductsComponent />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
