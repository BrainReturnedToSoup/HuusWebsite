import { contactFormRepository } from "../../../../../state/repositories/contact-form/ContactFormRepository_Instance";

import {
  ContactFormOnSubmitConstraintValidationService_Impl,
  InstanceMetaData,
} from "./OnSubmitConstraintValidationService_Impl";
import { contactFormConstraintValidationService } from "../core/ConstraintValidationService_Instance";

import {
  postHandleFirstName,
  postHandleLastName,
  postHandleEmail,
  postHandleServiceSelection,
  postHandleMessage,
} from "./OnSubmitConstraintValidationService_Strategies";
import { defaultLogger } from "../../../../../logging/logger/default/DefaultLogger_Instance";

const instanceMetaData: InstanceMetaData = {
  instanceId: "ON-SUBMIT-CONSTRAINT-VALIDATION-SERVICE-DEFAULT",
} as const;

const contactFormOnSubmitConstraintValidationService =
  new ContactFormOnSubmitConstraintValidationService_Impl(
    instanceMetaData,
    defaultLogger,

    contactFormRepository,
    contactFormConstraintValidationService,

    postHandleFirstName,
    postHandleLastName,
    postHandleEmail,
    postHandleServiceSelection,
    postHandleMessage,
  );

export { contactFormOnSubmitConstraintValidationService, instanceMetaData };
