import React from "react";
import { Image } from "react-bootstrap";
const style = {
  width: "600px",
};
const NoPage = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center h-100">
        <img src="/pageNotFound.png" alt="page not found" style={style} />
      </div>
    </div>
  );
};

export default NoPage;
