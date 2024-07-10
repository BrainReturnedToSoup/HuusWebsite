import { createSlice } from "@reduxjs/toolkit";

const mobileNavButtonMenuSlice = createSlice({
  name: "mobileNavButtonMenu",

  initialState: {
    open: false,
  },

  reducers: {
    setOpenState: (state, action) => {
      state.open = action.payload;
    },
  },
});

export default mobileNavButtonMenuSlice;
