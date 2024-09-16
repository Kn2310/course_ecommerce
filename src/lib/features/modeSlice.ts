import { createSlice } from "@reduxjs/toolkit";

export interface modeState {
  mode: string
}

const initialState: modeState = {
  mode: "light",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
