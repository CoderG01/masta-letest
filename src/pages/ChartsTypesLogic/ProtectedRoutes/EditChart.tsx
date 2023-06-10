import React, { createContext, useEffect, useRef, useState } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "../../../assets/css/EditChart.css";
import ShadowLightBtn from "../../../component/ShadowLightBtn";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/Ri";
import { AiOutlineCloudSync } from "react-icons/Ai";
import DynemicColors from "../../../component/Editchart/DynemicColors";
import Images from "../../../component/Editchart/Images";
import Text from "../../../component/Editchart/Text";
import SearchBar from "../../../component/SearchBar";
import Pattern from "../../../component/Editchart/Pattern";
import Flip from "../../../component/Editchart/Flip";
import Transparency from "../../../component/Editchart/Transparency";
import Rotate from "../../../component/Editchart/Rotate";
import html2canvas from "html2canvas";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useAppSelector } from "../../../store/hooks";
import { selectChartData } from "../../../store/slices/chartDataSlice";
ChartJS.register(ArcElement, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);
ChartJS.register(ChartDataLabels);

export const GlobalChartBg = createContext<any>(null);

const EditChart = () => {
    const [shapePath, setShapePath] = useState<any>();
    const [ShapteRotate, setShapeRotate] = useState<number>(0);
    const [fontFamily, setfontFamily] = useState<boolean>(false);
    const [isBold, setisBold] = useState<boolean>(false);
    const [count, SetCount] = useState<number>(13);

    const chartData = useAppSelector(selectChartData);

    console.log(chartData);

    const [flipChartY, setflipChartY] = useState<any>("0");
    const [chartrotate, setchartRotate] = useState<any>("0");
    const [chartopacity, setopacity] = useState<number>(1);
    const [dynemicData, setDynemicData] = useState();

    // settingupchartBg
    const [chartBackground, Setchartbackground] = useState();

    // getting colors
    const [chartBgColor, SetChartBgColor] = useState();
    const [linearGradient, SetlinearGradient] = useState();

    //   letest data come from edit
    // const chartDataParam = chartData.chartDataParam;
    const [chartClass, setChartClass] = useState();
    const [colorValueArray, setcolorValueArray] = useState<any>([]);

    // const generateRandomColorArray = () => {
    //     const newArray = [];
    //     for (let i = 0; i < 7; i++) {
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
    // setChartClass(chartDataParam)
    const labels = ["January", "February", "March", "April", "May", "June", "July"];

    // chart data
    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                hoverOffset: 4
            }
        ]
    };
    const options: any = {
        plugins: {
            datalabels: {
                labels: {
                    value: {
                        color: ["black"],
                        font: {
                            weight: isBold ? "bolder" : "normal",
                            size: count,
                            family: ["Helvetica", "sans-serif"],
                            style: "itlic"
                        },
                        family: fontFamily
                    }
                },
                formatter: (value: any) => {
                    return value + "%";
                }
            },
            legend: {
                display: false
            }
        }
        // scaleShow
    };

    const DownloadChart = async () => {
        const element = document.getElementById("CanvasWrapper") as HTMLElement;
        let canvas = await html2canvas(element),
            data = canvas.toDataURL("image/jpg"),
            link = document.createElement("a");
        link.href = data;
        link.download = "downloaded-image.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const style = {
        opacity: chartopacity,
        transform: `rotate(${chartrotate}deg) rotateY(${flipChartY}deg)`
    };

    const [chartIsReady, setChartIsReady] = useState(false);

    console.log('data : ',chartData);
    
    // useEffect(() => {
    //     if (chartData && Object.keys(chartData).length > 0) {
    //         if (chartData?.data) {
    //             setDynemicData(chartData?.data?.datasets);
    //             console.log("dynemic data : ", chartData?.data?.datasets);

    //             setChartIsReady(true);
    //         }
    //     }
    // }, [chartData]);

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
                                                    <DynemicColors />
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
                                                    type={chartDataParam}
                                                    options={options}
                                                    className={`${
                                                        chartClass == "line" || chartClass == "bar"
                                                            ? "canvasLarge"
                                                            : " "
                                                    } `}
                                                    data={chartData.data}
                                                    style={style}
                                                    id={"pieChart"}
                                                /> */}
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
