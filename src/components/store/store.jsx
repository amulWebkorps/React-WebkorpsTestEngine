import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "./RegisterSlice";
const store = configureStore({
  reducer: {
      register:RegisterSlice,
  },
});

export default store;


