import {
  ContactFormSubmissionService_Impl,

  // dependencies
  requestArgsBuilder,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
  onConstraintViolation,
} from "./contactFormSubmissionService_Impl";

// dependencies
import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormImpl";
import { contactFormOnSubmitInputValidationService } from "../contactFormInputValidation/onSubmitInputValidation/onSubmitInputValidationService_Singleton";
import { sendEmail_emailJs } from "../../../APIs/send-email/emailJs/sendEmail_emailJs";

const contactFormSubmissionService = new ContactFormSubmissionService_Impl(
  contactFormRepository,
  contactFormOnSubmitInputValidationService,
  sendEmail_emailJs,
  requestArgsBuilder,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
  onConstraintViolation,
);

export { contactFormSubmissionService };
