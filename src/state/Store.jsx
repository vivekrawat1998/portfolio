
import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./Menuslice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
