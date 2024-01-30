import { useState } from "react";

const MyHOC = (Component, name) => {
  return (
    <div className="wrapper">
      <Component {...name} />
    </div>
  );
};

export default MyHOC;
