import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTransparent: true,
  transition: true,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    enableTransparentHeader: (state) => {
      state.isTransparent = true;
    },
    disableTransparentHeader: (state) => {
      state.isTransparent = false;
    },
    setTransparentHeader: (state, action) => {
      state.isTransparent = action.payload;
    },
    setTransition: (state, action) => {
      state.transition = action.payload;
    },
  },
});

export const {
  enableTransparentHeader,
  disableTransparentHeader,
  setTransparentHeader,
  setTransition,
} = headerSlice.actions;
export default headerSlice.reducer;
