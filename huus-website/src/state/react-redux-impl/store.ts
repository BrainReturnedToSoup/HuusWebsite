import { configureStore } from "@reduxjs/toolkit";

import { appWindowSlice } from "./slices/appWindow";
import { mobileNavSlice } from "./slices/mobileNav";
import { contactFormSlice } from "./slices/contactForm";

const store = configureStore({
  reducer: {
    appWindow: appWindowSlice.reducer,
    mobileNav: mobileNavSlice.reducer,
    contactForm: contactFormSlice.reducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export { store };
