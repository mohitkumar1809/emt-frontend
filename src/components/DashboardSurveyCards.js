'use client'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Loader from "./Loader";
import SurveyService from "@/auth/services/AdminServices/SurveyService";

ChartJS.register(ArcElement, Tooltip);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      displayColors: false,
    },
  },
};

const DashboardSurveyCards = () => {
  const [loader, setLoader] = useState(true);
  const [publishedSurveys, setPublishedSurveys] = useState(null);
  const [unPublishedSurveys, setUnPublishedSurveys] = useState(null);

  const router = useRouter();

  const data = {
    labels: ["Published Surveys", "Unpublished Surveys"],
    datasets: [
      {
        label: "No. of Surveys",
        data: [publishedSurveys?.length, unPublishedSurveys?.length],
        backgroundColor: ["#0082E0", "#FF318E"],
        hoverBackgroundColor: ["#004CBF", "#C30A5B"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const data = {
      status: -1,
    };
    const fetchSurveyData = async () => {
      try {
        const res = await SurveyService.viewAllSurvey(data);
        const response = res.data.data;
        setPublishedSurveys( response?.filter((i) => Number(i?.surveyStatus) === 1) );
        setUnPublishedSurveys( response?.filter((i) => Number(i?.surveyStatus) !== 1) );
      } catch(err){
        console.error(err);
        toast.error("Error in fetching survey data.");
      } finally{
        setLoader(false);
      }
    };
    fetchSurveyData();
  }, []);

  const surveyCards = (surveys) => {
    return (
      <>
        <ul className="details-list">
          {surveys &&
            surveys?.length > 0 &&
            surveys?.slice(0, 5)?.map((survey, index) => {
              return (
                <li key={index} className="detail-item">
                  <div className="detail-info">
                    <p className="name">{survey?.surveyName}</p>
                    <p className="event">{survey?.surveyDetail}</p>
                  </div>
                </li>
              );
            })}
          {(!surveys || surveys?.length === 0) && <span>No Survey Found</span>}
        </ul>
        {surveys && surveys?.length > 0 && (
          <div className="footer">
            <button
              className="view-more"
              onClick={() => router.push("./Survey/SurveyList")}
            >
              View More
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {loader && <Loader />}
      {(publishedSurveys?.length > 0 || unPublishedSurveys?.length > 0) && (
        <div className="row mt-12">
          <div className="col-md-4">
            <div className="dashboard-cards">
              <div className="header">
                <h3>
                  All Surveys (
                  {publishedSurveys?.length ||
                    0 + unPublishedSurveys?.length ||
                    0}
                  )
                </h3>
              </div>
              <div className="survey-chart">
                <div className="h-auto w-auto">
                  <Doughnut data={data} options={options} />
                </div>
              </div>
              <div className="chart-footer row">
                <div className="footer-block col-md-6">
                  <span
                    className="block-color"
                    style={{ background: "#FF318E" }}
                  ></span>
                  <label>Unpublished Surveys</label>
                </div>
                <div className="footer-block col-md-6">
                  <span
                    className="block-color"
                    style={{ background: "#0082E0" }}
                  ></span>
                  <label>Published Surveys</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-cards">
              <div className="header">
                <h3>Published Surveys ({publishedSurveys?.length || 0})</h3>
              </div>
              {surveyCards(publishedSurveys)}
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-cards">
              <div className="header">
                <h3>Unpublished Surveys ({unPublishedSurveys?.length || 0})</h3>
              </div>
              {surveyCards(unPublishedSurveys)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSurveyCards;
