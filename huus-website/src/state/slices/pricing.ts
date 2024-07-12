import { createSlice } from "@reduxjs/toolkit";

const pricingSlice = createSlice({
  name: "pricing",

  initialState: {
    positionY: 0,
  },

  reducers: {
    setPositionY: (state, action) => {
      state.positionY = action.payload;
    },
  },
});

export default pricingSlice;
