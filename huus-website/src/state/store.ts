import { configureStore } from "@reduxjs/toolkit";

import deviceScreenSlice from "./slices/deviceScreen";
import mobileNavButtonMenuSlice from "./slices/mobileNavButtonMenu";

const store = configureStore({
  reducer: {
    deviceScreen: deviceScreenSlice.reducer,
    mobileNavButtonMenu: mobileNavButtonMenuSlice.reducer,
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

  mobileNavButtonMenu: {
    open: (): boolean => {
      return store.getState().mobileNavButtonMenu.open;
    },
  },
};

export type RootState = ReturnType<typeof store.getState>;

export { store, selectors };
