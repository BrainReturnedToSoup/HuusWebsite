import {
  RequestArgsBuilder_Lambda,
  OnRequestStatusNotOk_Lambda,
  OnRequestErrorCaught_Lambda,
  OnSuccess_Lambda,
  OnConstraintViolation_Lambda,
} from "./FormSubmissionService_Interface";

import { EmailJsArgs } from "../../../APIs/send-email/emailJs/sendEmail_emailJs";
import { EmailJsConfig_Enum } from "../../../APIs/send-email/emailJs/Config_Enum";

import { ConstraintViolationLabels_Enum } from "../form-fields/constraint-validation/_util/contraint-violation/ContraintViolationLabels_Enum";

const requestArgsBuilder: RequestArgsBuilder_Lambda<EmailJsArgs> = (
  contactFormRepository,
): EmailJsArgs => {
  // return an object matching the schema of 'EmailJsSend'
  // which may require getting from state from the right repositories.
  // strategy is good, because i know for a fact that i will be switching from EmailJS
  // to something custom in the future, there just isn't a backend right now though.

  const now = new Date();

  return {
    serviceID: EmailJsConfig_Enum.SERVICE_ID,
    templateID: EmailJsConfig_Enum.TEMPLATE_ID,
    templateParams: {
      inquiryId: contactFormRepository.getSubmitId(), // ID for submission idempotency

      email: contactFormRepository.getEmail(),
      name: `${contactFormRepository.getFirstName()} ${contactFormRepository.getLastName()}`,
      generalLocation: contactFormRepository.getGeneralLocation(),

      selectedService: contactFormRepository.getServiceSelection(),
      serviceId: "TO BE ADDED", // meant as a more stable ID per unique service. This will come in handy with the no-code admin dashboard

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

  contactFormRepository.setFormError("");
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

  contactFormRepository.setFormError("");
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

  // eventually add a log that includse the two IDs along with the error and its data

  contactFormRepository.setSubmitIsPending(false);
  contactFormRepository.setInputsDisabled(false);
};

const onConstraintViolation: OnConstraintViolation_Lambda<
  ConstraintViolationLabels_Enum
> = (
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
  requestArgsBuilder,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
  onConstraintViolation,
};
