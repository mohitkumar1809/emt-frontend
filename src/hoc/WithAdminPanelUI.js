import React from "react";

const withFixedChildren = (WrappedComponent, FixedComponent) => {
  return (props) => {
    return <WrappedComponent {...props}>{<FixedComponent />}</WrappedComponent>;
  };
};

export default withFixedChildren;
