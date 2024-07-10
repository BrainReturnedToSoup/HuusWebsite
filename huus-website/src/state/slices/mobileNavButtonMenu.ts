import { createSlice } from "@reduxjs/toolkit";

const mobileNavButtonMenuSlice = createSlice({
  name: "mobileNavButtonMenu",

  initialState: {
    open: false,
    toggleDisabled: false,
  },

  reducers: {
    setOpenState: (state, action): void => {
      state.open = action.payload;
    },

    setToggleDisabledState: (state, action): void => {
      state.toggleDisabled = action.payload;
    },
  },
});

export default mobileNavButtonMenuSlice;
