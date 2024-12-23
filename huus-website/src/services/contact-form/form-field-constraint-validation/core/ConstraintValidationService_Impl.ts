import {
  ConstraintValidation_Lambda,
  ContactFormConstraintValidationService_Interface,
} from "./ConstraintValidationService_Interface";

type Logger = (message: string) => void;

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.

// will be responsible for either directly invoking some type of state change to
// the repository, or adding a lambda to be executed later.
class ContactFormConstraintValidationService_Impl
  implements ContactFormConstraintValidationService_Interface
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

/* 
  NEED TO ADD LOGGING 
*/

export { ContactFormConstraintValidationService_Impl };
