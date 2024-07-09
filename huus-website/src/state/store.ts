import { configureStore } from "@reduxjs/toolkit";

import deviceScreenSlice from "./slices/deviceScreen";

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

    position: (): number => {
      return store.getState().deviceScreen.position;
    },
  },
};

export type RootState = ReturnType<typeof store.getState>;

export { store, selectors };
