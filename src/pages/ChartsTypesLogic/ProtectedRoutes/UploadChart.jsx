import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// css
import "../../../assets/css/ChartTypes.css";

// components
import PieChartLogic from "../PieCharts/PieChartLogic";
import Second from "../PieCharts/Second";


const UploadChart = () => {
    const [chartType, setChartType] = useState('');
    const location = useLocation();

    useEffect(() => {
        setChartType(location.state.param)
        // console.log(location.state.param);
    },[location])

    let render_chart;
    switch (chartType) {
        case 'pie' || "doughnut":
            render_chart = <PieChartLogic />
            break;
        // case '':
        //     <PieChartLogic />
        //     break;
    }
    
    return (
        <>
            <div className="container uploadSection">
                <h4 className="fw-normal mt-5 mb-0 w-100 ps-1 mb-3">{location.state.chartName}</h4>
                {/* <PieChartLogic />    */}
                {/* {render_chart} */}
                <Second />
            </div>
        </>
    );
};

export default UploadChart;
