

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import authSlice from "./authSlice";
import chartDataSlice from "./chartDataSlice";

const encryptor = encryptTransform({
    secretKey: import.meta.env.VITE_APP_SECRET_KEY,
    onError: function (error) {
        // Handle the error.
        console.error("encryptTransform", error);
    }
});
const persistConfig = {
    key: "root",
    version: 1, 
    storage,
    whitelist: [
        "auth",
        "chartData"
    ],
    // blacklist: ["auth"],
    // stateReconciler: hardSet,
    transforms: [encryptor]
};

export const rootReducer = combineReducers({
    auth: authSlice,
    chartData: chartDataSlice
});
export default persistReducer(persistConfig, rootReducer);