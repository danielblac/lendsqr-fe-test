"use client";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { tablePageSlice } from "./features/tablePageSlice";
import { sidebarMobileSlice } from "./features/sidebarMobileSlice";

const store = configureStore({
  reducer: {
    pageNumber: tablePageSlice.reducer,
    mobileSidebar: sidebarMobileSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;
