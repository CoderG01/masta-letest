import React, { useEffect, useRef, useState } from "react";

// css
import "../../../assets/css/ChartTypes.css";
import { useAppSelector } from "../../../store/hooks";
import { selectChartData } from "../../../store/slices/chartDataSlice";
// excel import
import * as XLSX from "xlsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setChartData as setChartDataAction } from "../../../store/slices/chartDataSlice";
import { FiDownload } from "react-icons/Fi";

// chart
import { Chart, LineController, CategoryScale, LineElement, PointElement, LinearScale, Title } from "chart.js";

// Register the required components
Chart.register(LineController, CategoryScale, LineElement, PointElement, LinearScale, Title);

const SecondPieChartLogic = () => {
    // hooks
    const chartData = useAppSelector(selectChartData);
    const navigate = useNavigate();
    const location = useLocation();
    const chartType = location.state.param;
    const [__html, setHTML] = React.useState("");
    const [chartDataSetsArray, setChartDataSetsArray] = useState([]);
    const [customize, setCustomize] = useState(false);
    const canvasRef = useRef(null);
    const [chartOptions, setChartOptions] = useState({
        plugins: {
            datalabels: {
                formatter: (value) => {
                    return value + "%";
                }
            },
            legend: {
                display: false
            }
        },
        scaleShow: ""
    });
    const [chartMainDataSets, SetChartMainDataSets] = useState([
        {
            label: "data",
            data: [],
            fill: false,
            // borderColor: "rgb(75, 192, 192)",
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)"
            ],
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)"
        }
    ]);
    const [allData, setAllData] = useState({
        type: chartType,
        data: chartMainDataSets,
        option: chartOptions
    });
    console.log("all data", allData);
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
    const convertArray = () => {
        const outputArray = [];
        const mainArray = chartDataSetsArray;
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
                tension: 0.1,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)"
                ],
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)"
            });
        }

        SetChartMainDataSets(emptyArray);
    };

    const handleShowChart = (event) => {
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
            const innerLength = jsonData[0]?.length;

            for (let i = 1; i < jsonData.length; i++) {
                chartDataWithLables = Object.values(jsonData);
                updatedData = chartDataWithLables.slice(1, jsonData.length);
                for (let j = 0; j < innerLength.length; j++) {
                    arrayData.push(updatedData[j].splice(i, 1)[0]);
                }
            }

            // let chartValues = Object.values(jsonData[0]);
            // setChartLable(chartValues);
            // setCustomize(true);
            setChartDataSetsArray(updatedData);
            setCustomize(true);
        };
        reader.readAsArrayBuffer(file);
    };

    useEffect(() => {
        convertArray();
    }, [chartDataSetsArray]);

    // chartjs logic
    // const state = {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    //     datasets: chartMainDataSets
    //     // datasets: chartDataSetsArray
    // };
    // const scales = {
    //     x: {
    //         beginAtZero: true
    //     },
    //     y: {
    //         beginAtZero: true
    //     }
    // };
    // const elements = {
    //     line: {
    //         borderWidth: 3
    //     }
    // };
    // const scaleShow = chartType == "line" ? scales : "";
    // const elementsShow = chartType == "radar" ? elements : "";

    // const options = {
    //     plugins: {
    //         legend: {
    //             display: false
    //         }
    //     },
    //     scaleShow,
    //     elementsShow
    // };

    const dispatch = useDispatch();
    const handleCustomize = () => {
        dispatch(setChartDataAction(chartMainDataSets));
        navigate("/create/pie-create/edit");
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const scales = {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        };
        const scaleShow = chartType == "line" && chartType == "bar" ? scales : "";
        console.log(chartType);
        // Create the chart instance
        const chart = new Chart(ctx, {
            type: chartType, // Specify the chart type (e.g., line, bar, pie)
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Array of labels for the x-axis
                datasets: [
                    {
                        label: "My Dataset", // Label for the dataset
                        data: [10, 20, 30, 40, 50, 60], // Array of data points for the y-axis
                        borderColor: "rgb(75, 192, 192)", // Color of the line
                        tension: 0.1, // Line tension (curvature)
                        fill: false // Whether to fill the area under the line
                    }
                ]
            },
            options: chartOptions
        });

        // Optionally, you can update the chart data or options dynamically
        chart.data.datasets[0].data = [30, 40, 50, 60, 70, 80];
        chart.update();

        console.log("data settede : ", chartMainDataSets);
        chart.data.datasets = chartMainDataSets;
        // console.log(`option : ${chart.options}`);
        // setOptions()
        // chart.options
        chart.update();

        setChartOptions((prevOptions) => ({
            ...prevOptions,
            scaleShow
        }));
        // Cleanup the chart when the component unmounts
        return () => {
            chart.destroy();
        };
    }, [chartMainDataSets]);

    useEffect(() => {}, [chartMainDataSets]);
    // console.log(data);
    return (
        <>
            <div className="secondPieChartLogic">
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
                                {" "}
                                Download Sample Excel
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
                            {/* <Chart type={chartDataParam} options={options} data={data} /> */}
                            {/* <div>
                                {chartType === "pie" ? (
                                    <Pie
                                        data={state}
                                        options={options}
                                        className={`canvas ${
                                            chartType == "line" || chartType == "bar" ? "canvasLarge" : " "
                                        }`}
                                    />
                                ) : (
                                    " "
                                )}

                                {chartType === "radar" ? (
                                    <Radar
                                        data={state}
                                        options={options}
                                        className={`canvas ${
                                            chartType == "line" || chartType == "bar" ? "canvasLarge" : " "
                                        }`}
                                    />
                                ) : (
                                    " "
                                )}
                                {chartType === "doughnut" ? (
                                    <Doughnut
                                        data={state}
                                        options={options}
                                        className={`canvas ${
                                            chartType == "line" || chartType == "bar" ? "canvasLarge" : " "
                                        }`}
                                    />
                                ) : (
                                    " "
                                )}
                                {chartType === "polarArea" ? (
                                    <PolarArea
                                        data={state}
                                        options={options}
                                        className={`canvas ${
                                            chartType == "line" || chartType == "bar" ? "canvasLarge" : " "
                                        }`}
                                    />
                                ) : (
                                    " "
                                )}

                                {chartType === "line" ? (
                                    <Line
                                        data={state}
                                        options={options}
                                        className={`canvas ${
                                            chartType == "line" || chartType == "bar" ? "canvasLarge" : " "
                                        }`}
                                    />
                                ) : (
                                    " "
                                )}
                                {chartType === "bar" ? (
                                    <Bar
                                        data={state}
                                        options={options}
                                        className={`canvas ${
                                            chartType == "line" || chartType == "bar" ? "canvasLarge" : " "
                                        }`}
                                    />
                                ) : (
                                    " "
                                )}
                            </div> */}
                            <div className="chartCanvas">
                                <canvas id="myChart" ref={canvasRef}></canvas>
                            </div>
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

export default SecondPieChartLogic;
