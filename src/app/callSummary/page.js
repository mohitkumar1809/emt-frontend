"use client";
import React from "react";
import InfoCard from "@/components/InfoCard";
import Breadcrumb from "@/components/BreadCrumb";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import MainComponent from "../../components/MainHeader";

const breadcrumbItems = [
  { label: "Dashboard", href: "/dashboard", active: false },
  { label: "Call Summary", href: "", active: true },
];

const CallSummary = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <InfoCard type="doughnut" keyName="Call Summary" />
    </>
  );
};

export default withFixedChildren(MainComponent, CallSummary);
