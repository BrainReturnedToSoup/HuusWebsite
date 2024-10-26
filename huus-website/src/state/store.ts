import { configureStore } from "@reduxjs/toolkit";

import deviceScreenSlice from "./slices/deviceScreen";
import mobileNavSlice from "./slices/mobileNav";
import contactFormSlice from "./slices/contactForm";

const store = configureStore({
  reducer: {
    deviceScreen: deviceScreenSlice.reducer,
    mobileNav: mobileNavSlice.reducer,
    contactForm: contactFormSlice.reducer
  },
});

const selectors = {
  deviceScreen: {
    width: (): number => {
      return store.getState().deviceScreen.width;
    },

    position: (): number => {
      return store.getState().deviceScreen.positionY;
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

  contactForm: {
    yourEmail_input: (): string => {
      return store.getState().contactForm.yourEmail_input;
    },
    yourEmail_errorMessage: (): string => {
      return store.getState().contactForm.yourEmail_errorMessage;
    },

    generalLocation_input: (): string => {
      return store.getState().contactForm.generalLocation_input;
    },
    generalLocation_errorMessage: (): string => {
      return store.getState().contactForm.generalLocation_errorMessage;
    },

    serviceSelection_input: (): string => {
      return store.getState().contactForm.serviceSelection_input;
    },
    serviceSelection_errorMessage: (): string => {
      return store.getState().contactForm.serviceSelection_errorMessage;
    },

    message_input: (): string => {
      return store.getState().contactForm.message_input;
    },
    message_errorMessage: (): string => {
      return store.getState().contactForm.message_errorMessage;
    },

    global_pendingSubmit: (): boolean => {
      return store.getState().contactForm.global_pendingSubmit;
    },
    global_errorMessage: (): string => {
      return store.getState().contactForm.global_errorMessage;
    },
    global_inputsDisabled: (): boolean => {
      return store.getState().contactForm.global_inputsDisabled;
    }
  }
};

export type RootState = ReturnType<typeof store.getState>;

export { store, selectors };
