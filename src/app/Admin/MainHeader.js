import React from "react";
import Header from "./Header";
import Sidebar from "./SideNav";

const style = { maxWidth: "100%" };

const MainComponent = (props) => {
  return (
    <section className="admin-wrapper">
      <Sidebar />
      <div className="wrapper">
      {/* <div className="wrapper" style={style}> */}
        <Header title={"Dasboard"} />
        <section className={`layout layout-${props.Layout}`}>
          {props.children}
        </section>
      </div>
    </section>
  );
};
export default MainComponent;
