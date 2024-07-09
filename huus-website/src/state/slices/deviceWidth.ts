import { createSlice } from "@reduxjs/toolkit";
import getReponsiveSizeWidth from "../../lib/getResponsiveSize";

const deviceWidthSlice = createSlice({
  name: "deviceWidth",

  initialState: {
    width: window.innerWidth,
    responsiveSizeWidth: getReponsiveSizeWidth(window.innerWidth),
  },

  reducers: {
    setScreenWidth: (state, action) => {
      state.width = action.payload;
    },

    setResponsiveScreenSize: (state, action) => {
      state.responsiveSizeWidth = action.payload;
    },
  },
});

export default deviceWidthSlice;
