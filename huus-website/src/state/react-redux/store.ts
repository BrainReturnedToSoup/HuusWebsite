import { configureStore } from "@reduxjs/toolkit";

import { appWindowSlice } from "./slices/app-window/appWindow";
import { mobileNavSlice } from "./slices/mobileNav";
import { contactFormSlice } from "./slices/contact-form/contactForm";
import { footerSlice } from "./slices/footer";

const appStore = configureStore({
  reducer: {
    appWindow: appWindowSlice.reducer,
    mobileNav: mobileNavSlice.reducer,
    contactForm: contactFormSlice.reducer,
    footer: footerSlice.reducer,
  },
});

export type AppStore = typeof appStore;

export type AppStoreUnsubscribe = ReturnType<typeof appStore.subscribe>;

export type AppStoreRootState = ReturnType<typeof appStore.getState>;

export { appStore };
