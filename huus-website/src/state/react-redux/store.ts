import { configureStore } from "@reduxjs/toolkit";

import { appWindowSlice } from "./slices/app-window/appWindow";
import { mobileNavSlice } from "./slices/mobile-nav/mobileNav";
import { contactFormSlice } from "./slices/contact-form/contactForm";
import { serviceOfferingsSetsSlice } from "./slices/service-offerings/serviceOfferings";

const appStore = configureStore({
  reducer: {
    appWindow: appWindowSlice.reducer,
    mobileNav: mobileNavSlice.reducer,
    contactForm: contactFormSlice.reducer,
    serviceOfferingsSetsSlice: serviceOfferingsSetsSlice.reducer,
  },
});

export type AppStore = typeof appStore;

export type AppStoreUnsubscribe = ReturnType<typeof appStore.subscribe>;

export type AppStoreRootState = ReturnType<typeof appStore.getState>;

export { appStore };
