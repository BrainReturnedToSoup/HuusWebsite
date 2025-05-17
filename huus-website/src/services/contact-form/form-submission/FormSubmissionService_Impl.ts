import { SendEmail_Interface } from "../../../APIs/send-email/SendEmail_Interface";
import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { ContactFormOnSubmitConstraintValidationService_Interface } from "../form-fields/constraint-validation/on-submit/OnSubmitConstraintValidationService_Interface";

import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

import { InstanceId, InvocationId } from "../../../logging/Logging_types";
import {
  SubmitId,
  SubmitIsPending,
} from "../../../domain-data-types/contact-form/ContactForm_DomainTypes";

import { FormSubmissionServiceLogKeys_Enum } from "./FormSubmissionService_Enum";
import { ContactFormSubmissionService_Interface } from "./FormSubmissionService_Interface";

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

class ContactFormSubmissionService_Impl<A>
  implements ContactFormSubmissionService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #contactFormRepository: ContactFormRepository_Interface;
  #onSubmitConstraintValidationService: ContactFormOnSubmitConstraintValidationService_Interface;
  #sendEmail: SendEmail_Interface<A>;

  // strategy lambdas for each stage in the lifecycle of 'submitContactForm'
  // these members are organized from top to bottom in the order they should execute (if applicable of course)
  #requestArgsFactory: RequestArgsFactory_LambdaInterface<A>;
  #onRequestStatusNotOk: OnRequestStatusNotOk_LambdaInterface;
  #onRequestErrorCaught: OnRequestErrorCaught_LambdaInterface;
  #onSuccess: OnSuccess_LambdaInterface;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    contactFormRepository: ContactFormRepository_Interface,
    onSubmitConstraintValidationService: ContactFormOnSubmitConstraintValidationService_Interface,
    sendEmail: SendEmail_Interface<A>,

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
    this.#sendEmail = sendEmail;

    this.#requestArgsFactory = requestArgsFactory;
    this.#onRequestStatusNotOk = onRequestStatusNotOk;
    this.#onRequestErrorCaught = onRequestErrorCaught;
    this.#onSuccess = onSuccess;
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
    const res = this.#sendEmail
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

    if (submitIsPending) return; // if a submit is already pending, then early return

    this.#contactFormRepository.setInputsDisabled(invocationId, true);
    this.#contactFormRepository.setSubmitIsPending(invocationId, true);

    const isValidOverall =
      this.#onSubmitConstraintValidationService.allFieldsAreValid(invocationId);

    if (!isValidOverall) return;

    const isRequestSuccessful = await this.#makeRequest(invocationId, submitId);

    if (!isRequestSuccessful) return; // issues with request handled internally already, so early exit

    this.#onSuccess(
      this.#logger,
      invocationId,

      submitId,
      this.#contactFormRepository,
    ); // leave the re-enabling of the form up to the lambda
  }
}

export { ContactFormSubmissionService_Impl };
