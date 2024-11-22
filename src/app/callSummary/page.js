"use client";
import React from "react";
import Breadcrumb from "@/components/BreadCrumb";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import MainComponent from "../../components/MainHeader";
import CallSummaryInfoCards from "@/components/CallSummaryInfoCards";

const breadcrumbItems = [
  { label: "Dashboard", href: "/dashboard", active: false },
  { label: "Call Summary", href: "", active: true },
];

const Dashboard = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <CallSummaryInfoCards />
    </>
  );
};

export default withFixedChildren(MainComponent, Dashboard);
