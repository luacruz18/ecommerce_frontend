import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, addOrder, updateOrder, deleteOrder } from "../Hooks/api";
import { ReactTabulator } from "react-tabulator";

import ChartComponent from "../components/Chart";
import SalesChart from "../components/SalesChart";

import "../styles/Dashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const OrdersComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user?.token;

  const [database, setDatabase] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [newOrder, setNewOrder] = useState({
    products: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersData = await fetchOrders();
        setDatabase(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
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

  const handleUpdateOrders = async () => {
    try {
      for (const row of updatedRows) {
        await updateOrder(row.id, row, token);
      }
      alert("Orders updated successfully");
    } catch (error) {
      console.error("Error updating orders:", error);
      alert("There was an error updating the orders");
    }
  };

  const handleAddOrder = async () => {
    try {
      if (!newOrder.products || !newOrder.status) {
        alert("Please complete all required fields.");
        return;
      }

      const addedOrder = await addOrder(newOrder, token);
      setDatabase((prev) => [...prev, addedOrder]);
      setNewOrder({
        products: "",
        status: "",
      });
      alert("Order added successfully");
    } catch (error) {
      console.error("Error adding order:", error.message || error);
      alert("There was an error adding the order");
    }
  };

  const handleDeleteOrder = async (id) => {
    try {
      await deleteOrder(id, token);
      setDatabase((prev) => prev.filter((order) => order.id !== id));
      alert("Order deleted successfully");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("There was an error deleting the order");
    }
  };

  const columns = [
    { title: "ID", field: "id", width: 150, editor: false },
    { title: "Products", field: "products", width: 150, editor: "input" },
    { title: "Status", field: "status", width: 150, editor: "input" },
    {
      title: "Actions",
      field: "actions",
      width: 100,
      formatter: (cell, formatterParams, onRendered) => {
        const button = document.createElement("button");
        button.className = "delete-button";
        button.onclick = () => handleDeleteOrder(cell.getRow().getData().id);

        const icon = document.createElement("i");
        icon.className = "fas fa-trash-alt trash-icon";

        button.appendChild(icon);
        return button;
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

      <div className="orders-component-container">
        <div className="add-order-form">
          <h3>Agregar Nueva Orden</h3>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                placeholder="ID"
                value={newOrder.id}
                onChange={(e) =>
                  setNewOrder({ ...newOrder, id: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Productos"
                value={newOrder.products}
                onChange={(e) =>
                  setNewOrder({ ...newOrder, products: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                placeholder="Estado"
                value={newOrder.status}
                onChange={(e) =>
                  setNewOrder({ ...newOrder, status: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="add-button" onClick={handleAddOrder}>
            Agregar Orden
          </button>
          <button className="red-button" onClick={handleUpdateOrders}>
            Actualizar Ordenes
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
    </>
  );
};

export default OrdersComponent;
