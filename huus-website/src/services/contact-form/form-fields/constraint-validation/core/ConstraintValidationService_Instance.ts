import { defaultLogger } from "../../../../../logging/logger/default/DefaultLogger_Instance";
import {
  ContactFormConstraintValidationService_Impl,
  InstanceMetaData,
} from "./ConstraintValidationService_Impl";

import {
  validateEmail,
  validateGeneralLocation,
  validateServiceSelection,
  validateMessage,
} from "./ConstraintValidationService_Strategies";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-CONSTRAINT-VALIDATION-SERVICE-DEFAULT",
} as const;

const contactFormConstraintValidationService =
  new ContactFormConstraintValidationService_Impl(
    instanceMetaData,
    defaultLogger,

    validateEmail,
    validateGeneralLocation,
    validateServiceSelection,
    validateMessage,
  );

export { contactFormConstraintValidationService, instanceMetaData };
