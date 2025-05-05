import {
  RequestArgsFactory_LambdaInterface,
  OnRequestStatusNotOk_LambdaInterface,
  OnRequestErrorCaught_LambdaInterface,
  OnSuccess_LambdaInterface,
  OnConstraintViolation_LambdaInterface,
} from "./FormSubmissionService_Impl";

import { EmailJsArgs } from "../../../APIs/send-email/emailJs/sendEmail_emailJs";
import { EmailJsConfig_Enum } from "../../../APIs/send-email/emailJs/Config_Enum";

import { OnSubmitConstraintViolationLabels_Enum } from "../form-fields/constraint-validation/on-submit/_util/contraint-violation/ContraintViolationLabels_Enum";
import { FormSubmissionServiceLogKeys_Enum } from "./FormSubmissionService_Enum";

const onConstraintViolation: OnConstraintViolation_LambdaInterface<
  OnSubmitConstraintViolationLabels_Enum
> = (
  logger,
  invocationId,

  submitId,
  constraintViolationContainer,
  contactFormRepository,
): void => {
  // basically go through each individual constraint violation that is present, and apply the
  // error messages per field.
  // eventually add a log that includes the two IDs along with the error and its data

  contactFormRepository;

  logger
    .createNewLog()
    .addAttribute(FormSubmissionServiceLogKeys_Enum.INVOCATION_ID, invocationId)
    .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.INVOKED_LAMBDA,
      "onConstraintViolation",
    )
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.CONSTRAINT_VIOLATIONS,
      constraintViolationContainer.toString(),
    )
    .commit();

  // ****** NEED TO ADD LOGIC RELATED TO REFERENCING EACH VIOLATION AND
  //  THUS UPDATING THE ASSOCIATED FORM FIELD ERROR STATE
};

const requestArgsFactory: RequestArgsFactory_LambdaInterface<EmailJsArgs> = (
  logger,
  invocationId,

  submitId,
  contactFormRepository,
): EmailJsArgs => {
  // return an object matching the schema of 'EmailJsSend'
  // which may require getting from state from the right repositories.
  // strategy is good, because i know for a fact that I will be switching from EmailJS
  // to something custom in the future, there just isn't a backend right now though.

  const now = new Date();

  const args: EmailJsArgs = {
    serviceID: EmailJsConfig_Enum.SERVICE_ID,
    templateID: EmailJsConfig_Enum.TEMPLATE_ID,

    templateParams: {
      inquiryId: contactFormRepository.getSubmitId(invocationId), // ID for submission idempotency

      email: contactFormRepository.getEmail(invocationId),
      name: `${contactFormRepository.getFirstName(invocationId)} ${contactFormRepository.getLastName(invocationId)}`,
      generalLocation: contactFormRepository.getGeneralLocation(invocationId),

      selectedService: contactFormRepository.getServiceSelection(invocationId),
      serviceId: "TO BE ADDED", // meant as a more stable ID per unique service. This will come in handy with the no-code admin dashboard providing a means to define services

      date: now.getUTCDate(),
      time: now.getTime(),

      message: contactFormRepository.getMessage(invocationId),
    },

    options: {}, // don't need anything local since emailJS was initialized elsewhere, but it still exists just in case
  };

  logger
    .createNewLog()
    .addAttribute(FormSubmissionServiceLogKeys_Enum.INVOCATION_ID, invocationId)
    .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.INVOKED_LAMBDA,
      "requestArgsFactory",
    )
    .addAttribute(FormSubmissionServiceLogKeys_Enum.EMAIL_JS_ARGS, args)
    .commit();

  return args;
};

const onRequestErrorCaught: OnRequestErrorCaught_LambdaInterface = (
  logger,
  invocationId,

  submitId,
  error,
  contactFormRepository,
): void => {
  // handle any type of error that could happen as a source from the EmailJS wrapper.
  // this includes say checked errors but also unchecked errors

  // eventually add a log that includes the two IDs along with the error and its data

  // ***** STILL NEED TO FIGURE OUT WHAT ERRORS ARE POSSIBLE GIVEN THE INVOCATION SCOPE

  const formError: string = "";

  logger
    .createNewLog()
    .addAttribute(FormSubmissionServiceLogKeys_Enum.INVOCATION_ID, invocationId)
    .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.INVOKED_LAMBDA,
      "onRequestErrorCaught",
    )
    .addAttribute(FormSubmissionServiceLogKeys_Enum.REQUEST_ERROR, error)
    .addAttribute(FormSubmissionServiceLogKeys_Enum.FORM_ERROR, formError)
    .commit();

  contactFormRepository.setFormError(invocationId, formError);
};

const onRequestStatusNotOk: OnRequestStatusNotOk_LambdaInterface = (
  logger,
  invocationId,

  submitId,
  requestStatus,
  contactFormRepository,
): void => {
  // on request returned but status not ok, could be a number or string
  // so account for that. In this case, figure out what statuses can exist
  // from the EmailJS wrapper

  // eventually add a log that includes the two IDs along with the request status

  const formError: string = "";

  logger
    .createNewLog()
    .addAttribute(FormSubmissionServiceLogKeys_Enum.INVOCATION_ID, invocationId)
    .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.INVOKED_LAMBDA,
      "onRequestStatusNotOk",
    )
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.REQUEST_STATUS,
      requestStatus,
    )
    .addAttribute(FormSubmissionServiceLogKeys_Enum.FORM_ERROR, formError)
    .commit();

  contactFormRepository.setFormError(invocationId, formError);
};

const onSuccess: OnSuccess_LambdaInterface = (
  logger,
  invocationId,

  submitId,
  contactFormRepository,
): void => {
  // basically just wiping states and reset to base

  // make a new ID since the last submission went through
  // this new ID will be used in potential future submissions
  const newSubmitId = crypto.randomUUID(),
    submitIsPending: boolean = false,
    inputsDisabled: boolean = false;

  logger
    .createNewLog()
    .addAttribute(FormSubmissionServiceLogKeys_Enum.INVOCATION_ID, invocationId)
    .addAttribute(FormSubmissionServiceLogKeys_Enum.SUBMIT_ID, submitId)
    .addAttribute(FormSubmissionServiceLogKeys_Enum.INVOKED_LAMBDA, "onSuccess")
    .addAttribute(FormSubmissionServiceLogKeys_Enum.NEW_SUBMIT_ID, newSubmitId)
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.SUBMIT_IS_PENDING,
      submitIsPending,
    )
    .addAttribute(
      FormSubmissionServiceLogKeys_Enum.INPUTS_DISABLED,
      inputsDisabled,
    )
    .commit();

  contactFormRepository.setSubmitId(invocationId, newSubmitId);

  // potentially add a new field reflecting success to the user ?

  // eventually add a log that includse the two IDs along with the error and its data

  contactFormRepository.setSubmitIsPending(invocationId, submitIsPending);
  contactFormRepository.setInputsDisabled(invocationId, inputsDisabled);
};

export {
  onConstraintViolation,
  requestArgsFactory,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
};
