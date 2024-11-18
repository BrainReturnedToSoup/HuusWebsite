// third-party libraries and packages
import { Store, Slice } from "@reduxjs/toolkit";
import { Selector } from "react-redux";
import emailJs from "@emailjs/browser";

// custom library wrappers
import {
  emailJS_createBindedSend,
  emailJS_createSendWithTimeout,
  BindedSend,
} from "../../../lib/emailJs/emailJsHelpers";

// application-specific instantiations.
import {
  store as applicationStore,
  selectors as applicationSelectors,
} from "../../../state/react-redux-impl/store";
import contactFormSlice from "../../../state/react-redux-impl/slices/contactForm";

// context-specific helpers and constructs
import { validateInputs } from "../contactFormInputValidation/validateInputs";
import { onSuccess, onFailure } from "./helpers/handlerOutcomes";
import ContactFormErrors from "./helpers/ContactFormErrors";
import { ContactFormSubmissionServiceInterface } from "./contactFormSubmissionInterface";
import { ContactFormRepositoryInterface } from "../../../state/repositories/contact-form/ContactFormInterface";
import { SendEmailAPIInterface } from "../../../APIs/send-email/sendEmailInterface";
import {
  EmailJSOptions,
  sendEmail_emailJs,
} from "../../../APIs/send-email/emailJS/sendEmail_emailJS";
import { contactFormRepositoryImpl } from "../../../state/repositories/contact-form/ContactFormImpl";

// make the API call using the supplied binded fetch, and
// handles a success or a failure by reflecting such into the corresponding
// contact form redux state.
async function contactFormSubmissionHandler(
  state: Store,
  selectors: Selector,
  slice: Slice,
  bindedSend: BindedSend,
  sendId: string,
) {
  const contactFormErrors = new ContactFormErrors(console.error, sendId);

  // pass the 'contactFormErrors' instance so that the input validator can add
  // error lambdas to invoke in the case of constraitn validation violations.

  validateInputs(state, selectors, slice, contactFormErrors);

  if (!contactFormErrors.hasErrors()) {
    try {
      const emailJsRes = await bindedSend(sendId); // POTENTIAL ERROR SOURCE
      // add logic for checking response status and adding error messages to 'contactFormErrors'
      // as pre-bound lambdas that effectively just apply state for execution to the closed redux store and slice.
    } catch (error) {
      // use this catch pattern because you can basically throw any object in JS, but I want to deal with
      // only Error and child instances.
      if (error instanceof Error) {
        contactFormErrors; // logic for adding the specific error lambdas to 'contactFormErrors'
      } else {
        console.error(
          'Error caught within "handleContactFormSubmission" was not of a type "Error" : ' +
            typeof error,
        );
      }
    }
  }

  // freezes the state from having any more setter applications.
  contactFormErrors.commit();

  if (contactFormErrors.hasErrors()) {
    // executes all of the lambdas representing courses of action to apply based on the error.
    // these lambdas were set as part of the input validation and API request contexts.
    onFailure(contactFormErrors);
  } else {
    // directly update the state with a success state, rather that utilizing
    // some type of object similar to error handling.
    onSuccess(state, selectors, slice);
  }
}

function handleContactFormSubmission(): void {
  const sendWithTimeout = emailJS_createSendWithTimeout(
    emailJs.send, // actual send method reference
    console.error, // logger
    7000, // timeout in ms
  );

  const bindedSendWithTimeout = emailJS_createBindedSend(
    sendWithTimeout, // send method reference, but prebound with a specific timeout
    console.error, // logger
    // add args for 'emailJs.send' method
    //template ID,
    // template params,
    // general options
  );

  contactFormSubmissionHandler(
    applicationStore,
    applicationSelectors,
    contactFormSlice,
    bindedSendWithTimeout, // add generation of UUID so that each send attempt is linked uniquely but arbitrarily
    // send ID generation
  );
}

// what i am transitioning to vvv
class ContactFormSubmissionService<A, P>
  implements ContactFormSubmissionServiceInterface
{
  #contactFormRepository: ContactFormRepositoryInterface;
  #contactFormInputValidators: 
  #sendEmailAPI: SendEmailAPIInterface<A, P>;

  constructor(
    contactFormRepository: ContactFormRepositoryInterface,
    sendEmailAPI: SendEmailAPIInterface<A, P>,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#sendEmailAPI = sendEmailAPI;
  }

  #onSuccess() {
    // 
  }

  #onFailure() {

  }

  submitContactForm(): void {
    //
  }
}

const singletonForAppUse = new ContactFormSubmissionService<
  EmailJSOptions,
  void
>(contactFormRepositoryImpl, sendEmail_emailJs);

const contactFormSubmissionService = singletonForAppUse;

export { ContactFormSubmissionService, contactFormSubmissionService };
