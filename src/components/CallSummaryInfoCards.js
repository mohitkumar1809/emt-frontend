"use client";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Loader from "./Loader";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      displayColors: false,
    },
  },
};

const CallSummaryInfoCards = () => {
  const [loader, setLoader] = useState(false);

  const user = useSelector((state) => state.user);
  const callSummaryDetails = user?.allowedmoduleWithActions["Call Summary"];

  // const data = {
  //   labels: ["Published Surveys", "Unpublished Surveys"],
  //   datasets: [
  //     {
  //       label: "No. of Surveys",
  //       data: [publishedSurveys?.length, unPublishedSurveys?.length],
  //       backgroundColor: ["#0082E0", "#FF318E"],
  //       hoverBackgroundColor: ["#004CBF", "#C30A5B"],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <>
      {loader && <Loader />}
      <div className="row mt-12">
        {callSummaryDetails?.map((i, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="dashboard-cards">
                <div className="header">
                  <h3>{i?.name}</h3>
                </div>
                <div className="survey-chart">
                  <div className="h-auto w-auto">
                    {/* <Doughnut data={data} options={options} /> */}
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

export default CallSummaryInfoCards;
