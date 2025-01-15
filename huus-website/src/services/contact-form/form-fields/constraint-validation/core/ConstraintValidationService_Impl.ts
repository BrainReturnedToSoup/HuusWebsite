import {
  Email,
  GeneralLocation,
  Message,
  ServiceSelection,
} from "../../../../../domain-types/contact-form/ContactForm_DomainTypes";
import { Log_Interface } from "../../../../../logging/Log_Interface";
import { Logger_Interface } from "../../../../../logging/Logger_Interface";

import { ContactFormConstraintValidationService_Interface } from "./ConstraintValidationService_Interface";

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.

// will be responsible for either directly invoking some type of state change to
// the repository, or adding a lambda to be executed later.

export type ConstraintValidation_Lambda = (input: string) => boolean;

class ContactFormConstraintValidationService_Impl
  implements ContactFormConstraintValidationService_Interface
{
  #validateEmailLambda: ConstraintValidation_Lambda;
  #validateGeneralLocationLambda: ConstraintValidation_Lambda;
  #validateServiceSelectionLambda: ConstraintValidation_Lambda;
  #validateMessage: ConstraintValidation_Lambda;

  #logger: Logger_Interface<Log_Interface>;

  constructor(
    validateEmailLambda: ConstraintValidation_Lambda,
    validateGeneralLocationLambda: ConstraintValidation_Lambda,
    validateServiceSelectionLambda: ConstraintValidation_Lambda,
    validateMessage: ConstraintValidation_Lambda,
    logger: Logger_Interface<Log_Interface>,
  ) {
    this.#validateEmailLambda = validateEmailLambda;
    this.#validateGeneralLocationLambda = validateGeneralLocationLambda;
    this.#validateServiceSelectionLambda = validateServiceSelectionLambda;
    this.#validateMessage = validateMessage;

    this.#logger = logger;
  }

  validateEmail(
    input: Email,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateEmailLambda(input);

    // after logging ?

    return isValid;
  }

  validateGeneralLocation(
    input: GeneralLocation,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateGeneralLocationLambda(input);

    // after logging ?

    return isValid;
  }

  validateServiceSelection(
    input: ServiceSelection,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateServiceSelectionLambda(input);

    // after logging ?

    return isValid;
  }

  validateMessage(
    input: Message,
    instantiationId: string,
    submitId: string,
  ): boolean {
    // prior logging ?

    const isValid = this.#validateMessage(input);

    // after logging ?

    return isValid;
  }
}

export { ContactFormConstraintValidationService_Impl };
