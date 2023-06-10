import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface chartData {
    ChartData : any 
}

// Define the initial state using that type
const initialState : chartData = {
    ChartData: {

    }
};
const chartDataSlice = createSlice({
    name: "chartData",
    initialState,
    reducers: {
        setChartData: (state, action) => {
            console.log(action)
            state.ChartData = action.payload;
        }
    }
});

export const { setChartData } = chartDataSlice.actions;

export default chartDataSlice.reducer;

export const selectChartData = (state: RootState) => state.chartData;
