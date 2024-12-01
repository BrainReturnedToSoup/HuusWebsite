import {
  RequestArgsBuilder_Lambda,
  ContactFormSubmissionService_Interface,
  OnRequestStatusNotOk_Lambda,
  OnRequestErrorCaught_Lambda,
  OnSuccess_Lambda,
  OnConstraintViolation_Lambda,
} from "./contactFormSubmissionService_Interface";

import { EmailJsArgs } from "../../../APIs/send-email/emailJs/sendEmail_emailJs";

import { SendEmailAPIInterface } from "../../../APIs/send-email/sendEmailInterface";
import { ContactFormRepositoryInterface } from "../../../state/repositories/contact-form/ContactFormInterface";
import { ContactFormOnSubmitInputValidationService_Interface } from "../contactFormInputValidation/onSubmitInputValidation/onSubmitInputValidationService_Interface";

import { ConstraintViolationContainer } from "../Errors/ConstraintViolationContainer";

// make the API call using the supplied binded fetch, and
// handles a success or a failure by reflecting such into the corresponding
// contact form repository state.

class ContactFormSubmissionService_Impl<A>
  implements ContactFormSubmissionService_Interface
{
  #contactFormRepository: ContactFormRepositoryInterface;
  #onSubmitInputValidationService: ContactFormOnSubmitInputValidationService_Interface;
  #sendEmailAPI: SendEmailAPIInterface<A>;

  #requestArgsBuilder: RequestArgsBuilder_Lambda<A>;
  #onRequestStatusNotOk: OnRequestStatusNotOk_Lambda;
  #onRequestErrorCaught: OnRequestErrorCaught_Lambda;

  #onSuccess: OnSuccess_Lambda;
  #onConstraintViolation: OnConstraintViolation_Lambda;

  constructor(
    contactFormRepository: ContactFormRepositoryInterface,
    onSubmitInputValidationService: ContactFormOnSubmitInputValidationService_Interface,
    sendEmailAPI: SendEmailAPIInterface<A>,

    requestArgsBuilder: RequestArgsBuilder_Lambda<A>,
    onRequestStatusNotOk: OnRequestStatusNotOk_Lambda,
    onRequestErrorCaught: OnRequestErrorCaught_Lambda,

    onSuccess: OnSuccess_Lambda,
    onConstraintViolation: OnConstraintViolation_Lambda,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#onSubmitInputValidationService = onSubmitInputValidationService;
    this.#sendEmailAPI = sendEmailAPI;

    this.#requestArgsBuilder = requestArgsBuilder;
    this.#onRequestStatusNotOk = onRequestStatusNotOk;
    this.#onRequestErrorCaught = onRequestErrorCaught;

    this.#onSuccess = onSuccess;
    this.#onConstraintViolation = onConstraintViolation;
  }

  #constraintValidateFormFields(
    cvContainer: ConstraintViolationContainer,
    instantiationId: string,
    submitId: string,
  ): void {
    // run though all of the validator methods, which add lambdas automatically
    // to the supplied error container.
    this.#onSubmitInputValidationService.validateInputs(
      cvContainer,
      instantiationId,
      submitId,
    );
  }

  async #makeRequest(
    instantiationId: string,
    submitId: string,
  ): Promise<boolean> {
    let requestSuccessful: boolean = true;

    try {
      // get the args from the the repository to match the schema as defined in the generic
      const args = this.#requestArgsBuilder(this.#contactFormRepository);

      const res = await this.#sendEmailAPI.sendWithTimeout(
        args,
        3000,
        instantiationId,
        submitId,
      );

      if (res.status != 200) {
        // if not 200 OK then add an error lambda
        this.#onRequestStatusNotOk(
          res.status,
          this.#contactFormRepository,
          instantiationId,
          submitId,
        );

        requestSuccessful = false;
      }
    } catch (error) {
      if (!(error instanceof Error)) throw new Error();

      this.#onRequestErrorCaught(
        error,
        this.#contactFormRepository,
        instantiationId,
        submitId,
      );

      requestSuccessful = false;
    }

    return requestSuccessful;
  }

  async submitContactForm(): Promise<void> {
    // using an ID already in the repository, because this ID only changes if a previous submission
    // succeeds. For event sourcing and idempotent handling.
    const instantiationId = crypto.randomUUID(); // ID for each execution of 'submitContactForm' basically, which 'submitId'
    // stays the same in the case of some type of error

    // since the submitId stays the same when there is an error, its saved into the repository for potential cross
    // execution reuse, but may be changed upon success.

    // TO BE CHANGED **** need to add the supplying the instantiation ID above
    // so that the repository can log changes as it pertains to the top level
    // invocation source.
    const submitId = this.#contactFormRepository.getSubmitId(); // to handle submission idempotently up stream

    // stage redux so that the form is disabled and in a pending state, not just
    // the async side of things.

    // TO BE CHANGED **** need to add the supplying of the two IDs above
    // so that the repository can log changes as it pertains to the top level
    // invocation source.
    if (this.#contactFormRepository.getPendingSubmit()) return; // if a submit is already pending, then early return

    // TO BE CHANGED **** need to add the supplying of the two IDs above
    // so that the repository can log changes as it pertains to the top level
    // invocation source.
    this.#contactFormRepository.setInputsDisabled(true);
    this.#contactFormRepository.setPendingSubmit(true);

    const cvContainer = new ConstraintViolationContainer(
      instantiationId,
      submitId,
    );

    this.#constraintValidateFormFields(cvContainer, instantiationId, submitId);

    if (!cvContainer.hasNoViolations()) {
      this.#onConstraintViolation(
        cvContainer,
        this.#contactFormRepository,
        instantiationId,
        submitId,
      );

      return;
    }

    const requestSuccessful: boolean = await this.#makeRequest(
      instantiationId,
      submitId,
    );

    if (!requestSuccessful) return; // error handled internally through strategy pattern

    // leave the re-enabling of the form up to the lambda
    this.#onSuccess(this.#contactFormRepository, instantiationId, submitId);
  }
}

