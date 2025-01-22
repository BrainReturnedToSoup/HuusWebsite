import { SendEmailAPIInterface } from "../../../APIs/send-email/sendEmailInterface";
import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { ContactFormOnSubmitConstraintValidationService_Interface } from "../form-fields/constraint-validation/on-submit/OnSubmitConstraintValidationService_Interface";

import { ConstraintViolationContainer_Interface } from "../form-fields/constraint-validation/on-submit/_util/contraint-violation/ConstraintViolationContainer_Interface";
import { ConstraintViolationContainer_Impl } from "../form-fields/constraint-validation/on-submit/_util/contraint-violation/ConstraintViolationContainer_Impl";
import { OnSubmitConstraintViolationLabels_Enum } from "../form-fields/constraint-validation/on-submit/_util/contraint-violation/ContraintViolationLabels_Enum";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

import { InstanceId, InvocationId } from "../../../logging/Logging_types";
import {
  SubmitId,
  SubmitIsPending,
} from "../../../domain-types/contact-form/ContactForm_DomainTypes";

import { FormSubmissionServiceLogKeys_Enum } from "./FormSubmissionService_Enum";
import { ContactFormSubmissionService_Interface } from "./FormSubmissionService_Interface";

export type OnConstraintViolation_LambdaInterface<E> = (
  logger: Logger_Interface,
  invocationId: InvocationId,

  submitId: SubmitId,
  constraintViolationContainer: ConstraintViolationContainer_Interface<E>,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export type RequestArgsFactory_LambdaInterface<A> = (
  logger: Logger_Interface,
  invocationId: InvocationId,

  submitId: SubmitId,
  contactFormRepository: ContactFormRepository_Interface,
) => A;

export type OnRequestStatusNotOk_LambdaInterface = (
  logger: Logger_Interface,
  invocationId: InvocationId,

  submitId: SubmitId,
  responseStatus: string | number,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export type OnRequestErrorCaught_LambdaInterface = (
  logger: Logger_Interface,
  invocationId: InvocationId,

  submitId: SubmitId,
  error: Error,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export type OnSuccess_LambdaInterface = (
  logger: Logger_Interface,
  invocationId: InvocationId,

  submitId: SubmitId,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export interface InstanceMetaData {
  instanceId: InstanceId;
}

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
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #contactFormRepository: ContactFormRepository_Interface;

  // for validating the form fields by add a flag to a container for each field with a violation, but not immediately
  // propagating or 'commiting' those errors just yet. This container will be available for use by the corresponding strategy lambda
  #onSubmitConstraintValidationService: ContactFormOnSubmitConstraintValidationService_Interface<
    ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>, // the specific violation container to use
    OnSubmitConstraintViolationLabels_Enum // the specific keywords to use within the given violation container
  >;

  #sendEmailAPI: SendEmailAPIInterface<A>;

  // strategy lambdas for each stage in the lifecycle of 'submitContactForm'
  // these members are organized from top to bottom in the order they should execute (if applicable of course)
  #onConstraintViolation: OnConstraintViolation_LambdaInterface<OnSubmitConstraintViolationLabels_Enum>;
  #requestArgsFactory: RequestArgsFactory_LambdaInterface<A>;
  #onRequestStatusNotOk: OnRequestStatusNotOk_LambdaInterface;
  #onRequestErrorCaught: OnRequestErrorCaught_LambdaInterface;
  #onSuccess: OnSuccess_LambdaInterface;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    contactFormRepository: ContactFormRepository_Interface,
    onSubmitConstraintValidationService: ContactFormOnSubmitConstraintValidationService_Interface<
      ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>,
      OnSubmitConstraintViolationLabels_Enum
    >,
    sendEmailAPI: SendEmailAPIInterface<A>,

    onConstraintViolation: OnConstraintViolation_LambdaInterface<OnSubmitConstraintViolationLabels_Enum>,
    requestArgsFactory: RequestArgsFactory_LambdaInterface<A>,
    onRequestStatusNotOk: OnRequestStatusNotOk_LambdaInterface,
    onRequestErrorCaught: OnRequestErrorCaught_LambdaInterface,
    onSuccess: OnSuccess_LambdaInterface,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#contactFormRepository = contactFormRepository;
    this.#onSubmitConstraintValidationService =
      onSubmitConstraintValidationService;
    this.#sendEmailAPI = sendEmailAPI;

    this.#onConstraintViolation = onConstraintViolation;
    this.#requestArgsFactory = requestArgsFactory;
    this.#onRequestStatusNotOk = onRequestStatusNotOk;
    this.#onRequestErrorCaught = onRequestErrorCaught;
    this.#onSuccess = onSuccess;
  }

  #constraintValidateFormFields(
    invocationId: InvocationId,

    cvContainer: ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>,
  ): void {
    // run though all of the validator methods, which add lambdas automatically
    // to the supplied error container. The constraint validation service has its own copy of the reference to the same underlying repository.
    this.#onSubmitConstraintValidationService.validateInputs(
      invocationId,

      cvContainer,
    );
  }

  // returns a boolean for early return in the main public method this is invoked within. The lambdas are invoked as
  // origin, so this allows early returns in this way.
  #makeRequest(
    invocationId: InvocationId,
    submitId: SubmitId,
  ): Promise<boolean> {
    // get the args from the the repository to match the schema as defined in the generic
    const args: A = this.#requestArgsFactory(
      this.#logger,
      invocationId,

      submitId,
      this.#contactFormRepository,
    );

    // using the more traditional fluent pattern here, because it allows me to apply a logging pattern right after the promise is technically created, but before it's
    // returned from this particular method.
    const res = this.#sendEmailAPI
      .sendWithTimeout(args, 3000, invocationId, submitId)
      .then((res) => {
        if (res.status != 200) {
          this.#onRequestStatusNotOk(
            this.#logger,
            invocationId,
            submitId,

            res.status,
            this.#contactFormRepository,
          );

          return false;
        }

        return true;
      })
      .catch((error) => {
        if (!(error instanceof Error)) {
          throw new Error(
            "Error thrown by form submission request is not an object extending from 'Error'.",
          );
        }

        this.#onRequestErrorCaught(
          this.#logger,
          invocationId,

          submitId,
          error,
          this.#contactFormRepository,
        );

        return false;
      });

    this.#logger
      .createNewLog()
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INVOKED_PRIVATE_METHOD,
        "makeRequest",
      )
      .commit();

    return res;
  }

  async submitForm(invocationId: InvocationId): Promise<void> {
    // using an ID already in the repository, because this ID only changes if a previous submission
    // succeeds. For event sourcing and idempotent handling.
    // ID for each execution of 'submitContactForm' basically, which 'submitId'
    // stays the same in the case of some type of error

    // since the submitId stays the same when there is an error, its saved into the repository for potential cross
    // execution reuse, but may be changed upon success of a given request. This allows requests to be associated with unique and semantic actions made by
    // the user, which means more resilience when it comes to actions as they travel across the network.

    const submitId = this.#contactFormRepository.getSubmitId(invocationId); // to handle submission idempotently up stream

    const submitIsPending: SubmitIsPending =
      this.#contactFormRepository.getSubmitIsPending(invocationId);

    this.#logger
      .createNewLog()
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        "submitContactForm",
      )
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.IS_SUBMIT_PENDING,
        submitIsPending,
      )
      .commit();

    // stage redux so that the form is disabled and in a pending state, not just
    // the async side of things.

    // TO BE CHANGED **** need to add the supplying of the two IDs above
    // so that the repository can log changes as it pertains to the top level
    // invocation source.
    if (submitIsPending) return; // if a submit is already pending, then early return

    // TO BE CHANGED **** need to add the supplying of the two IDs above
    // so that the repository can log changes as it pertains to the top level
    // invocation source.
    this.#contactFormRepository.setInputsDisabled(invocationId, true);
    this.#contactFormRepository.setSubmitIsPending(invocationId, true);

    const cvContainer =
      new ConstraintViolationContainer_Impl<OnSubmitConstraintViolationLabels_Enum>(
        invocationId,
        submitId,
      );

    this.#constraintValidateFormFields(
      invocationId,

      cvContainer,
    );

    const hasNoViolations: boolean = cvContainer.hasNoViolations();

    this.#logger
      .createNewLog()
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        "submitContactForm",
      )
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.HAS_NO_CONSTRAINTS_VIOLATED,
        hasNoViolations,
      )
      .commit();

    if (!hasNoViolations) {
      this.#onConstraintViolation(
        this.#logger,
        invocationId,
        submitId,

        cvContainer,
        this.#contactFormRepository,
      );

      return;
    }

    const requestIsSuccessful: boolean = await this.#makeRequest(
      invocationId,
      submitId,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        "submitContactForm",
      )
      .addAttribute(
        FormSubmissionServiceLogKeys_Enum.REQUEST_SUCCESSFUL,
        requestIsSuccessful,
      )
      .commit();

    if (!requestIsSuccessful) return; // issues with request handled internally already, so early exit

    this.#onSuccess(
      this.#logger,
      invocationId,
      submitId,

      this.#contactFormRepository,
    ); // leave the re-enabling of the form up to the lambda
  }
}

export { ContactFormSubmissionService_Impl };
