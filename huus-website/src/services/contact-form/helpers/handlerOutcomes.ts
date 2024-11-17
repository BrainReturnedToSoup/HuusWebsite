import ContactFormErrors from "./ContactFormErrors";

// display a success by applying it to the redux state.
// Change the saved 'inquiry ID' to a new ID, so that such will
// be used on the next potential inquiry submission.
// This will be hardcoded because it's easier to reason
// about even when just looking at the module alone.

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.
function onSuccess(state: Store, selectors: Selector, slice: Slice) {}

// display some error messages by applying it to the redux state. However, do NOT change the
// stored 'inquiry ID', so as to take an event sourcing approach.
// Conditional implementation depends on the specific API being used for this handler.
// This will be hardcoded because it's easier to reason about even when just looking at the module alone

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.
function onFailure(contactFormErrors: ContactFormErrors) {
  // execute all of the errors that exist within the 'ContactFormErrors'
  // object that was supplied. These errors are already prebound lambdas that update the redux
  // store and slices to reflect the error.
}

export { onSuccess, onFailure };
