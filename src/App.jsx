import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Products from "./pages/ProductsDetails";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Shopping from "./pages/Shopping";
import ProductList from "./pages/ProductsList";
import Dashboard from "./pages/Dashboard";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
