import { createSlice } from "@reduxjs/toolkit";
import getReponsiveSizeWidth from "../../lib/getResponsiveSize";

const deviceScreenSlice = createSlice({
  name: "deviceScreen",

  initialState: {
    width: window.innerWidth,
    widthRange: getReponsiveSizeWidth(window.innerWidth),
  },

  reducers: {
    setScreenWidth: (state, action) => {
      state.width = action.payload;
    },

    setWidthRange: (state, action) => {
      state.widthRange = action.payload;
    },
  },
});

export default deviceScreenSlice;
