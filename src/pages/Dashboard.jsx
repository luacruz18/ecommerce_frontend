import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../Hooks/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactTabulator } from "react-tabulator";
import ChartComponent from "../components/Chart";
import SalesChart from "../components/SalesChart";
import TopProducts from "../components/TopProducts";
import Notifications from "../components/Notifications";
import "../styles/Dashboard.css";

const BASE_URL = "http://localhost:3000"; 

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user?.token;

  const [database, setDatabase] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setDatabase(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []); 

  const handleCellEdited = (cell) => {
    const updatedRow = cell.getRow().getData();
    setUpdatedRows((prev) => {
      const updatedIndex = prev.findIndex((row) => row.id === updatedRow.id);
      if (updatedIndex >= 0) {
        const updatedRowsCopy = [...prev];
        updatedRowsCopy[updatedIndex] = updatedRow;
        return updatedRowsCopy;
      } else {
        return [...prev, updatedRow];
      }
    });
  };

  const handleUpdateProducts = async () => {
    try {
      for (const row of updatedRows) {
        await updateProduct(row.id, row, token);
      }
      alert("Productos actualizados correctamente");
    } catch (error) {
      console.error("Error updating products:", error);
      alert("Hubo un error al actualizar los productos");
    }
  };

  const handleAddProduct = async () => {
    try {
      const addedProduct = await addProduct(newProduct, token);
      setDatabase((prev) => [...prev, addedProduct]);
      setNewProduct({ name: "", price: "", stock: "", description: "" });
      alert("Producto agregado correctamente");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Hubo un error al agregar el producto");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id, token);
      setDatabase((prev) => prev.filter((product) => product.id !== id));
      alert("Producto eliminado correctamente");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Hubo un error al eliminar el producto");
    }
  };

  const columns = [
    { title: "ID", field: "id", width: 150, editor: false },
    { title: "Producto", field: "name", width: 150, editor: "input" },
    { title: "Precio", field: "price", width: 150, editor: "input" },
    { title: "Stock", field: "stock", width: 150, editor: "input" },
    { title: "Description", field: "description", editor: "input" },
    {
      title: "Acciones",
      field: "actions",
      width: 100,
      formatter: (cell, formatterParams, onRendered) => {
        return `<button class="delete-button">Eliminar</button>`;
      },
      cellClick: (e, cell) => {
        const row = cell.getRow().getData();
        handleDeleteProduct(row.id);
      },
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="stat-item">
            <h2>150</h2>
            <p>New Orders</p>
          </div>
          <div className="stat-item">
            <h2>53%</h2>
            <p>Bounce Rate</p>
          </div>
          <div className="stat-item">
            <h2>44</h2>
            <p>User Registrations</p>
          </div>
          <div className="stat-item">
            <h2>65</h2>
            <p>Unique Visitors</p>
          </div>
        </div>
        <ReactTabulator
          data={database}
          columns={columns}
          events={{ cellEdited: handleCellEdited }}
        />
        <div className="button-container">
          <button className="red-button" onClick={handleUpdateProducts}>
            Actualizar Productos
          </button>
        </div>
        <div>
          <h3>Agregar Nuevo Producto</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Precio"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <button className="add-button" onClick={handleAddProduct}>
            Agregar Producto
          </button>
        </div>
        <div className="chart-container">
          <div style={{ flex: 1 }}>
            <ChartComponent />
          </div>
          <div style={{ flex: 1 }}>
            <SalesChart />
          </div>
        </div>
        <TopProducts />
        <Notifications />
      </div>
      <Footer />
    </div>
  );
};


export default Dashboard;
