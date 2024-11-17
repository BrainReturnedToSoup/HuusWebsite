import { Slice, Store } from "@reduxjs/toolkit";

import { store } from "../../state/react-redux-impl/store";
import contactFormSlice from "../../state/react-redux-impl/slices/contactForm";

// methods invoked from 'actions' must match the 'contactFormSlice' reducers.
// Though this accepts a general 'Slice' type, this pattern is mainly for easier testing.
function clearContactForm(store: Store, slice: Slice) {
  // individual form field state
  store.dispatch(slice.actions.yourEmail_setInput(""));
  store.dispatch(slice.actions.yourEmail_setErrorMessage(""));

  store.dispatch(slice.actions.generalLocation_setInput(""));
  store.dispatch(slice.actions.generalLocation_setErrorMessage(""));

  store.dispatch(slice.actions.serviceSelection_setInput(""));
  store.dispatch(slice.actions.serviceSelection_setErrorMessage(""));

  store.dispatch(slice.actions.message_setInput(""));
  store.dispatch(slice.actions.message_setErrorMessage(""));

  // global form state
  // NOTE: 'setPendingSubmit' and 'setInputsDisabled' aren't included in this clearing,
  // because those mechanisms are for throttling the user on submits. Hence, when clearing a
  // form you still want to block additional submissions if one is currently pending
  store.dispatch(slice.actions.global_setErrorMessage(false));
}

export default function clearContactForm_binded() {
  clearContactForm(store, contactFormSlice);
}
