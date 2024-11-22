"use client";
import React from "react";
import Breadcrumb from "@/components/BreadCrumb";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import MainComponent from "../../components/Admin/MainHeader";

const breadcrumbItems = [
  { label: "Dashboard", href: "/dashboard", active: false },
  { label: "Call Summary", href: "", active: true },
];

const Dashboard = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row rounded p-5 position-relative"></div>
    </>
  );
};

export default withFixedChildren(MainComponent, Dashboard);
