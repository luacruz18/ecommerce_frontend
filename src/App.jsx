import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Category from "./components/Category";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
