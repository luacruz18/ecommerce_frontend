import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Ventas",
        backgroundColor: "rgba(142, 0, 0, 1)",
        borderColor: "rgba(243, 246, 244, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0, 0, 0, 1)",
        hoverBorderColor: "rgba(243, 246, 244, 1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
