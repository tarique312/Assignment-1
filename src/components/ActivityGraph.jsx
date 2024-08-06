import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityGraph = () => {
  const [data, setData] = useState({
    labels: [
      "5",
      "7",
      "9",
      "11",
      "13",
      "15",
      "17",
      "19",
      "21",
      "23",
      "25",
      "27",
      "29",
    ],
    datasets: [
      {
        label: "Activity",
        data: [100, 50, 80, 120, 60, 90, 150, 180, 100, 120, 80, 110, 130],
        backgroundColor: "rgb(92, 131, 200)",
        borderColor: "rgb(11, 28, 60)",
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 10,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    width: "100%",
    plugins: {
      legend: {
        display: true,
        position: "top", // Adjust the position of the legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgb(24, 38, 62)", // Custom tooltip background color
        titleFont: {
          size: 10,
        },
        bodyFont: {
          size: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide the x-axis grid lines
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.2)", // Custom y-axis grid line color
        },
      },
    },
  };

  return (
    <div style={{ height: "130px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityGraph;
