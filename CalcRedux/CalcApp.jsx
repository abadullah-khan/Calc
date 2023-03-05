import React from "react";
import { Provider } from "react-redux";
import { store } from "./Slice/store";
import { Calc } from "./Calc";

export const CalcApp = () => {
  return (
    <>
      <Provider store={store}>
        <Calc />
      </Provider>
    </>
  );
};
