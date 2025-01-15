import { ContactFormOnSubmitConstraintValidationService_Interface } from "./OnSubmitConstraintValidationService_Interface";

import { ConstraintViolationContainer_Interface } from "../_util/contraint-violation/ConstraintViolationContainer_Interface";

import { ContactFormConstraintValidationService_Interface } from "../core/ConstraintValidationService_Interface";

import { ContactFormRepository_Interface } from "../../../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { Logger_Interface } from "../../../../../logging/Logger_Interface";
import { Log_Interface } from "../../../../../logging/Log_Interface";

export type OnSubmitConstraintValidation_Lambda<T> = (
  isValid: boolean,
  container: T,
) => void;

class ContactFormOnSubmitConstraintValidationService_Impl<
  T extends ConstraintViolationContainer_Interface<E>,
  E,
> implements ContactFormOnSubmitConstraintValidationService_Interface<T, E>
{
  // the violation container with its internal type
  #contactFormRepository: ContactFormRepository_Interface;
  #inputValidationService: ContactFormConstraintValidationService_Interface;

  #validateEmailLambda: OnSubmitConstraintValidation_Lambda<T>;
  #validateGeneralLocationLamda: OnSubmitConstraintValidation_Lambda<T>;
  #validateServiceSelectionLambda: OnSubmitConstraintValidation_Lambda<T>;
  #validateMessageLambda: OnSubmitConstraintValidation_Lambda<T>;

  #logger: Logger_Interface<Log_Interface>;

  constructor(
    contactFormRepository: ContactFormRepository_Interface,
    inputValidationService: ContactFormConstraintValidationService_Interface,

    validateEmailLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateGeneralLocationLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateServiceSelectionLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateMessageLambda: OnSubmitConstraintValidation_Lambda<T>,

    logger: Logger_Interface<Log_Interface>,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#inputValidationService = inputValidationService;

    this.#validateEmailLambda = validateEmailLambda;
    this.#validateGeneralLocationLamda = validateGeneralLocationLambda;
    this.#validateServiceSelectionLambda = validateServiceSelectionLambda;
    this.#validateMessageLambda = validateMessageLambda;

    this.#logger = logger;
  }

  //add method per specific input validation as a decorator and application to the container.

  #validateEmail(
    container: T,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean = this.#inputValidationService.validateEmail(
      this.#contactFormRepository.getEmail(),
      instantiationId,
      submitId,
    );

    this.#validateEmailLambda(isValid, container);
  }

  #validateGeneralLocation(
    container: T,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean =
      this.#inputValidationService.validateGeneralLocation(
        this.#contactFormRepository.getGeneralLocation(),
        instantiationId,
        submitId,
      );

    this.#validateGeneralLocationLamda(isValid, container);
  }

  #validateServiceSelection(
    container: T,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean =
      this.#inputValidationService.validateServiceSelection(
        this.#contactFormRepository.getServiceSelection(),
        instantiationId,
        submitId,
      );

    this.#validateServiceSelectionLambda(isValid, container);
  }

  #validateMessage(
    container: T,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean = this.#inputValidationService.validateMessage(
      this.#contactFormRepository.getMessage(),
      instantiationId,
      submitId,
    );

    this.#validateMessageLambda(isValid, container);
  }

  validateInputs(
    container: T,
    instantiationId: string,
    submitId: string,
  ): void {
    this.#validateEmail(container, instantiationId, submitId);
    this.#validateGeneralLocation(container, instantiationId, submitId);
    this.#validateServiceSelection(container, instantiationId, submitId);
    this.#validateMessage(container, instantiationId, submitId);
  }
}

export { ContactFormOnSubmitConstraintValidationService_Impl };
