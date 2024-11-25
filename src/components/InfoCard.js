"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      displayColors: false,
    },
  },
};

const doughnutData = {
  labels: ["Rejected", "Approved"],
  datasets: [
    {
      label: "Calling Sets",
      data: [11, 27],
      backgroundColor: ["#0082E0", "#FF318E"],
      hoverBackgroundColor: ["#004CBF", "#C30A5B"],
      borderWidth: 1,
    },
  ],
};

const graphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      type: "linear",
      position: "left",
      beginAtZero: true,
      title: {
        display: true,
        text: "Values (Small Scale)",
      },
    },
    y1: {
      type: "linear",
      position: "right",
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Values (Large Scale)",
      },
    },
    x: {
      title: {
        display: true,
        text: "Months",
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
};

const sampleData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "IND",
      data: [20, 309, 758, 306],
      backgroundColor: "rgba(23, 153, 72, 0.5)",
      borderColor: "rgb(23 153 72)",
      borderWidth: 2,
      fill: true,
      yAxisID: "y",
    },
    {
      label: "AUS",
      data: [2763, 2524, 2706, 2773],
      backgroundColor: "rgba(0, 91, 170, 0.5)",
      borderColor: "rgb(0 91 170)",
      borderWidth: 2,
      fill: true,
      yAxisID: "y1",
    },
    {
      label: "NZE",
      data: [3290, 2523, 2706, 2774],
      backgroundColor: "rgba(128, 212, 255, 0.5)",
      borderColor: "#80d4ff",
      borderWidth: 2,
      fill: true,
      yAxisID: "y1",
    },
  ],
};

const InfoCard = ({ keyName }) => {
  const user = useSelector((state) => state.user);
  const keyDetails = user?.allowedmoduleWithActions[keyName] || [];

  return (
    <>
      <div className="row">
        {keyDetails?.map((i, index) => {
          return (
            <div className="col-md-6" key={index}>
              <div
                className="dashboard-cards"
                style={{ height: "250px", padding: "10px" }}
              >
                <div className="header">
                  <h3 style={{ fontSize: "12px" }}>{i?.name}</h3>
                </div>
                <div className="survey-chart">
                  {index > 2 ? (
                    <div
                      className="h-100 w-100"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                    </div>
                  ) : (
                    <div className="h-100 w-100">
                      <Line data={sampleData} options={graphOptions} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InfoCard;
