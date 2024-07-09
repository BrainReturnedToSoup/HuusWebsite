import { createSlice } from "@reduxjs/toolkit";

const deviceWidthSlice = createSlice({
  name: "deviceWidth",

  initialState: {
    value: window.innerWidth,
  },

  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default deviceWidthSlice;
