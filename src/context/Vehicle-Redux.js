import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { arr: [] };

const VehicleSlice = createSlice({
  name: "Vehicle",
  initialState,
  reducers: {
    add: (state, action) => {
      state.arr = action.payload;
      console.log(state.arr);
    },
    addOne: (state, action) => {
      const newArr = [action.payload, ...current(state.arr)];
      console.log(newArr);
      state.arr = newArr;
    },
    remove: (state, action) => {
      console.log(current(state.arr));
      const newArr = current(state.arr).filter(
        (ele) => ele.key !== action.payload
      );
      console.log(newArr);
      state.arr = newArr;
    },
  },
});

export const VehiAction = VehicleSlice.actions;

export default VehicleSlice.reducer;
