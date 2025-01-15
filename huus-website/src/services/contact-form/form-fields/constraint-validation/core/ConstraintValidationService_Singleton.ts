import { defaultLogger } from "../../../../../logging/default/DefaultLogger_Singleton";
import { ContactFormConstraintValidationService_Impl } from "./ConstraintValidationService_Impl";

import {
  validateEmail,
  validateGeneralLocation,
  validateServiceSelection,
  validateMessage,
} from "./ConstraintValidationService_Strategies";

const contactFormConstraintValidationService =
  new ContactFormConstraintValidationService_Impl(
    validateEmail,
    validateGeneralLocation,
    validateServiceSelection,
    validateMessage,
    defaultLogger,
  );

export { contactFormConstraintValidationService };
