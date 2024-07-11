import { configureStore } from "@reduxjs/toolkit";

import deviceScreenSlice from "./slices/deviceScreen";
import mobileNavSlice from "./slices/mobileNav";

const store = configureStore({
  reducer: {
    deviceScreen: deviceScreenSlice.reducer,
    mobileNav: mobileNavSlice.reducer,
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

  mobileNav: {
    open: (): boolean => {
      return store.getState().mobileNav.open;
    },

    toggleDisabled: (): boolean => {
      return store.getState().mobileNav.toggleDisabled;
    },
  },
};

export type RootState = ReturnType<typeof store.getState>;

export { store, selectors };
