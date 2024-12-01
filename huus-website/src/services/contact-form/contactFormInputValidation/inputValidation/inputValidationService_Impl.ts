import {
  ConstraintValidation_Lambda,
  ContactFormInputValidationService_Interface,
} from "./inputValidationService_Interface";

type Logger = (message: string) => void;

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.

// will be responsible for either directly invoking some type of state change to
// the repository, or adding a lambda to be executed later.
class ContactFormInputValidationService_Impl
  implements ContactFormInputValidationService_Interface
{
  #validateEmailLambda: ConstraintValidation_Lambda;
  #validateGeneralLocationLambda: ConstraintValidation_Lambda;
  #validateServiceSelectionLambda: ConstraintValidation_Lambda;
  #validateMessage: ConstraintValidation_Lambda;

  #logger: Logger | null;

  constructor(
    validateEmailLambda: ConstraintValidation_Lambda,
    validateGeneralLocationLambda: ConstraintValidation_Lambda,
    validateServiceSelectionLambda: ConstraintValidation_Lambda,
    validateMessage: ConstraintValidation_Lambda,
    logger: Logger | null,
  ) {
    this.#validateEmailLambda = validateEmailLambda;
    this.#validateGeneralLocationLambda = validateGeneralLocationLambda;
    this.#validateServiceSelectionLambda = validateServiceSelectionLambda;
    this.#validateMessage = validateMessage;

    this.#logger = logger;
  }

  validateEmail(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateEmailLambda(input);

    // after logging ?

    return isValid;
  }

  validateGeneralLocation(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateGeneralLocationLambda(input);

    // after logging ?

    return isValid;
  }

  validateServiceSelection(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateServiceSelectionLambda(input);

    // after logging ?

    return isValid;
  }

  validateMessage(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateMessage(input);

    // after logging ?

    return isValid;
  }
}

const validateEmail: ConstraintValidation_Lambda = (
  input: string,
): boolean => {};

const validateGeneralLocation: ConstraintValidation_Lambda = (
  input: string,
): boolean => {};

const validateServiceSelection: ConstraintValidation_Lambda = (
  input: string,
): boolean => {};

const validateMessage: ConstraintValidation_Lambda = (
  input: string,
): boolean => {};

export {
  ContactFormInputValidationService_Impl,
  validateEmail,
  validateGeneralLocation,
  validateServiceSelection,
  validateMessage,
};
