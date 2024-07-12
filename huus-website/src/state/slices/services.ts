import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
  name: "services",

  initialState: {
    positionY: 0,
  },

  reducers: {
    setPositionY: (state, action) => {
      state.positionY = action.payload;
    },
  },
});

export default servicesSlice;
