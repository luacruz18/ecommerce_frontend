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
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
<<<<<<< Updated upstream
import Adminlogin from "./pages/AdminLogin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/productos",
      element: <Products />,
    },
    {
      path: "/sobrenosotros",
      element: <About />,
    },
    {
      path: "/shopping",
      element: <Shopping />,
    },
    { path: "/listaproductos", element: <ProductList /> },
    { path: "/iniciarsesion", element: <Login /> },
    { path: "/administrador/dashboard", element: <Dashboard /> },
    {
      path: "/administrador",
      element: <Adminlogin />,
    },
    {
      path: "/productos/:id",
      element: <Products />,
    },
    {
      path: "/carrito",
      element: <Cart />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

=======
import LoginForm from "./pages/LoginForm";


function App() {
>>>>>>> Stashed changes
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
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
