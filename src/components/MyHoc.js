import { useState } from "react";

const MyHoc = (Component, name) => {
  return (
    <div className="wrapper">
      <Component {...name} />
    </div>
  );
};

export default MyHoc;
