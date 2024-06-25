
import React from 'react';
import '../styles/Dashboard.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ReactTabulator } from 'react-tabulator';
import ChartComponent from '../components/Chart'; 
import SalesChart from '../components/SalesChart'; 
import TopProducts from '../components/TopProducts'; 
import Notifications from '../components/Notifications'; 

const Dashboard = () => {
  const columns = [
    { title: 'Número de orden', field: 'name', width: 200, editor: 'input' },
    { title: 'ID', field: 'location', width: 130, editor: 'list', editorParams: {
        autocomplete: 'true', allowEmpty: true, listOnEmpty: true, valuesLookup: true
      }
    },
    { title: 'Producto', field: 'progress', sorter: 'number', hozAlign: 'left', formatter: 'progress', width: 140, editor: 'input' },
    { title: 'Estado', field: 'progress', sorter: 'number', hozAlign: 'left', formatter: 'progress' },
    { title: 'Stock', field: 'stock', sorter: 'number', hozAlign: 'left', formatter: 'number' }
  ];

  const data = [
    { id: 1, name: 'Oli Bob', location: 'New York', progress: 42, gender: 'male', rating: 7, col: 'red', dob: '14/04/1984' },
    { id: 2, name: 'Mary May', location: 'Boston', progress: 11, gender: 'female', rating: 4, col: 'blue', dob: '21/05/1982' },
    { id: 3, name: 'Christine Lobowski', location: 'Los Angeles', progress: 61, gender: 'female', rating: 6, col: 'green', dob: '07/03/1984' },
    { id: 4, name: 'Brendon Philips', location: 'Miami', progress: 23, gender: 'male', rating: 8, col: 'orange', dob: '22/02/1984' },
    { id: 5, name: 'Margret Marmajuke', location: 'Chicago', progress: 42, gender: 'female', rating: 10, col: 'yellow', dob: '03/12/1984' }
  ];

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="stat-item">
            <h2>150</h2>
            <p>Nuevas órdenes</p>
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
        <ReactTabulator data={data} columns={columns} layout="fitData" />
        <ChartComponent /> 
        <SalesChart /> 
        <TopProducts /> 
        <Notifications /> 
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
