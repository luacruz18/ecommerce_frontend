import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser, updateUser, deleteUser } from "../Hooks/api";
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
  const [newUser, setNewUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const UsersData = await fetchUsers();
        setDatabase(UsersData);
      } catch (error) {
        console.error("Error fetching users:", error);
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

  const handleUpdateUsers = async () => {
    try {
      for (const row of updatedRows) {
        await updateUser(row.id, row, token);
      }
      alert("Usuarios actualizados correctamente");
    } catch (error) {
      console.error("Error updating Users:", error);
      alert("Hubo un error al actualizar los usuarios");
    }
  };

  const handleAddUser = async () => {
    try {
      const addedUser = await addUser(newUser, token);
      setDatabase((prev) => [...prev, addedUser]);
      setNewUser({ name: "", price: "", stock: "", description: "" });
      alert("Usero agregado correctamente");
    } catch (error) {
      console.error("Error adding User:", error);
      alert("Hubo un error al agregar el Usuario");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id, token);
      setDatabase((prev) => prev.filter((User) => User.id !== id));
      alert("User eliminado correctamente");
    } catch (error) {
      console.error("Error deleting User:", error);
      alert("Hubo un error al eliminar el usuario");
    }
  };

  const columns = [
    { title: "ID", field: "id", width: 150, editor: false },
    { title: "firstname", field: "name", width: 150, editor: "input" },
    { title: "lastname", field: "price", width: 150, editor: "input" },
    { title: "email", field: "stock", width: 150, editor: "input" },
    { title: "address", field: "description", editor: "input" },
    {
      title: "Acciones",
      field: "actions",
      width: 100,
      formatter: (cell, formatterParams, onRendered) => {
        return `<button class="delete-button">Eliminar</button>`;
      },
      cellClick: (e, cell) => {
        const row = cell.getRow().getData();
        handleDeleteUser(row.id);
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
      <div className="Product-component-container">
        <div className="add-User-form">
          <h3>Agregar Nuevo Usuario</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Precio"
            value={newUser.price}
            onChange={(e) => setNewUser({ ...newUser, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Stock"
            value={newUser.stock}
            onChange={(e) => setNewUser({ ...newUser, stock: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newUser.description}
            onChange={(e) =>
              setNewUser({ ...newUser, description: e.target.value })
            }
          />
          <button className="add-button" onClick={handleAddUser}>
            Agregar Usero
          </button>
        </div>

        <div className="button-container">
          <button className="red-button" onClick={handleUpdateUsers}>
            Actualizar Useros
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
