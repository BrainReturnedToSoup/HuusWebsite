import { configureStore } from "@reduxjs/toolkit";

import deviceScreenSlice from "./slices/deviceScreen";
import mobileNavSlice from "./slices/mobileNav";
import pricingSlice from "./slices/pricing";
import servicesSlice from "./slices/services";

const store = configureStore({
  reducer: {
    deviceScreen: deviceScreenSlice.reducer,
    mobileNav: mobileNavSlice.reducer,
    pricing: pricingSlice.reducer,
    services: servicesSlice.reducer,
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

  pricing: {
    positionY: (): number => {
      return store.getState().pricing.positionY;
    },
  },

  services: {
    positionY: (): number => {
      return store.getState().services.positionY;
    },
  },
};

export type RootState = ReturnType<typeof store.getState>;

export { store, selectors };
