import {
  RequestArgsBuilder_Lambda,
  ContactFormSubmissionService_Interface,
  OnRequestStatusNotOk_Lambda,
  OnRequestErrorCaught_Lambda,
  OnSuccess_Lambda,
  OnConstraintViolation_Lambda,
} from "./FormSubmissionService_Interface";

import { SendEmailAPIInterface } from "../../../APIs/send-email/sendEmailInterface";
import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { ContactFormOnSubmitConstraintValidationService_Interface } from "../form-fields/constraint-validation/on-submit/OnSubmitConstraintValidationService_Interface";

import { ConstraintViolationContainer_Interface } from "../form-fields/constraint-validation/_util/contraint-violation/ConstraintViolationContainer_Interface";
import { ConstraintViolationContainer_Impl } from "../form-fields/constraint-validation/_util/contraint-violation/ConstraintViolationContainer_Impl";
import { ConstraintViolationLabels_Enum } from "../form-fields/constraint-validation/_util/contraint-violation/ContraintViolationLabels_Enum";
import { Logger_Interface } from "../../../logging/Logger_Interface";
import { Log_Interface } from "../../../logging/Log_Interface";

// make the API call using the supplied binded fetch, and
// handles a success or a failure by reflecting such into the corresponding
// contact form repository state.

/* 

  ** GENERICS **

  'A' = send email API request input type; the interface is generic but perhaps the underlying API request demands a specifc input schema

  A generic was supplied here to make the network API that is used easier to
  change out. Everything else within the class as a type is inherently coupled anyway
  so no point to make them generics
*/

class ContactFormSubmissionService_Impl<A>
  implements ContactFormSubmissionService_Interface
{
  #contactFormRepository: ContactFormRepository_Interface;

  // for validating the form fields by add a flag to a container for each field with a violation, but not immediately
  // propagating or 'commiting' those errors just yet. This container will be available for use by the corresponding strategy lambda
  #onSubmitConstraintValidationService: ContactFormOnSubmitConstraintValidationService_Interface<
    ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>, // the specific violation container to use
    ConstraintViolationLabels_Enum // the specific keywords to use within the given violation container
  >;

  #sendEmailAPI: SendEmailAPIInterface<A>;

  // strategy lambdas for each stage in the lifecycle of 'submitContactForm'
  // these members are organized from top to bottom in the order they should execute it *if they happen*
  #onConstraintViolation: OnConstraintViolation_Lambda<ConstraintViolationLabels_Enum>;
  #requestArgsBuilder: RequestArgsBuilder_Lambda<A>;
  #onRequestStatusNotOk: OnRequestStatusNotOk_Lambda;
  #onRequestErrorCaught: OnRequestErrorCaught_Lambda;
  #onSuccess: OnSuccess_Lambda;

  #logger: Logger_Interface<Log_Interface>;

  constructor(
    contactFormRepository: ContactFormRepository_Interface,

    onSubmitConstraintValidationService: ContactFormOnSubmitConstraintValidationService_Interface<
      ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>,
      ConstraintViolationLabels_Enum
    >,

    sendEmailAPI: SendEmailAPIInterface<A>,

    // organized in order of possibly happening
    onConstraintViolation: OnConstraintViolation_Lambda<ConstraintViolationLabels_Enum>,
    requestArgsBuilder: RequestArgsBuilder_Lambda<A>,
    onRequestStatusNotOk: OnRequestStatusNotOk_Lambda,
    onRequestErrorCaught: OnRequestErrorCaught_Lambda,
    onSuccess: OnSuccess_Lambda,

    logger: Logger_Interface<Log_Interface>,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#onSubmitConstraintValidationService =
      onSubmitConstraintValidationService;

    this.#sendEmailAPI = sendEmailAPI;

    this.#requestArgsBuilder = requestArgsBuilder;
    this.#onRequestStatusNotOk = onRequestStatusNotOk;
    this.#onRequestErrorCaught = onRequestErrorCaught;

    this.#onSuccess = onSuccess;
    this.#onConstraintViolation = onConstraintViolation;

    this.#logger = logger;
  }

  #constraintValidateFormFields(
    cvContainer: ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>,
    instantiationId: string,
    submitId: string,
  ): void {
    // run though all of the validator methods, which add lambdas automatically
    // to the supplied error container.
    this.#onSubmitConstraintValidationService.validateInputs(
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
    if (this.#contactFormRepository.getSubmitIsPending()) return; // if a submit is already pending, then early return

    // TO BE CHANGED **** need to add the supplying of the two IDs above
    // so that the repository can log changes as it pertains to the top level
    // invocation source.
    this.#contactFormRepository.setInputsDisabled(true);
    this.#contactFormRepository.setSubmitIsPending(true);

    const cvContainer =
      new ConstraintViolationContainer_Impl<ConstraintViolationLabels_Enum>(
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

export { ContactFormSubmissionService_Impl };
