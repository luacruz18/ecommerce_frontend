import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Products from "./pages/ProductsDetails";
import About from "./pages/About";
import Shopping from "./pages/Shopping";
import ProductList from "./pages/ProductsList";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

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
    { path: "/administrador", element: <Dashboard /> },
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

  return <RouterProvider router={router} />;
}

export default App;
