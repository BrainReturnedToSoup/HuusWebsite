import { createSlice } from "@reduxjs/toolkit";

const navBarTransitionSlice = createSlice({
  name: "navBarTransition",

  initialState: {
    route: "",
    deviceType: "",
    currSection: "",
  },

  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload;
    },

    setDeviceType: (state, action) => {
      state.deviceType = action.payload;
    },

    setCurrSection: (state, action) => {
      state.currSection = action.payload;
    },
  },
});

export default navBarTransitionSlice;
