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
import { useRouter } from "next/navigation";

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

const sampleData = {
  drawActiveElementsOnTop: true,
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "DS1",
      data: [202.9, 309.32, 758.49, 306.31, 305.62, 308.37],
      backgroundColor: "rgb(23 153 72)",
      borderColor: "rgb(23 153 72)",
      borderWidth: 2,
      fill: true,
    },
    {
      label: "DS2",
      data: [
        2763087.33, 2524624.06, 2706022.1, 2773912.39, 2757876.64, 2664357.42,
      ],
      backgroundColor: "rgb(0 91 170)",
      borderColor: "rgb(0 91 170)",
      borderWidth: 2,
      fill: false,
    },
    {
      label: "DS3",
      data: [
        2763290.23, 2524933.38, 2706780.59, 2774218.7, 2758182.26, 2664665.79,
      ],
      fill: false,
      backgroundColor: "#80d4ff",
      borderColor: "#80d4ff",
      borderWidth: 2,
    },
  ],
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
  const keyDetails = user?.allowedmoduleWithActions[keyName] || [];

  return (
    <>
      {loader && <Loader />}
      <div className="row mt-12">
        {keyDetails?.map((i, index) => {
          return (
            <div className="col-md-6" key={index}>
              <div className="dashboard-cards">
                <div className="header">
                  <h3>{i?.name}</h3>
                </div>
                <div className="survey-chart">
                  <div className="h-auto w-auto">
                    {type === "doughnut" ? (
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                    ) : (
                      <Line data={sampleData} options={graphOptions} />
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
