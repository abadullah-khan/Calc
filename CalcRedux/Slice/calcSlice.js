import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calc",
  initialState: {
    inputtedVal: "",
  },
  reducers: {
    resultHandle(state) {
      // [action.payload.key] = action.payload.value;
      try {
        state.inputtedVal = eval(state.inputtedVal).toString();
      } catch {
        state.inputtedVal = "Error";
      }
      cleanFunc(state.inputtedVal);
    },
    btnClkHandle(state, action) {
      // return {
      // ...state,
      // };
      state.inputtedVal = state.inputtedVal.concat(action.payload.value);
    },
    inputChangeHandle(state, action) {
      // return {
      // ...state,
      // };
      state.inputtedVal = action.payload.value;
    },
    backSpaceHandle(state) {
      state.inputtedVal = state.inputtedVal.slice(
        0,
        state.inputtedVal.length - 1
      );
    },
  },
});
export const {
  btnClkHandle,
  inputChangeHandle,
  resultHandle,
  backSpaceHandle,
} = calcSlice.actions;
export const calcState = (state) => state.calc;
export default calcSlice.reducer;
const cleanFunc = (state) => {
  if (state === "Error") {
    setTimeout(() => {
      state = "";
    }, 2000);
  }
};
