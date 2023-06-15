import React, { createContext, useEffect } from "react";
import { Chart, LineController, CategoryScale, LineElement, PointElement, LinearScale, Title } from "chart.js";

// Register the required components
Chart.register(LineController, CategoryScale, LineElement, PointElement, LinearScale, Title);

// css
import "../../../assets/css/EditChart.css";

const Yeye = () => {
    useEffect(() => {
        const ctx = document.getElementById("myChart").getContext("2d");

        // Create the chart instance
        const chart = new Chart(ctx, {
            type: "pie", // Specify the chart type (e.g., line, bar, pie)
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
                scales: {
                    x: {
                        beginAtZero: true // Start the x-axis at zero
                    },
                    y: {
                        beginAtZero: true // Start the y-axis at zero
                    }
                }
            }
        });

        // Optionally, you can update the chart data or options dynamically
        chart.data.datasets[0].data = [30, 40, 50, 60, 70, 80];
        chart.update();

        // Cleanup the chart when the component unmounts
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div>
            <h1>hey</h1>
            <div className="chartCanvas">
            <canvas id="myChart"></canvas>
            </div>
        </div>
    );
};

export default Yeye;
