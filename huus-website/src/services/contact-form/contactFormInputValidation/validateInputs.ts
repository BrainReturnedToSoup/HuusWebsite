import { Slice, Store } from "@reduxjs/toolkit";
import { Selector } from "react-redux";

import ContactFormErrors from "./helpers/ContactFormErrors";
import {
  yourEmailValidator,
  generalLocationValidator,
  serviceSelectionValidator,
  messageInputValidator,
} from "../../../lib/contact-form-input-validation/contactFormInputValidation";




// validates the inputs of the contact form. This includes pulling a field value from the
// right redux slice, validating its constraint validation, and if the constraint validation fails,
// then add the right corresponding lambda function associated with a specific error that will be eventually
// committed and execute. In this case, you create a closure for these things to occur. This makes it easier
// to define and extend constraint validation logic, while allowing the form to handle multiple problems in a single
// submission attempt.

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.
function validateInputs(
  store: Store,
  selectors: Selector,
  slice: Slice,
  ContactFormErrors: ContactFormErrors,
): void {}

export { validateInputs };
