import { ContactFormSubmissionService_Impl } from "./FormSubmissionService_Impl";

// dependencies
import { contactFormRepository } from "../../mobile/navigation/state/repositories/contact-form/ContactFormRepository_Singleton";
import { contactFormOnSubmitConstraintValidationService } from "../form-field-constraint-validation/on-submit/OnSubmitConstraintValidationService_Singleton";

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
  );

export { contactFormSubmissionService };
