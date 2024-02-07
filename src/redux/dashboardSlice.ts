import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dashboardData from "../constant/dashboardData";
export interface IDashboardState {
    productName:string,
    color: string,
    category: string,
    price: string
}

const initialState: IDashboardState[] = dashboardData;

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardState: (state, action: PayloadAction<boolean>) => {
      state.dashboardState = action.payload;
    },
  },
});

export const { setDashboardState } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;