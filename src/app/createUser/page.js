"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import withFixedChildren from "@/hoc/WithAdminPanelUI";
import MainComponent from "../../components/MainHeader";

const breadcrumbItems = [
  { label: "Dashboard", href: "/dashboard", active: false },
  { label: "Create User", href: "", active: true },
];

const CreateUser = () => {
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
    </>
  );
};

export default withFixedChildren(MainComponent, CreateUser);
