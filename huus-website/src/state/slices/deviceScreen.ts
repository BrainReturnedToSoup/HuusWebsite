import { createSlice } from "@reduxjs/toolkit";

const deviceScreenSlice = createSlice({
  name: "deviceScreen",

  initialState: {
    width: window.innerWidth,
    position: window.screenTop,
  },

  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
    },

    setPosition: (state, action) => {
      state.position = action.payload;
    },
  },
});

export default deviceScreenSlice;
