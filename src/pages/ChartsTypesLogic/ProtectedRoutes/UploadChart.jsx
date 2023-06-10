import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
} from "chart.js/auto";

// css
import "../../../assets/css/ChartTypes.css";

// components
import PieChartLogic from "../PieCharts/PieChartLogic";

// ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);

const UploadChart = () => {
    const location = useLocation();

   
    return (
        <>
            <div className="container uploadSection">
                <h4 className="fw-normal mt-5 mb-0 w-100 ps-1 mb-3">{location.state.chartName}</h4>
                <PieChartLogic />   
            </div>
        </>
    );
};

export default UploadChart;
