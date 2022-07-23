import React from "react";
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

function BarChart({fillwidth, title}) {
  const options = {
    events:[],
    indexAxis:'y',
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: { 
        ticks: {
          color: "#A6A5B7", 
          font: {
            size: 14, // 'size' now within object 'font {}'
          }
        }
      },
    },
    plugins: {
      legend: {
        position: "top",
        display:false
      },
      title: {
        display: false,
        text: "Top Genres",
      },
    },
    scaleShowLabels : false
  };


  const data = {
    labels: title,
    datasets: [
      {
        label: "",
        data: fillwidth,
        backgroundColor:  "#19b350",
        // barThickness: 50,
        axis: 'y',
        fill:false,
        // "rgba(255, 99, 132, 0.5)"
      }
    
    ]
  };
  return (
    <>
      {/* <div style={{ width: "100%", margin: "auto auto" }}> */}
        <Bar options={options} data={data} />
      {/* </div> */}
    </>
  );
}

export default BarChart;