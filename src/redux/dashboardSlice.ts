import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dashboardData from "../constant/dashboardData";

export interface IDashboardState {
    productName:string,
    color: string,
    category: string,
    price: string
}
export interface IDashboard{
  dashboard: IDashboardState[]
}
const initialState :IDashboard = {dashboard: dashboardData};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardState: (state, action: PayloadAction<boolean>) => {
      state.dashboardState = action.payload;
    },
    create: (state, action: PayloadAction<IDashboardState>) => {
      action.payload['key'] = state.dashboard.length + 1;
      state.dashboard.push(action.payload);
    } 
    ,
    update: (state, action: PayloadAction<boolean>) => {
      state.dashboardState = action.payload;
    },
    deleteById: (state, action: PayloadAction<boolean>) => {
      state.dashboardState = action.payload;
    },
  },
});

export const { setDashboardState, create, update, deleteById } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;