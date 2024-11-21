"use client";
import React from "react";
import MainComponent from "../Admin/MainHeader";
import Breadcrumb from "@/components/BreadCrumb";
import withFixedChildren from "@/hoc/WithAdminPanelUI";

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
