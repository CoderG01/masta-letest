import React, { useEffect, useState } from "react";
import UploadChartSkeleton from "../../../component/Editchart/UploadChartSkeleton";
import ShadowLightBtn from "../../../component/ShadowLightBtn";
import "../../../assets/css/ChartTypes.css";
import * as XLSX from "xlsx";
import { read, utils } from "xlsx";
import { FiDownload } from "react-icons/Fi";

import { json, Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useAppDispatch } from "../../../store/hooks";
import { setChartData as setChartDataAction } from "../../../store/slices/chartDataSlice";

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);

const PieChartLogic = () => {
    const [chartRootData, setChartrootData] = useState();
    const [chartData, setChartData] = useState([]);
    const [chartLable, setChartLable] = useState([]);
    const [ranodmColor, setRandomColor] = useState();
    const [colorLength, setColorLength] = useState();
    const { chartName } = useParams();
    const location = useLocation();
    const [__html, setHTML] = React.useState("");
    const chartDataParam = location?.state?.param;
    const navigate = useNavigate();
    const [customize, setCustomize] = useState(false);
    const [chartMainDataSets, SetChartMainDataSets] = useState([
        {
            label: "data",
            data: [],
            fill: false,
            borderColor: "rgb(75, 192, 192)"
        }
    ]);

    // import & export excel
    React.useEffect(() => {
        const csv = `\
    lable,
    2,
    1,
    3,
    4,
    5`;
        const wb = XLSX.read(csv, { type: "string" });
        const ws = wb.Sheets.Sheet1;
        setHTML(XLSX.utils.sheet_to_html(ws, { id: "tabeller" }));
    }, []);

    const handleShowExcel = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const wb = XLSX.read(data);
        const ws = wb.Sheets[wb.SheetNames[0]];
        setHTML(XLSX.utils.sheet_to_html(ws, { id: "tabeller" }));
    };

     // convert multiple columns ready for chart
     const outputArray = [];
     const convertArray = () => {
         const mainArray = chartData;
         const innerLength = mainArray[0]?.length;
         for (let k = 0; k < innerLength; k++) {
             outputArray.push([]);
         }
         for (let i = 0; i < mainArray.length; i++) {
             for (let j = 0; j < innerLength; j++) {
                 outputArray[j].push(mainArray[i][j]);
             }
         }
         let emptyArray = [];
         for (const i of outputArray) {
             emptyArray.push({
                 label: "harsh",
                 data: i,
                 fill: false,
                 borderColor: "rgb(75, 192, 192)",
                 tension: 0.1
             });
         }
         SetChartMainDataSets(emptyArray);
     };

    const handleShowChart = (event) => {
        debugger;
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            let chartDataWithLables;
            let updatedData;
            let arrayData = [];
            const innerLength = jsonData[0].length;

            for (let i = 1; i < jsonData.length; i++) {
                chartDataWithLables = Object.values(jsonData);
                updatedData = chartDataWithLables.slice(1, jsonData.length);
                for (let j = 0; j < innerLength.length; j++) {
                    arrayData.splice();
                }
            }

            let chartValues;
            chartValues = Object.values(jsonData[0]);
            setChartLable(chartValues);
            setChartData(updatedData);
            setCustomize(true);
        };
        reader.readAsArrayBuffer(file);
    };
    
    useEffect(() => {
        convertArray()
    }, [chartData]);

    const scales = {
        x: {
            beginAtZero: true
        },
        y: {
            beginAtZero: true
        }
    };
    const scaleShow = chartDataParam == "line" ? scales : "";
    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data = {
        labels,
        datasets: chartMainDataSets
    };
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scaleShow
    };

    const dispatch = useAppDispatch();
    const handleCustomize = () => {
        const chartData = {
            data,
            options,
            chartDataParam,
            chartMainDataSets
        };
        dispatch(setChartDataAction(chartData));
        navigate("/create/pie-create/edit");
    };
    return (
        <>
            <div className="container uploadSection">
                <div className="row w-100 gap-3">
                    <div className="col-8">
                        <div className="d-flex align-items-center justify-content-between pe-5 mt-4 mb-2">
                            <button
                                className={`globallightshadowBtn px-4`}
                                onClick={() => {
                                    const table = document.getElementById("tabeller");
                                    const wb = XLSX.utils.table_to_book(table);
                                    XLSX.writeFile(wb, "SheetJSIntro.xlsx");
                                }}
                            >
                                <b>
                                    <FiDownload
                                        style={{
                                            marginBottom: "3px",
                                            fontSize: "18px",
                                            marginRight: "2px"
                                        }}
                                    />
                                    Download Sample Excel
                                </b>
                            </button>
                            <p className="mb-0">or</p>
                            {/* download */}

                            <input
                                type="file"
                                className="ExcelUPloadInput"
                                onChange={(e) => {
                                    handleShowChart(e);
                                    handleShowExcel(e);
                                }}
                            />
                        </div>
                        <div className="pt-4">
                            <div dangerouslySetInnerHTML={{ __html }} />
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-end justify-content-center pb-2">
                        <div className="skeleton d-flex align-items-center justify-content-evenly flex-column py-4 px-5">
                            <Chart type={chartDataParam} options={options} data={data} />
                            {customize ? (
                                <button className="home-pagebtn mt-3" onClick={handleCustomize}>
                                    Customize Look
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PieChartLogic;
