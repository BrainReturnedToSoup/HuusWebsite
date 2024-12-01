import {
  ContactFormInputValidationService_Impl,
  validateEmail,
  validateGeneralLocation,
  validateServiceSelection,
  validateMessage,
} from "./inputValidationService_Impl";

const contactFormInputValidationService =
  new ContactFormInputValidationService_Impl(
    validateEmail,
    validateGeneralLocation,
    validateServiceSelection,
    validateMessage,
    null,
  );

export { contactFormInputValidationService };
