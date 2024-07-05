import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategory,
  addedCategory,
  updateCategory,
  deleteCategory,
} from "../Hooks/api";
import { ReactTabulator } from "react-tabulator";
import ChartComponent from "../components/Chart";
import SalesChart from "../components/SalesChart";

import "../styles/Dashboard.css";

const CategoryComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user?.token;

  const [database, setDatabase] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [newCategory, setNewCategory] = useState({
    id: "",
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchCategory();
        setDatabase(productsData);
      } catch (error) {
        console.error("Error fetching category:", error);
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

  const handleUpdateCategory = async () => {
    try {
      for (const row of updatedRows) {
        await updateCategory(row.id, row, token);
      }
      alert("Categorías actualizadas correctamente");
    } catch (error) {
      console.error("Error updating categories:", error);
      alert("Hubo un error al actualizar las categorías");
    }
  };

  const handleAddCategory = async () => {
    try {
      const addedCategory = await addedCategory(newCategory, token);
      setDatabase((prev) => [...prev, addedCategory]);
      setNewCategory({ id: "", name: "" });
      alert("Categoría agregada correctamente");
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Hubo un error al agregar la categoría");
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id, token);
      setDatabase((prev) => prev.filter((category) => category.id !== id));
      alert("Categoría eliminada correctamente");
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Hubo un error al eliminar la categoría");
    }
  };

  const columns = [
    { title: "ID", field: "id", editor: false },
    { title: "Nombre", field: "name", editor: "input" },

    {
      title: "Acciones",
      field: "actions",
      width: 100,
      formatter: (cell, formatterParams, onRendered) => {
        return `<button class="delete-button">Eliminar</button>`;
      },
      cellClick: (e, cell) => {
        const row = cell.getRow().getData();
        handleDeleteCategory(row.id);
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
          <h3>Agregar Nueva Categoría</h3>
          <input
            type="text"
            placeholder="ID"
            value={newCategory.id}
            onChange={(e) =>
              setNewCategory({ ...newCategory, id: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Nombre"
            value={newCategory.name}
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
          />

          <button className="add-button" onClick={handleAddCategory}>
            Agregar Categoría
          </button>
        </div>

        <div className="button-container">
          <button className="red-button" onClick={handleUpdateCategory}>
            Actualizar Categoría
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

export default CategoryComponent;