/*

  EVENTUALLY SUPPLY THE LOGGER IN THE CLASS INSTANCE TO EACH LAMBDA SO THEY CAN
  IMPLEMENT LOGGING WHEREVER. THEY HAVE ALL OF THE CONTEXT TO DO SO.

*/

const requestArgsBuilder: RequestArgsBuilder_Lambda<EmailJsArgs> = (
  contactFormRepository,
): EmailJsArgs => {
  // return an object matching the schema of 'EmailJsSend'
  // which may require getting from state from the right repositories.
  // strategy is good, because i know for a fact that i will be switching from EmailJS
  // to something custom in the future, there just isn't a backend right now though.

  const now = new Date();

  return {
    serviceID: "default_service",
    templateID: "template_ey6b31g",
    templateParams: {
      inquiryId: contactFormRepository.getSubmitId(),
      email: contactFormRepository.getEmail(),
      name: `${contactFormRepository.getFirstName()} ${contactFormRepository.getLastName()}`,
      generalLocation: contactFormRepository.getGeneralLocation(),
      selectedService: contactFormRepository.getServiceSelection(),
      serviceId: "TO BE ADDED",
      date: now.getUTCDate(),
      time: now.getTime(),
      message: contactFormRepository.getMessage(),
    },
    options: {}, // don't need anything local since emailJS was initialized elsewhere, but it still exists just in case
  };
};

const onRequestStatusNotOk: OnRequestStatusNotOk_Lambda = (
  requestStatus,
  contactFormRepository,
  instanstiationId,
  submitId,
): void => {
  // on request returned but status not ok, could be a number or string
  // so account for that. In this case, figure out what statuses can exist
  // from the EmailJS wrapper

  // eventually add a log that includes the two IDs along with the request status

  contactFormRepository.setErrorMessage("");
};

const onRequestErrorCaught: OnRequestErrorCaught_Lambda = (
  error,
  contactFormRepository,
  instantiationId,
  submitId,
): void => {
  // handle any type of error that could happen as a source from the EmailJS wrapper.
  // this includes say checked errors but also unchecked errors

  // eventually add a log that includes the two IDs along with the error and its data

  contactFormRepository.setErrorMessage("");
};

const onSuccess: OnSuccess_Lambda = (
  contactFormRepository,
  instantiationId,
  submitId,
): void => {
  // basically just wiping states and reset to base

  // make a new ID since the last submission went through
  // this new ID will be used in potential future submissions
  contactFormRepository.setSubmitId(crypto.randomUUID());

  // potentially add a new field reflecting success to the user ?

  // eventually add a log that includse the two IDs along with the rror and its data

  contactFormRepository.setPendingSubmit(false);
  contactFormRepository.setInputsDisabled(false);
};

const onConstraintViolation: OnConstraintViolation_Lambda = (
  constraintViolationContainer,
  contactFormRepository,
  instantiationId,
  submitId,
): void => {
  // basically go through each individual constraint violation that is present, and apply the
  // error messages per field.
  // eventually add a log that includes the two IDs along with the error and its data
};

export {
  ContactFormSubmissionService_Impl,
  requestArgsBuilder,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
  onConstraintViolation,
};
