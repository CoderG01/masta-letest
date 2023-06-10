import React from "react";
import { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getElementAtEvent, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DynemicChart = (props) => {
  const [color, setNewColor] = useState();
  const [bg, setBg] = useState("/sky.jpeg");

  const chartRef = useRef();

  let Bcolor = ["red", "blue", "green", "orange"];

  let datasetIndexPoint;

  const onClick = (event) => {
    console.log('yeye');
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      datasetIndexPoint = getElementAtEvent(chartRef.current, event)[0].index;
      Bcolor.splice(datasetIndexPoint, 1);
      Bcolor.splice(datasetIndexPoint, 0, color);
    }
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "thir"],
    datasets: [
      {
        label: "Sales",
        data: [3, 6, 9, 10],
        borderColor: "white",
        backgroundColor: Bcolor,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "black", // not 'fontColor:' anymore
          // fontSize: 18  // not 'fontSize:' anymore
          font: {
            size: 10,
            weight: "bold",
            // 'size' now within object 'font {}'
          },
        },
      },
    },
  };

  const imageSrc = (e) => {
    // console.log(e.target.src);
    setBg(e.target.src);
  };

  const image = new Image();
  image.src = bg;

  const gaugeBackground = {
    id: "customCanvasBackgroundImage",
    beforeDraw: (chart) => {
      if (image.complete) {
        const ctx = chart.ctx;
        const { top, left, width, height } = chart.chartArea;
        const x = left + width / 2 - image.width / 2;
        const y = top + height / 2 - image.height / 2;
        ctx.drawImage(image, x, y);
      } else {
        image.onload = () => chart.draw();
      }
    },
  };

  const handlePrint = () => {
    window.print();
  };
  const hideSideBar = () => {
    const sidebar = document.getElementsByClassName("editsidebar");
    console.log(sidebar);
    sidebar.style.display = "none";
    props.data;
  };

  const handleGaugeBackground = () => {
    // id: "customCanvasBackgroundImage",
    // beforeDraw: (chart) => {
    //   if (image.complete) {
    //     const ctx = chart.ctx;
    //     const { top, left, width, height } = chart.chartArea;
    //     const x = left + width / 2 - image.width / 2;
    //     const y = top + height / 2 - image.height / 2;
    //     ctx.drawImage(image, x, y);
    //   } else {
    //     image.onload = () => chart.draw();
    //   }
    // },
  };

  useEffect(() => {
    handleGaugeBackground();
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center w-100">
        <div
          className="piechartCard px-4 py-4 py-md-5 d-flex align-items-center justify-content-center"
          style={{
            height: "421px",
            width: "400px",
            background: `url(${bg}) center center/cover`,
          }}
        >
          <Pie
            data={data}
            options={options}
            onClick={onClick}
            ref={chartRef}
            // plugins={[gaugeBackground]}
          ></Pie>
        </div>
        <div className="d-flex align-items-start justify-content-start h-100 exportBtnWrapper">
          <button
            className="py-2 px-4 fs-6 bg-dark rounded text-white d-flex align-items-center ms-5"
            onClick={handlePrint}
          >
            export
          </button>
        </div>
        {/* side bar start */}
        <div
          style={{
            width: "400px",
            height: "70vh",
            top: "50%",
            left: "15%",
            transform: "translate(-50%,-50%)",
            padding: "20px",
            transition: "0.3s all",
          }}
          className="piechartCard px-3 py-4 py-md-5 position-absolute editsidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            className="bi bi-x-octagon-fill position-absolute"
            viewBox="0 0 16 16"
            style={{ top: "17px", right: "17px", fontSize: "30px" }}
            onClick={() => hideSideBar()}
          >
            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
          </svg>
          <h5>Choose Color</h5>
          <div className="py-3 px-3 d-flex gap-4">
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#ff0000"
              onChange={(e) => setNewColor(e.target.value)}
            />
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#a6b0a1"
              onChange={(e) => setNewColor(e.target.value)}
            />
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#97595b"
              onChange={(e) => setNewColor(e.target.value)}
            />
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#2e1a21"
              onChange={(e) => setNewColor(e.target.value)}
            />
          </div>
          <div className="py-3">
            <h5>Choose Image</h5>
            <div className="d-flex py-3 px-3 flex-wrap gap-2">
              <img
                src="https://images.pexels.com/photos/6160167/pexels-photo-6160167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="sky char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
              <img
                src="https://cdn.pixabay.com/photo/2023/04/30/14/52/countryside-7960674_960_720.jpg"
                alt="space char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                alt="sky2 char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
              <img
                src="https://cdn.pixabay.com/photo/2023/05/02/17/33/blue-tit-7965696_960_720.jpg"
                alt="sky3 char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
            </div>
          </div>
        </div>
        {/* sidebar end */}
      </div>
    </React.Fragment>
  );
};

export default DynemicChart;
