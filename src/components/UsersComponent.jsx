import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser, updateUser, deleteUser } from "../Hooks/api";
import { ReactTabulator } from "react-tabulator";
import ChartComponent from "../components/Chart";
import SalesChart from "../components/SalesChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "../styles/Dashboard.css";

const UsersComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user?.token;

  const [database, setDatabase] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUsers();
        setDatabase(usersData);
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
      console.error("Error updating users:", error);
      alert("Hubo un error al actualizar los usuarios");
    }
  };

  const handleAddUser = async () => {
    try {
      const addedUser = await addUser(newUser, token);
      setDatabase((prev) => [...prev, addedUser]);
      setNewUser({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
      });
      alert("Usuario agregado correctamente");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Hubo un error al agregar el usuario");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id, token);
      setDatabase((prev) => prev.filter((user) => user.id !== id));
      alert("Usuario eliminado correctamente");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Hubo un error al eliminar el usuario");
    }
  };

  const columns = [
    { title: "ID", field: "id", width: 150, editor: false },
    { title: "Nombre", field: "firstname", width: 150, editor: "input" },
    { title: "Apellido", field: "lastname", width: 150, editor: "input" },
    { title: "Email", field: "email", width: 150, editor: "input" },
    { title: "Dirección", field: "address", editor: "input" },
    {
      title: "Acciones",
      field: "actions",
      width: 100,
      formatter: (cell, formatterParams, onRendered) => {
        return (
          <button
            className="delete-button"
            onClick={() => handleDeleteUser(cell.getRow().getData().id)}
          >
            <FontAwesomeIcon icon={faTrash} style={{ color: "#000000" }} />
          </button>
        );
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
          <h3>Agregar Nuevo Usuario</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre"
              value={newUser.firstname}
              onChange={(e) =>
                setNewUser({ ...newUser, firstname: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Apellido"
              value={newUser.lastname}
              onChange={(e) =>
                setNewUser({ ...newUser, lastname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Dirección"
              value={newUser.address}
              onChange={(e) =>
                setNewUser({ ...newUser, address: e.target.value })
              }
            />
          </div>
          <div className="button-container">
            <button className="add-button" onClick={handleAddUser}>
              Agregar Usuario
            </button>
            <button className="red-button" onClick={handleUpdateUsers}>
              Actualizar Usuarios
            </button>
          </div>
        </div>
        <div className="tabulator-container">
          <ReactTabulator
            data={database}
            columns={columns}
            cellEdited={handleCellEdited}
            options={{ movableColumns: true }}
          />
        </div>
      </div>
    </>
  );
};

export default UsersComponent;
