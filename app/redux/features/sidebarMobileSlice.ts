"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface SidebarType {
  sidebar: boolean;
}

const initialState: SidebarType = {
  sidebar: false,
};

export const sidebarMobileSlice = createSlice({
  name: "mobile_sidebar",
  initialState,
  reducers: {
    setMobileSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    closeMobileSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export const { setMobileSidebar, closeMobileSidebar } =
  sidebarMobileSlice.actions;

export default sidebarMobileSlice.reducer;
