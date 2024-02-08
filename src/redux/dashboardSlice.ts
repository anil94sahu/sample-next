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
    },
    edit: (state, action: PayloadAction<IDashboardState>) => {

    } 
    ,
    update: (state, action: PayloadAction<key, data>) => {
      const index = state.dashboard.findIndex(ele => ele.key ===action.payload.key);    
      const newDashboard = [...state.dashboard]; 
      newDashboard[index] = action.payload;                                                                 
      return { 
        ...state, //copying the orignal state
        dashboard: newDashboard, //reassingning todos to new array
       }
    },
    deleteById: (state, action: PayloadAction<boolean>) => {
      state.dashboard = state.dashboard.filter(ele => ele.key !== action.payload);
    },
  },
});

export const { setDashboardState, create, update, deleteById } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;