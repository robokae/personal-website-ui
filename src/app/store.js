import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/headerSlice";
import hamburgerMenuReducer from "../features/hamburgerMenuSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    hamburgerMenu: hamburgerMenuReducer,
  },
});
