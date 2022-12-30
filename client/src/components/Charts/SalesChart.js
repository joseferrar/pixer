import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(3, 211, 181, 0.85)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45, 55, 33, 21, 11, 27],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} options={{ plugins: { legend: { display: false } } }} />
    </div>
  );
};

export default BarChart;
