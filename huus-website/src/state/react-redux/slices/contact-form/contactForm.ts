import {
  Email,
  EmailError,
  FirstName,
  FirstNameError,
  GeneralFormError,
  InputsDisabled,
  LastName,
  LastNameError,
  Message,
  MessageError,
  ServiceSelection,
  ServiceSelectionError,
  SubmitId,
  SubmitIsPending,
  SubmitSucceeded,
} from "../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../../store";

const contactFormSlice = createSlice({
  name: "contactForm",

  initialState: {
    // per form field. Can't use nested objects, because that messes with how
    // redux perceives state changes.
    firstName: "" as FirstName,
    firstNameError: "valid error" as FirstNameError,

    lastName: "" as LastName,
    lastNameError: "valid error" as LastNameError,

    email: "" as Email,
    emailError: "valid error" as EmailError,

    serviceSelection: "" as ServiceSelection,
    serviceSelectionError: "valid error" as ServiceSelectionError,

    message: "" as Message,
    messageError: "valid error" as MessageError,

    // top-level state of the form.
    submitIsPending: false as SubmitIsPending,
    submitSucceeded: false as SubmitSucceeded,
    generalFormError: "" as GeneralFormError,
    inputsDisabled: false as InputsDisabled,
    submitId: crypto.randomUUID() as SubmitId,
  },

  reducers: {
    firstName: (state, action): void => {
      state.firstName = String(action.payload);
    },
    firstNameError: (state, action): void => {
      state.firstNameError = String(action.payload);
    },

    lastName: (state, action): void => {
      state.lastName = String(action.payload);
    },
    lastNameError: (state, action): void => {
      state.lastNameError = String(action.payload);
    },

    email: (state, action): void => {
      state.email = String(action.payload);
    },
    emailError: (state, action): void => {
      state.emailError = String(action.payload);
    },

    serviceSelection: (state, action): void => {
      state.serviceSelection = String(action.payload);
    },
    serviceSelectionError: (state, action): void => {
      state.serviceSelectionError = String(action.payload);
    },

    message: (state, action): void => {
      state.message = String(action.payload);
    },
    messageError: (state, action): void => {
      state.messageError = String(action.payload);
    },

    submitIsPending: (state, action): void => {
      state.submitIsPending = action.payload;
    },
    submitSucceeded: (state, action): void => {
      state.submitSucceeded = action.payload;
    },
    generalFormError: (state, action): void => {
      state.generalFormError = String(action.payload);
    },
    inputsDisabled: (state, action): void => {
      state.inputsDisabled = action.payload;
    },

    submitId: (state, action): void => {
      state.submitId = action.payload;
    },
  },
});

const selectors = {
  firstName: (store: AppStore): string => {
    return store.getState().contactForm.firstName;
  },
  firstNameError: (store: AppStore): string => {
    return store.getState().contactForm.firstNameError;
  },

  lastName: (store: AppStore): string => {
    return store.getState().contactForm.lastName;
  },
  lastNameError: (store: AppStore): string => {
    return store.getState().contactForm.lastNameError;
  },

  email: (store: AppStore): string => {
    return store.getState().contactForm.email;
  },
  emailError: (store: AppStore): string => {
    return store.getState().contactForm.emailError;
  },

  serviceSelection: (store: AppStore): string => {
    return store.getState().contactForm.serviceSelection;
  },
  serviceSelectionError: (store: AppStore): string => {
    return store.getState().contactForm.serviceSelectionError;
  },

  message: (store: AppStore): string => {
    return store.getState().contactForm.message;
  },
  messageError: (store: AppStore): string => {
    return store.getState().contactForm.messageError;
  },

  submitIsPending: (store: AppStore): boolean => {
    return store.getState().contactForm.submitIsPending;
  },
  submitSucceeded: (store: AppStore): boolean => {
    return store.getState().contactForm.submitSucceeded;
  },
  generalFormError: (store: AppStore): string => {
    return store.getState().contactForm.generalFormError;
  },
  inputsDisabled: (store: AppStore): boolean => {
    return store.getState().contactForm.inputsDisabled;
  },
  submitId: (store: AppStore): string => {
    return store.getState().contactForm.submitId;
  },
};

const contactFormSliceSelectors = selectors;
const contactFormSliceActions = contactFormSlice.actions;

export type ContactFormSlice = typeof contactFormSlice;
export type ContactFormSliceActions = typeof contactFormSliceActions;
export type ContactFormSliceSelectors = typeof contactFormSliceSelectors;

export { contactFormSlice, contactFormSliceSelectors, contactFormSliceActions };
