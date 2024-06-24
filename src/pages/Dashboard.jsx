import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";

const Dashboard = () => {
  const columns = [
    { title: "Número de orden", field: "name", width: 200, editor: "input" },
    {
      title: "Producto",
      field: "location",
      width: 130,
      editor: "list",
      editorParams: {
        autocomplete: "true",
        allowEmpty: true,
        listOnEmpty: true,
        valuesLookup: true,
      },
    },
    {
      title: "Estado",
      field: "progress",
      sorter: "number",
      hozAlign: "left",
      formatter: "progress",
      width: 140,
      editor: "input",
    },
    {
      title: "Stock",
      field: "progress",
      sorter: "number",
      hozAlign: "left",
      formatter: "progress",
      width: 140,
      editor: "input",
    },
    {
      title: "ID",
      field: "progress",
      sorter: "number",
      hozAlign: "left",
      formatter: "progress",
      width: 140,
      editor: "input",
    },
    {
      title: "Rating",
      field: "rating",
      formatter: "star",
      hozAlign: "center",
      width: 150,
      editor: true,
    },
  ];

  const data = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "14/06/1992" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    {
      id: 3,
      name: "Christine Lobowski",
      age: "42",
      col: "green",
      dob: "22/05/1982",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "125",
      col: "orange",
      dob: "01/08/1980",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "16",
      col: "yellow",
      dob: "31/01/1999",
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <ReactTabulator columns={columns} data={data} layout="fitData" />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
