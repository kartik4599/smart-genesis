import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  AvgSpeed: 0,
  engine: "",
  fuel: "",
  key: "",
  name: "",
  speed: 0,
  temperature: 0,
};

const singleSlice = createSlice({
  name: "single",
  initialState,
  reducers: {
    replace: (state, action) => {
      console.log(action.payload, current(state));
      state.AvgSpeed = action.payload.AvgSpeed;
      state.engine = action.payload.engine;
      state.fuel = action.payload.fuel;
      state.key = action.payload.key;
      state.name = action.payload.name;
      state.temperature = action.payload.temperature;
      console.log(current(state));
    },
  },
});

export const singleAction = singleSlice.actions;

export default singleSlice.reducer;
