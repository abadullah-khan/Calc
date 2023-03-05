import { configureStore } from "@reduxjs/toolkit";
import calcReducers from "./calcSlice";

export const store = configureStore({
  reducer: {
    calc: calcReducers,
  },
});
