"use client";
import React from "react";
import { useSelector } from "react-redux";
import MainComponent from "../Admin/MainHeader";
import Breadcrumb from "@/components/BreadCrumb";
import withFixedChildren from "@/hoc/WithAdminPanelUI";

const breadcrumbItems = [{ label: "Dashboard", href: "", active: true }];

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row welcome-card rounded p-5 position-relative">
        <div className="col-md-6">
          <h4>
            Welcome Back, {user?.firstName} {user?.lastName} !
          </h4>
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
