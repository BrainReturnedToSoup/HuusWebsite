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
    firstNameError: "" as FirstNameError,

    lastName: "" as LastName,
    lastNameError: "" as LastNameError,

    email: "" as Email,
    emailError: "" as EmailError,

    serviceSelection: "" as ServiceSelection,
    serviceSelectionError: "" as ServiceSelectionError,

    message: "" as Message,
    messageError: "" as MessageError,

    // top-level state of the form.
    generalFormError: "" as GeneralFormError,
    submitIsPending: false as SubmitIsPending,
    submitSucceeded: false as SubmitSucceeded,
    inputsDisabled: false as InputsDisabled,
    submitId: crypto.randomUUID() as SubmitId,
  },

  reducers: {
    setFirstName: (state, action): void => {
      state.firstName = String(action.payload);
    },
    setFirstNameError: (state, action): void => {
      state.firstNameError = String(action.payload);
    },

    setLastName: (state, action): void => {
      state.lastName = String(action.payload);
    },
    setLastNameError: (state, action): void => {
      state.lastNameError = String(action.payload);
    },

    setEmail: (state, action): void => {
      state.email = String(action.payload);
    },
    setEmailError: (state, action): void => {
      state.emailError = String(action.payload);
    },

    setServiceSelection: (state, action): void => {
      state.serviceSelection = String(action.payload);
    },
    setServiceSelectionError: (state, action): void => {
      state.serviceSelectionError = String(action.payload);
    },

    setMessage: (state, action): void => {
      state.message = String(action.payload);
    },
    setMessageError: (state, action): void => {
      state.messageError = String(action.payload);
    },

    setGeneralFormError: (state, action): void => {
      state.generalFormError = String(action.payload);
    },
    setSubmitIsPending: (state, action): void => {
      state.submitIsPending = action.payload;
    },
    setSubmitSucceeded: (state, action): void => {
      state.submitSucceeded = action.payload;
    },
    setInputsDisabled: (state, action): void => {
      state.inputsDisabled = action.payload;
    },

    setSubmitId: (state, action): void => {
      state.submitId = action.payload;
    },
  },
});

const selectors = {
  getFirstName: (store: AppStore): string => {
    return store.getState().contactForm.firstName;
  },
  getFirstNameError: (store: AppStore): string => {
    return store.getState().contactForm.firstNameError;
  },

  getLastName: (store: AppStore): string => {
    return store.getState().contactForm.lastName;
  },
  getLastNameError: (store: AppStore): string => {
    return store.getState().contactForm.lastNameError;
  },

  getEmail: (store: AppStore): string => {
    return store.getState().contactForm.email;
  },
  getEmailError: (store: AppStore): string => {
    return store.getState().contactForm.emailError;
  },

  getServiceSelection: (store: AppStore): string => {
    return store.getState().contactForm.serviceSelection;
  },
  getServiceSelectionError: (store: AppStore): string => {
    return store.getState().contactForm.serviceSelectionError;
  },

  getMessage: (store: AppStore): string => {
    return store.getState().contactForm.message;
  },
  getMessageError: (store: AppStore): string => {
    return store.getState().contactForm.messageError;
  },

  getGeneralFormError: (store: AppStore): string => {
    return store.getState().contactForm.generalFormError;
  },
  getSubmitIsPending: (store: AppStore): boolean => {
    return store.getState().contactForm.submitIsPending;
  },
  getSubmitSucceeded: (store: AppStore): boolean => {
    return store.getState().contactForm.submitSucceeded;
  },
  getInputsDisabled: (store: AppStore): boolean => {
    return store.getState().contactForm.inputsDisabled;
  },

  getSubmitId: (store: AppStore): string => {
    return store.getState().contactForm.submitId;
  },
};

const contactFormSliceSelectors = selectors;
const contactFormSliceActions = contactFormSlice.actions;

export type ContactFormSlice = typeof contactFormSlice;
export type ContactFormSliceActions = typeof contactFormSliceActions;
export type ContactFormSliceSelectors = typeof contactFormSliceSelectors;

export { contactFormSlice, contactFormSliceSelectors, contactFormSliceActions };
