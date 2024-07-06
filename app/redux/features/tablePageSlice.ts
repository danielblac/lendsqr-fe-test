"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface pageType {
  page: number;
}

const initialState: pageType = {
  page: 0,
};

export const tablePageSlice = createSlice({
  name: "table_no",
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPageNumber } = tablePageSlice.actions;

export default tablePageSlice.reducer;
