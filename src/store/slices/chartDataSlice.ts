import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface chartData {
    // chartDataParam: string;
    // chartMainDataSets: any[];
    // data: {};
    // options: {};
    chartData : []
}

// Define the initial state using that type
const initialState: chartData = {
    // chartDataParam: "",
    // chartMainDataSets: [],
    // data: {},
    // options: {}
    chartData : []
};

const chartDataSlice = createSlice({
    name: "chartData",
    initialState,
    reducers: {
        setChartData: (state, action) => {
            // const { data,options } =  action.payload;
            // state.data = data;
            // state.options = options;
            console.log(action.payload);
            
            state.chartData = action.payload;
            // state.chartDataParam = chartDataParam;
            // state.chartMainDataSets = chartMainDataSets;
            // state.data = data;
            // state.options = options;
        }
    }
});

export const { setChartData } = chartDataSlice.actions;

export default chartDataSlice.reducer;

export const selectChartData = (state: RootState) => state.chartData.chartData;
