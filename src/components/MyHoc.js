import React from "react";

const MyHOC = (Component, name) => {
  return (props) => (
    <div className="wrapper">
      <Component {...props} name={name} />
    </div>
  );
};

export default MyHOC;
