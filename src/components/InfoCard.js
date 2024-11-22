"use client";
import React, { useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
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
import Loader from "./Loader";
import { useSelector } from "react-redux";

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
  plugins: {
    tooltip: {
      displayColors: false,
    },
  },
};

const graphOptions = {
  layout: {
    padding: {
      bottom: 30,
      top: 30,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const graphData = {
  drawActiveElementsOnTop: true,
  labels: "Data Sets",
  datasets: [
    {
      label: "My Logs",
      data: 30,
      backgroundColor: "rgb(23 153 72)",
      borderColor: "rgb(23 153 72)",
      borderWidth: 2,
      fill: true,
    },
    {
      label: "Group Logs",
      data: 49,
      backgroundColor: "rgb(0 91 170)",
      borderColor: "rgb(0 91 170)",
      borderWidth: 2,
      fill: false,
    },
    {
      label: "Total Logs",
      data: 23,
      fill: false,
      backgroundColor: "#80d4ff",
      borderColor: "#80d4ff",
      borderWidth: 2,
    },
  ],
};

const doughnutData = {
  labels: ["Pending", "Approved"],
  datasets: [
    {
      label: "Data Sets",
      data: [11, 27],
      backgroundColor: ["#0082E0", "#FF318E"],
      hoverBackgroundColor: ["#004CBF", "#C30A5B"],
      borderWidth: 1,
    },
  ],
};

const InfoCard = ({ keyName, type }) => {
  const [loader, setLoader] = useState(false);

  const user = useSelector((state) => state.user);
  const keyDetails = user?.allowedmoduleWithActions[keyName];

  console.log(keyDetails);

  return (
    <>
      {loader && <Loader />}
      <div className="row mt-12">
        {keyDetails?.map((i, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="dashboard-cards">
                <div className="header">
                  <h3>{i?.name}</h3>
                </div>
                <div className="survey-chart">
                  <div className="h-auto w-auto">
                    {type === "doughnut" ? (
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                    ) : (
                      <Line data={graphData} options={graphOptions} />
                    )}
                  </div>
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
