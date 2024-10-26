import { createSlice } from "@reduxjs/toolkit";

const contactFormSlice = createSlice({
  name: "contactForm",

  initialState: {
    // per form field. Can't use nested objects, because that messes with how
    // redux perceives state changes.

    yourEmail_input: "",
    yourEmail_errorMessage: "",

    generalLocation_input: "",
    generalLocation_errorMessage: "",

    serviceSelection_input: "",
    serviceSelection_errorMessage: "",

    message_input: "",
    message_errorMessage: "",

    // top-level state of the form.
    global_pendingSubmit: false,
    global_errorMessage: "",
    global_inputsDisabled: false,
  },

  reducers: {
    yourEmail_setInput: (state, action) => {
      state.yourEmail_input = action.payload;
    },
    yourEmail_setErrorMessage: (state, action) => {
      state.yourEmail_errorMessage = action.payload;
    },

    generalLocation_setInput: (state, action) => {
      state.generalLocation_input = action.payload;
    },
    generalLocation_setErrorMessage: (state, action) => {
      state.generalLocation_errorMessage = action.payload;
    },

    serviceSelection_setInput: (state, action) => {
      state.serviceSelection_input = action.payload;
    },
    serviceSelection_setErrorMessage: (state, action) => {
      state.serviceSelection_errorMessage = action.payload;
    },

    message_setInput: (state, action) => {
      state.message_input = action.payload;
    },
    message_setErrorMessage: (state, action) => {
      state.message_errorMessage = action.payload;
    },

    global_setPendingSubmit: (state, action) => {
      state.global_pendingSubmit = action.payload;
    },
    global_setErrorMessage: (state, action) => {
      state.global_errorMessage = action.payload;
    },
    global_setInputsDisabled: (state, action) => {
      state.global_inputsDisabled = action.payload;
    },
  },
});

export default contactFormSlice;
