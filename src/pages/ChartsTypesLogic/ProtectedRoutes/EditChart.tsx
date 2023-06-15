// hooks
import React, { createContext, useEffect, useRef, useState } from "react";

// other library
import ChartDataLabels from "chartjs-plugin-datalabels";
import html2canvas from "html2canvas";

// css
import "../../../assets/css/EditChart.css";
import ShadowLightBtn from "../../../component/ShadowLightBtn";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/Ri";
import { AiOutlineCloudSync } from "react-icons/Ai";

// component
import DynemicColors from "../../../component/Editchart/DynemicColors";
import Images from "../../../component/Editchart/Images";
import Text from "../../../component/Editchart/Text";
import SearchBar from "../../../component/SearchBar";
import Pattern from "../../../component/Editchart/Pattern";
import Flip from "../../../component/Editchart/Flip";
import Transparency from "../../../component/Editchart/Transparency";
import Rotate from "../../../component/Editchart/Rotate";

// chartjs
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement,
//     BarElement,
//     registerables,
//     TimeScale,
//     ChartOptions
// } from "chart.js";
// import { Chart } from "react-chartjs-2";
import { selectChartData } from "../../../store/slices/chartDataSlice";
import { useAppSelector } from "../../../store/hooks";
// ChartJS.register(
//     ArcElement,
//     LinearScale,
//     CategoryScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Legend,
//     Tooltip,
//     ChartDataLabels,
//     Title,
//     ...registerables,
//     TimeScale
// );
export const GlobalChartBg = createContext<any>(null);
// chart
import {
    Chart,
    LineController,
    CategoryScale,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    ArcElement
} from "chart.js";

// Register the required components
Chart.register(LineController, CategoryScale, LineElement, PointElement, LinearScale, Title, ArcElement);

