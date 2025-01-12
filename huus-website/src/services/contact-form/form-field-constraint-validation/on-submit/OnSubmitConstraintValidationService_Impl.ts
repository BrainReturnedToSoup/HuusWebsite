import {
  ContactFormOnSubmitConstraintValidationService_Interface,
  OnSubmitConstraintValidation_Lambda,
} from "./OnSubmitConstraintValidationService_Interface";
import { ConstraintViolationContainer_Interface } from "../../_errors/contraint-violation/ConstraintViolationContainer_Interface";
import { ContactFormConstraintValidationService_Interface } from "../core/ConstraintValidationService_Interface";
import { ContactFormRepository_Interface } from "../../../mobile/navigation/state/repositories/contact-form/ContactFormRepository_Interface";
import { ConstraintViolationLabels_Enum } from "../../_errors/contraint-violation/ContraintViolationLabels_Enum";

class ContactFormOnSubmitConstraintValidationService_Impl<
  T extends ConstraintViolationContainer_Interface<E>,
  E,
> implements ContactFormOnSubmitConstraintValidationService_Interface<T, E>
{
  // the violation container with its internal type
  #contactFormRepository: ContactFormRepository_Interface;
  #inputValidationService: ContactFormConstraintValidationService_Interface;

  // logger to be added*

  #validateEmailLambda: OnSubmitConstraintValidation_Lambda<T>;
  #validateGeneralLocationLamda: OnSubmitConstraintValidation_Lambda<T>;
  #validateServiceSelectionLambda: OnSubmitConstraintValidation_Lambda<T>;
  #validateMessageLambda: OnSubmitConstraintValidation_Lambda<T>;

  constructor(
    contactFormRepository: ContactFormRepository_Interface,
    inputValidationService: ContactFormConstraintValidationService_Interface,

    validateEmailLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateGeneralLocationLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateServiceSelectionLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateMessageLambda: OnSubmitConstraintValidation_Lambda<T>,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#inputValidationService = inputValidationService;

    this.#validateEmailLambda = validateEmailLambda;
    this.#validateGeneralLocationLamda = validateGeneralLocationLambda;
    this.#validateServiceSelectionLambda = validateServiceSelectionLambda;
    this.#validateMessageLambda = validateMessageLambda;
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

// these lambdas are largely for adding specific enumerations
// to the supplied container basically. Can't otherwise configure that
// upon instantiation without a strategy.

// Also, since this is done via a strategy, its fairly easy to extend such
// for more complex violation conditions, perhaps even removing certain violations
// in the case another one supercedes it

const onSubmitValidateEmail: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  if (!isValid) container.addViolation(ConstraintViolationLabels_Enum.EMAIL);
};

const onSubmitValidateGeneralLocation: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  if (!isValid)
    container.addViolation(ConstraintViolationLabels_Enum.GENERAL_LOCATION);
};

const onSubmitValidateServiceSelection: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  if (!isValid)
    container.addViolation(ConstraintViolationLabels_Enum.SERVICE_SELECTION);
};

const onSubmitValidateMessage: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  if (!isValid) container.addViolation(ConstraintViolationLabels_Enum.MESSAGE);
};

export {
  ContactFormOnSubmitConstraintValidationService_Impl,
  onSubmitValidateEmail,
  onSubmitValidateGeneralLocation,
  onSubmitValidateServiceSelection,
  onSubmitValidateMessage,
};
