import { ContactFormSubmissionService_Impl } from "./FormSubmissionService_Impl";

import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormRepository_Singleton";
import { contactFormOnSubmitConstraintValidationService } from "../form-fields/constraint-validation/on-submit/OnSubmitConstraintValidationService_Singleton";

import {
  EmailJsArgs,
  sendEmail_emailJs,
} from "../../../APIs/send-email/emailJs/sendEmail_emailJs";

import {
  requestArgsBuilder,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
  onConstraintViolation,
} from "./FormSubmissionService_Strategies";

import { defaultLogger } from "../../../logging/default/DefaultLogger_Singleton";

const contactFormSubmissionService =
  new ContactFormSubmissionService_Impl<EmailJsArgs>(
    contactFormRepository,
    contactFormOnSubmitConstraintValidationService,
    sendEmail_emailJs,
    onConstraintViolation,
    requestArgsBuilder,
    onRequestStatusNotOk,
    onRequestErrorCaught,
    onSuccess,
    defaultLogger,
  );

export { contactFormSubmissionService };
