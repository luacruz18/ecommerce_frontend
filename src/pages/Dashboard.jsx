// pages/Dashboard.js

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UsersComponent from "../components/UsersComponent";
import ProductsComponent from "../components/ProductsComponent";
import CategoryComponent from "../components/CategoryComponent";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Productos");

  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
};

export default Dashboard;
