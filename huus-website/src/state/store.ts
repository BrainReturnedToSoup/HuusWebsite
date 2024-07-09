import { configureStore } from "@reduxjs/toolkit";

import deviceWidthSlice from "./slices/deviceWidth";

const store = configureStore({
  reducer: {
    deviceWidth: deviceWidthSlice.reducer,
  },
});

const selectors = {
  deviceWidth: () => {
    return store.getState().deviceWidth.width;
  },
};

export { store, selectors };
