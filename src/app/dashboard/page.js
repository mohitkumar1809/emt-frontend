"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import InfoCard from "@/components/InfoCard";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import MainComponent from "../../components/MainHeader";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <InfoCard type={"doughnut"} keyName={"Dashboard"} />
      <InfoCard type={"doughnut"} keyName={"Dashboard"} />
    </>
  );
};

export default withFixedChildren(MainComponent, Dashboard);
