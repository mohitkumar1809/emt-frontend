"use client";
import React, { useEffect } from "react";
import InfoCard from "@/components/InfoCard";
import Breadcrumb from "@/components/BreadCrumb";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import MainComponent from "../../components/MainHeader";
import { useRouter } from "next/navigation";

const breadcrumbItems = [
  { label: "Dashboard", href: "/dashboard", active: false },
  { label: "Call Summary", href: "", active: true },
];

const CallSummary = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <InfoCard type="doughnut" keyName="Call Summary" />
    </>
  );
};

export default withFixedChildren(MainComponent, CallSummary);
