import React from "react";
import { useNavigate } from "react-router-dom";

const ImagesCard = ({ chartName, chartImagePath, param }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div
        className="chartCard pt-4 pb-5 d-flex flex-column justify-content-between"
        onClick={() =>
          navigate(`/create/${param}`, {
            state: {
              chartName,
              chartImagePath,
              param
            },
          })
        }
      >
        <h5 className="fw-normal ps-4">{chartName}</h5>
        <div className="d-flex align-items-center justify-content-center">
          <img src={`../${chartImagePath}`} alt="pie chart image" className="w-75" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImagesCard;
