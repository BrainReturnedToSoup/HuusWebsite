import { configureStore } from "@reduxjs/toolkit";

import deviceScreenSlice from "./slices/deviceWidth";

const store = configureStore({
  reducer: {
    deviceScreen: deviceScreenSlice.reducer,
  },
});

const selectors = {
  deviceScreen: {
    width: (): number => {
      return store.getState().deviceScreen.width;
    },
  },
};

export type RootState = ReturnType<typeof store.getState>;
export { store, selectors };
