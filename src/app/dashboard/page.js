"use client";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import React from "react";
import MainComponent from "../Admin/MainHeader";
import Breadcrumb from "@/components/BreadCrumb";

const breadcrumbItems = [
  { label: "Home", href: "/", active: false },
  { label: "Dashboard", href: "", active: true },
];

const Dashboard = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row welcome-card rounded p-5 position-relative">
        <div className="col-md-6">
          <h4>Welcome Back !</h4>
          <p>
            Your dashboard is ready with everything you need to stay ahead.
            Explore new content, manage your tasks, and keep growing.
          </p>
        </div>
        <div className="col-md-6">
          <img src="Welcome-Card.svg" />
        </div>
      </div>
    </>
  );
};

export default withFixedChildren(MainComponent, Dashboard);
