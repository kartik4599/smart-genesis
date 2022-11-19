import { configureStore } from "@reduxjs/toolkit";
import VehiReducer from "./Vehicle-Redux";
import SingleRedux from "./Single-Redux";

const store = configureStore({
  reducer: { vehi: VehiReducer, single: SingleRedux },
});

export default store;
