import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export enum userTypes {
    NewUser = "newuser",
    User = "USER",
    Company = "COMPANY"
}

// Define a type for the slice state
interface authState {
    user: userTypes;
    token: null | string;
}

// Define the initial state using that type
const initialState: authState = {
    user: userTypes.NewUser,
    token: import.meta.env.VITE_APP_TOKEN ?? "",
   
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { userType, access_token } = action.payload;
            state.user = userType;
            state.token = access_token;
        },
        logOut: (state) => {
            state.user = userTypes.NewUser;
            state.token = null;
        },
      
    }
});

export const { setCredentials, logOut,  } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
