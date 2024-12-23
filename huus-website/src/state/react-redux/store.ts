import { configureStore } from "@reduxjs/toolkit";

import { appWindowSlice } from "./slices/app-window/appWindow";
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

export type AppStoreUnsubscribe = ReturnType<typeof store.subscribe>;

export type AppStoreRootState = ReturnType<typeof store.getState>;

export { store };
