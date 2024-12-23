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
    null,
  );

export { contactFormConstraintValidationService };
