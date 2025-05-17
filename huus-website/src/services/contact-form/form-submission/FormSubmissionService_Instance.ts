import {
  ContactFormSubmissionService_Impl,
  InstanceMetaData,
} from "./FormSubmissionService_Impl";

import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormRepository_Instance";
import { contactFormOnSubmitConstraintValidationService } from "../form-fields/constraint-validation/on-submit/OnSubmitConstraintValidationService_Instance";

import { EmailJsArgs } from "../../../APIs/send-email/emailJs/SendEmail_Impl";
import { sendEmail_EmailJs } from "../../../APIs/send-email/emailJs/SendEmail_Instance";

import {
  requestArgsFactory,
  onRequestStatusNotOk,
  onRequestErrorCaught,
  onSuccess,
} from "./FormSubmissionService_Strategies";

import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-SUBMISSION-SERVICE-DEFAULT",
} as const;

const contactFormSubmissionService =
  new ContactFormSubmissionService_Impl<EmailJsArgs>(
    instanceMetaData,
    defaultLogger,

    contactFormRepository,
    contactFormOnSubmitConstraintValidationService,
    sendEmail_EmailJs,

    requestArgsFactory,
    onRequestStatusNotOk,
    onRequestErrorCaught,
    onSuccess,
  );

export { contactFormSubmissionService, instanceMetaData };
