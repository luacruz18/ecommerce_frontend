import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  addUSers,
  updateUsers,
  deleteUsers,
} from "../Hooks/api";
import { ReactTabulator } from "react-tabulator";
import ChartComponent from "../components/Chart";
import SalesChart from "../components/SalesChart";

import "../styles/Dashboard.css";

const UsersComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user?.token;

  const [database, setDatabase] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [newProduct, setNewUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
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
    { title: "Descripción", field: "description", editor: "input" },
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
    <>
      <div className="chart-section">
        <div className="chart">
          <SalesChart />
        </div>
        <div className="chart">
          <ChartComponent />
        </div>
      </div>
      <div className="products-component-container">
        <div className="add-product-form">
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

        <div className="button-container">
          <button className="red-button" onClick={handleUpdateProducts}>
            Actualizar Productos
          </button>
        </div>
        <div className="tabulator-container">
          <ReactTabulator
            data={database}
            columns={columns}
            events={{ cellEdited: handleCellEdited }}
          />
        </div>
      </div>
    </>
  );
};

export default UsersComponent;
