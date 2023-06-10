import React, { useState } from "react";
import "../../assets/css/ChartTypes.css";
import PieChartImageCard from "../../../component/chartTypesPage/PieChartImageCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CreateChartDetail = () => {

  const navigate = useNavigate();
  const handleEditChart = () => {
    navigate('/edit');
  };
  const handleUploadChart = () => {
    navigate('/uploadchart');

  }
  const PieChartList = [
    {
      chartOption: "edit",
      imagePath: "PieChartDetail/eight.png",
    },
    {
      id: 1,
      chartImagePath: "ChartTypesImages/pie.png",
      chartName: "Pie Charts",
      chartEditPath: "./charttypes/piechartdetail",
      param: "pie-charts"

    },
  ];

  const { chartName } = useParams();
  const location = useLocation();
  const chartData = location?.state;

  return (
    <React.Fragment>
      <div className="ChartTypeSection pt-2 pb-4 gap-5 flex-wrap">
        <div className="w-100 d-flex align-items-center justify-content-center flex-wrap flex-column">
          <h2 className="fw-normal text-center my-5 text-center">
            {chartData?.chartName}
          </h2>
          <div className="d-flex gap-5 flex-wrap">
            <div className="position-relative">
              <PieChartImageCard
                imgPath={"PieChartDetail/eight.png"}
                handleClick={handleEditChart}
              />
            </div>
            <div className="position-relative">
              <PieChartImageCard
                imgPath={"PieChartDetail/one.png"}
                handleClick={handleUploadChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateChartDetail;
