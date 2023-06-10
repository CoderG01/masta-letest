import React from "react";
import ImagesCard from "../../../component/chartTypesPage/ImagesCard";
import "../../../assets/css/ChartTypes.css";

const ChartTypes = () => {
  const chartList = [
    {
      id: 1,
      chartImagePath: "ChartTypesImages/pie.png",
      chartName: "Pie Charts",
      chartEditPath: "./charttypes/piechartdetail",
      param: "pie"

    },
    {
      id: 2,
      chartImagePath: "PieChartDetail/four.png",
      chartName: "doughnut Charts",
      param: "doughnut"
      
    },
    {
      id: 3,
      chartImagePath: "ChartTypesImages/line.png",
      chartName: "line Charts",
      param: "line"

    },
    {
      id: 4,
      chartImagePath: "ChartTypesImages/bar.png",
      chartName: "Bar Charts",
      param: "bar"

    },
    {
      id: 5,
      chartImagePath: "PieChartDetail/one.png",
      chartName: "Polar Charts",
      param: "polarArea"
    },
    {
      id: 6,
      chartImagePath: "PieChartDetail/one.png",
      chartName: "Radar Charts",
      param: "radar"
    },
  ]
  return (
    <React.Fragment>
      <div className="ChartTypeSection d-flex align-items-center justify-content-start flex-column pt-2 pb-4">
        <h4 className="fw-bold text-center my-5">Popular Chart types</h4>
        {/* <h2>0</h2>
        <button>click</button> */}
        <div className="d-flex align-items-center justify-content-start gap-5 flex-wrap">
          {
            chartList?.map((data) => {
              return (
                <ImagesCard
                  chartImagePath={data.chartImagePath}
                  chartName={data.chartName}
                  param={data.param}
                  key={data.id}
                />
              )
            })
          }
          {/* <ImagesCard
            chartName={"Pie Charts"}
            chartImagePath={"ChartTypesImages/pie.png"}
            chartPath={"./charttypes/piechartdetail"}
            id={1}
          />
          <ImagesCard
            chartName={"Bar Charts"}
            chartImagePath={"ChartTypesImages/bar.png"}
            id={2}
          />
          <ImagesCard
            chartName={"Area Charts"}
            chartImagePath={"ChartTypesImages/line.png"}
            id={3}
          />
          <ImagesCard
            chartName={"Line Charts"}
            chartImagePath={"ChartTypesImages/area.png"}
            id={4}
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChartTypes;
