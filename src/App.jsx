import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Products from "./pages/ProductsDetails";
import About from "./pages/About";
import Shopping from "./pages/Shopping";
import ProductList from "./pages/ProductsList";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Adminlogin from "./pages/AdminLogin";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/sobrenosotros" element={<About />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/listaproductos" element={<ProductList />} />
          <Route path="/iniciarsesion" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productos/:id" element={<Products />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/administrador" element={<Adminlogin />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
