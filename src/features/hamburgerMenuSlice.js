import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
};

const hamburgerMenuSlice = createSlice({
  name: "hamburgerMenu",
  initialState,
  reducers: {
    display: (state) => {
      state.display = true;
    },
    hide: (state) => {
      state.display = false;
    },
    toggle: (state) => {
      state.display = !state.display;
    },
  },
});

export const { display, hide, toggle } = hamburgerMenuSlice.actions;
export default hamburgerMenuSlice.reducer;