const EditChart = () => {
    // setting values of edit modes
    const [shapePath, setShapePath] = useState<any>("");
    const [ShapteRotate, setShapeRotate] = useState<number>(0);
    const [fontFamily, setfontFamily] = useState<boolean>(false);
    const [isBold, setisBold] = useState<boolean>(false);
    const [count, SetCount] = useState<number>(13);
    const [flipChartY, setflipChartY] = useState<any>("0");
    const [chartrotate, setchartRotate] = useState<any>("0");
    const [chartopacity, setopacity] = useState<number>(1);
    const [randomColorArray, setRandomColorArray] = useState([]);
    const canvasRef = useRef(null);
    const chartData = useAppSelector(selectChartData);
    const [chartDatas, setChartdata] = chartData;

    // settingupchartBg
    const [chartBackground, Setchartbackground] = useState();

    // getting colors
    const [chartBgColor, SetChartBgColor] = useState();
    const [linearGradient, SetlinearGradient] = useState();

    const [chartClass, setChartClass] = useState();
    const [colorValueArray, setcolorValueArray] = useState<any>([]);

    // let ChartColorlength = chartData.data.datasets[0].data.length
    // const generateRandomColorArray = () => {
    //     const newArray = [];
    //     for (let i = 0; i < ChartColorlength; i++) {
    //         const randomColor = getRandomColor(); // Generate a random color
    //         newArray.push(randomColor);
    //     }
    //     setcolorValueArray(newArray);
    // };

    // const getRandomColor = () => {
    //     const letters = "0123456789ABCDEF";
    //     let color = "#";
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // };
    // useEffect(() => {
    //     generateRandomColorArray()
    // },[])
    // const labels = ["January", "February", "March", "April", "May", "June", "July"];

    // chart data
    console.log("editchart :", chartData);
    // const scales = {
    //     x: {
    //         beginAtZero: true
    //     },
    //     y: {
    //         beginAtZero: true
    //     }
    // };

    // const scaleShow = chartData.chartDataParam == "line" ? scales : "";
    // const data = {
    //     // labels: chartData.data.labels,
    //     datasets: [
    //         {
    //             label: "My First Dataset",
    //             data: [65, 59, 90, 81, 56, 55, 40],
    //             fill: true,
    //             backgroundColor: "rgba(255, 99, 132, 0.2)",
    //             borderColor: "rgb(255, 99, 132)",
    //             pointBackgroundColor: "rgb(255, 99, 132)",
    //             pointBorderColor: "#fff",
    //             pointHoverBackgroundColor: "#fff",
    //             pointHoverBorderColor: "rgb(255, 99, 132)"
    //         },
    //         {
    //             label: "My Second Dataset",
    //             data: [28, 48, 40, 19, 96, 27, 100],
    //             fill: true,
    //             backgroundColor: "rgba(54, 162, 235, 0.2)",
    //             borderColor: "rgb(54, 162, 235)",
    //             pointBackgroundColor: "rgb(54, 162, 235)",
    //             pointBorderColor: "#fff",
    //             pointHoverBackgroundColor: "#fff",
    //             pointHoverBorderColor: "rgb(54, 162, 235)"
    //         }
    //     ]
    // };

    useEffect(() => {
        // chartData.data.datasets[0].backgroundColor = colorValueArray
    }, [colorValueArray]);

    // const options: any = {
    //     plugins: {
    //         datalabels: {
    //             labels: {
    //                 value: {
    //                     color: ["black"],
    //                     font: {
    //                         weight: isBold ? "bolder" : "normal",
    //                         size: count,
    //                         family: ["Helvetica", "sans-serif"],
    //                         // style: "itlic"
    //                     },
    //                     family: fontFamily
    //                 }
    //             },
    //             formatter: (value: any) => {
    //                 return value + "%";
    //             }
    //         },
    //         legend: {
    //             display: false
    //         }
    //     },
    //     scaleShow
    // };

    const DownloadChart = async () => {
        // const element = document.getElementById("CanvasWrapper") as HTMLElement;
        // let canvas = await html2canvas(element),
        //     data = canvas.toDataURL("image/jpg"),
        //     link = document.createElement("a");
        // link.href = data;
        // link.download = "downloaded-image.jpg";
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    };
    const style = {
        opacity: chartopacity,
        transform: `rotate(${chartrotate}deg) rotateY(${flipChartY}deg)`
    };

    const [chartIsReady, setChartIsReady] = useState(true);

    // useEffect(() => {
    //     if (chartData && Object.keys(chartData).length > 0) {
    //         if (chartData?.data) {
    //             setDynemicData(chartData?.data?.datasets);
    //             console.log("dynemic data : ", chartData?.data?.datasets);

    //             setChartIsReady(true);
    //         }
    //     }
    // }, [chartData]);

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
        // const scaleShow = chartType == "line" && chartType == "bar" ? scales : "";
        // console.log(chartType);
        // Create the chart instance

        const chart = new Chart(ctx, {
            type: "doughnut", // Specify the chart type (e.g., line, bar, pie)
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

            options: {
                plugins: {
                    datalabels: {
                        labels: {
                            // value: {
                            //     color: ["black"],
                            //     font: {
                            //         weight: isBold ? "bolder" : "normal",
                            //         size: count,
                            //         family: ["Helvetica", "sans-serif"],
                            //         // style: "itlic"
                            //     },
                            //     family: fontFamily
                            // }
                        },
                        formatter: (value: any) => {
                            return value + "%";
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                // scaleShow
            }
        });

        // Optionally, you can update the chart data or options dynamically
        chart.data.datasets[0].data = [30, 40, 50, 60, 70, 80];
        chart.type = chartData.type;
        chart.options = chartData.option;
        chart.update();

        // console.log("data settede : ", chartMainDataSets);
        // chart.data.datasets = chartMainDataSets;
        // chart.options
        chart.update();

        // Cleanup the chart when the component unmounts
        return () => {
            chart.destroy();
        };
    }, [chartData]);
    return (
        <>
            {chartIsReady && (
                <GlobalChartBg.Provider
                    value={{
                        Setchartbackground,
                        SetChartBgColor,
                        SetlinearGradient,
                        //   data,
                        setopacity,
                        setchartRotate,
                        chartrotate,
                        chartopacity,
                        flipChartY,
                        setflipChartY,
                        count,
                        SetCount,
                        isBold,
                        setisBold,
                        fontFamily,
                        setfontFamily,
                        setShapePath,
                        ShapteRotate,
                        setShapeRotate,
                        colorValueArray,
                        setcolorValueArray
                    }}
                >
                    <div className="editChartWrapper">
                        <div className="editChartContainer position-relative">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Colours">
                                <Row className="ChartEditRow">
                                    {/* for pc  */}
                                    <Col className="col-12 col-xxl-3 d-none d-xxl-block">
                                        <div className="editSidebar">
                                            <div className="pt-5 ps-5">
                                                <SearchBar pname={"Search by colour or code"} />
                                            </div>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Colours">
                                                    <DynemicColors
                                                        colorValueArray={colorValueArray}
                                                        setcolorValueArray={setcolorValueArray}
                                                    />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Text">
                                                    <Text />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Image">
                                                    <Images />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Pattern">
                                                    <Pattern />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Rotate">
                                                    <Rotate />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Transparency">
                                                    <Transparency />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Flip">
                                                    <Flip />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </div>
                                    </Col>
                                    <Col className="col-12 col-xxl-9">
                                        <div className="editchartnavbar d-flex align-items-center">
                                            <div className="d-flex justify-content-between w-100 px-4">
                                                <Nav variant="pills" className="flex-row">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Colours">Colours</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Text">Text</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Image">Image</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Pattern">Pattern</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Rotate">Rotate</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Transparency">Transparency</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Flip">Flip</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link
                                                            eventKey="Back"
                                                            className="d-flex gap-3 align-items-center noEndLine h-100"
                                                        >
                                                            <RiArrowGoBackLine />
                                                            <RiArrowGoForwardLine />
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <div className="d-flex">
                                                    <div className="uploadDriveBtn h-100 me-3 d-flex align-items-center">
                                                        <AiOutlineCloudSync fontSize={"26px"} />
                                                    </div>
                                                    <ShadowLightBtn
                                                        px={"4"}
                                                        btnName={"Generate Chart"}
                                                        data={DownloadChart}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100 d-flex align-items-center justify-content-center h-100 mainChart">
                                            <div
                                                className={
                                                    "editChartCanvasWrapper  d-flex align-items-center justify-content-center"
                                                }
                                                style={{
                                                    background: chartBackground
                                                        ? `url(${chartBackground}) center center/cover`
                                                        : `${"white"}`,
                                                    clipPath: `polygon(${shapePath})`,
                                                    transform: `rotate(${ShapteRotate}deg)`
                                                }}
                                                id="CanvasWrapper"
                                            >
                                                {/* <Chart
                                                    type={chartData.chartDataParam}
                                                    options={options}
                                                    className={`${
                                                        chartData.chartDataParam == "line" || chartData.chartDataParam == "bar"
                                                            ? "canvasLarge"
                                                            : " "
                                                    } `}
                                                    data={data}
                                                    style={style}
                                                    id={"pieChart"}
                                                /> */}
                                                <canvas id="myChart" ref={canvasRef}></canvas>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>
                </GlobalChartBg.Provider>
            )}
        </>
    );
};

export default EditChart;
