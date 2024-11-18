// the methods will generally be pure functions, supplying 'all that is needed for validation'

import { ContactFormErrorContainer } from "../Errors/ContactFormErrorContainer";

export interface ContactFormInputValidatorInterface {
  validateEmail(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void;

  validateGeneralLocation(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void;

  validateServiceSelection(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void;

  validateMessage(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void;
}
