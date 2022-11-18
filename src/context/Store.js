import { configureStore } from "@reduxjs/toolkit";
import VehiReducer from "./Vehicle-Redux";
const store = configureStore({
  reducer: { vehi: VehiReducer },
});

export default store;
