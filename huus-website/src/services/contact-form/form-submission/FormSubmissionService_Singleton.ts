import {
  ContactFormSubmissionService_Impl,
  InstanceMetaData,
} from "./FormSubmissionService_Impl";

import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormRepository_Singleton";
import { contactFormOnSubmitConstraintValidationService } from "../form-fields/constraint-validation/on-submit/OnSubmitConstraintValidationService_Singleton";

import {
  EmailJsArgs,
  sendEmail_emailJs,
} from "../../../APIs/send-email/emailJs/sendEmail_emailJs";

import {
  onConstraintViolation,
  requestArgsFactory,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
} from "./FormSubmissionService_Strategies";

import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Singleton";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-SUBMISSION-SERVICE-DEFAULT",
} as const;

const contactFormSubmissionService =
  new ContactFormSubmissionService_Impl<EmailJsArgs>(
    instanceMetaData,
    defaultLogger,

    contactFormRepository,
    contactFormOnSubmitConstraintValidationService,
    sendEmail_emailJs,

    onConstraintViolation,
    requestArgsFactory,
    onRequestStatusNotOk,
    onRequestErrorCaught,
    onSuccess,
  );

export { contactFormSubmissionService, instanceMetaData };
