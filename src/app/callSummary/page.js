"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import InfoCard from "@/components/InfoCard";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import MainComponent from "../../components/MainHeader";

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
      <InfoCard keyName="Call Summary" />
    </>
  );
};

export default withFixedChildren(MainComponent, CallSummary);
