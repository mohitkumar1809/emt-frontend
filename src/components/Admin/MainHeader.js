import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./SideNav";

const MainComponent = (props) => {
  const activeSideMenu = useSelector((state) => state?.activeSideMenu);
  return (
    <section className="admin-wrapper">
      <Sidebar />
      <div className="wrapper">
        <Header title={activeSideMenu?.nav} />
        <section className={`layout layout-${props.Layout}`}>
          {props.children}
        </section>
      </div>
    </section>
  );
};
export default MainComponent;
