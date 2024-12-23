import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";

const contactFormSlice = createSlice({
  name: "contactForm",

  initialState: {
    // per form field. Can't use nested objects, because that messes with how
    // redux perceives state changes.

    firstName: "" as string,
    lastName: "" as string,

    yourEmail_input: "" as string,
    yourEmail_errorMessage: "" as string,

    generalLocation_input: "" as string,
    generalLocation_errorMessage: "" as string,

    serviceSelection_input: "" as string,
    serviceSelection_errorMessage: "" as string,

    message_input: "" as string,
    message_errorMessage: "" as string,

    // top-level state of the form.
    global_pendingSubmit: false as boolean,
    global_submitSucceeded: false as boolean,
    global_errorMessage: "" as string,
    global_inputsDisabled: false as boolean,
    global_submitId: crypto.randomUUID() as string,
  },

  reducers: {
    firstName: (state, action): void => {
      state.firstName = String(action.payload);
    },
    lastName: (state, action): void => {
      state.lastName = String(action.payload);
    },

    yourEmail_setInput: (state, action): void => {
      state.yourEmail_input = String(action.payload);
    },
    yourEmail_setErrorMessage: (state, action): void => {
      state.yourEmail_errorMessage = String(action.payload);
    },

    generalLocation_setInput: (state, action): void => {
      state.generalLocation_input = String(action.payload);
    },
    generalLocation_setErrorMessage: (state, action): void => {
      state.generalLocation_errorMessage = String(action.payload);
    },

    serviceSelection_setInput: (state, action): void => {
      state.serviceSelection_input = String(action.payload);
    },
    serviceSelection_setErrorMessage: (state, action): void => {
      state.serviceSelection_errorMessage = String(action.payload);
    },

    message_setInput: (state, action): void => {
      state.message_input = String(action.payload);
    },
    message_setErrorMessage: (state, action): void => {
      state.message_errorMessage = String(action.payload);
    },

    global_setPendingSubmit: (state, action): void => {
      if (typeof action.payload !== "boolean") {
        throw new Error(
          "'contactForm' reducer 'global_setPendingSubmit' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'boolean'",
        );
      }

      state.global_pendingSubmit = action.payload;
    },
    global_setSubmitSucceeded: (state, action): void => {
      if (typeof action.payload !== "boolean") {
        throw new Error(
          "'contactForm' reducer 'global_setSubmitSucceeded' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'boolean'",
        );
      }

      state.global_submitSucceeded = action.payload;
    },
    global_setErrorMessage: (state, action): void => {
      state.global_errorMessage = String(action.payload);
    },
    global_setInputsDisabled: (state, action): void => {
      if (typeof action.payload !== "boolean") {
        throw new Error(
          "'contactForm' reducer 'global_setInputsDisabled' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'boolean'",
        );
      }

      state.global_inputsDisabled = action.payload;
    },

    global_setSubmitId: (state, action): void => {
      if (typeof action.payload !== "string") {
        throw new Error(
          "'contactForm' reducer 'global_setSubmitId' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'string'",
        );
      }

      // UUID pattern
      const pattern = new RegExp(
        "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
      );

      if (!pattern.test(action.payload)) {
        throw new Error(
          "'contactForm' reducer 'global_setSubmitId' given a payload not matching in pattern to a UUID. " +
            "Received '" +
            action.payload +
            "'. (Single quotes are not part of the value)",
        );
      }

      state.global_submitId = action.payload;
    },
  },
});

const selectors = {
  firstName: (store: AppStore): string => {
    return store.getState().contactForm.firstName;
  },
  lastName: (store: AppStore): string => {
    return store.getState().contactForm.lastName;
  },

  yourEmail_input: (store: AppStore): string => {
    return store.getState().contactForm.yourEmail_input;
  },
  yourEmail_errorMessage: (store: AppStore): string => {
    return store.getState().contactForm.yourEmail_errorMessage;
  },

  generalLocation_input: (store: AppStore): string => {
    return store.getState().contactForm.generalLocation_input;
  },
  generalLocation_errorMessage: (store: AppStore): string => {
    return store.getState().contactForm.generalLocation_errorMessage;
  },

  serviceSelection_input: (store: AppStore): string => {
    return store.getState().contactForm.serviceSelection_input;
  },
  serviceSelection_errorMessage: (store: AppStore): string => {
    return store.getState().contactForm.serviceSelection_errorMessage;
  },

  message_input: (store: AppStore): string => {
    return store.getState().contactForm.message_input;
  },
  message_errorMessage: (store: AppStore): string => {
    return store.getState().contactForm.message_errorMessage;
  },

  global_pendingSubmit: (store: AppStore): boolean => {
    return store.getState().contactForm.global_pendingSubmit;
  },
  global_submitSucceeded: (store: AppStore): boolean => {
    return store.getState().contactForm.global_submitSucceeded;
  },
  global_errorMessage: (store: AppStore): string => {
    return store.getState().contactForm.global_errorMessage;
  },
  global_inputsDisabled: (store: AppStore): boolean => {
    return store.getState().contactForm.global_inputsDisabled;
  },
  global_submitId: (store: AppStore): string => {
    return store.getState().contactForm.global_submitId;
  },
};

const contactFormSliceSelectors = selectors;
const contactFormSliceActions = contactFormSlice.actions;

export type ContactFormSlice = typeof contactFormSlice;
export type ContactFormSliceActions = typeof contactFormSliceActions;
export type ContactFormSliceSelectors = typeof contactFormSliceSelectors;

export { contactFormSlice, contactFormSliceSelectors, contactFormSliceActions };
