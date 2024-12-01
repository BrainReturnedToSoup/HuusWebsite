import { ContactFormOnSubmitInputValidationService_Interface } from "./onSubmitInputValidationService_Interface";
import { ConstraintViolationContainer } from "../../Errors/ConstraintViolationContainer";
import { ContactFormInputValidationService_Interface } from "../inputValidation/inputValidationService_Interface";
import { ContactFormRepositoryInterface } from "../../../../state/repositories/contact-form/ContactFormInterface";

import { ConstraintViolationLabels_Enum } from "./contraintViolationLabels_Enum";

class ContactFormOnSubmitInputValidationService_Impl
  implements ContactFormOnSubmitInputValidationService_Interface
{
  #contactFormRepository: ContactFormRepositoryInterface;
  #inputValidationService: ContactFormInputValidationService_Interface;

  // logger to be added*

  constructor(
    contactFormRepository: ContactFormRepositoryInterface,
    inputValidationService: ContactFormInputValidationService_Interface,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#inputValidationService = inputValidationService;
  }

  //add method per specific input validation as a decorator and application to the container.

  #validateEmail(
    container: ConstraintViolationContainer,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean = this.#inputValidationService.validateEmail(
      this.#contactFormRepository.getEmail(),
      instantiationId,
      submitId,
    );

    if (isValid) {
      container.addViolation(ConstraintViolationLabels_Enum.EMAIL);
    }
  }

  #validateGeneralLocation(
    container: ConstraintViolationContainer,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean =
      this.#inputValidationService.validateGeneralLocation(
        this.#contactFormRepository.getGeneralLocation(),
        instantiationId,
        submitId,
      );

    if (!isValid) {
      container.addViolation(ConstraintViolationLabels_Enum.GENERAL_LOCATION);
    }
  }

  #validateServiceSelection(
    container: ConstraintViolationContainer,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean =
      this.#inputValidationService.validateServiceSelection(
        this.#contactFormRepository.getServiceSelection(),
        instantiationId,
        submitId,
      );

    if (!isValid) {
      container.addViolation(ConstraintViolationLabels_Enum.SERVICE_SELECTION);
    }
  }

  #validateMessage(
    container: ConstraintViolationContainer,
    instantiationId: string,
    submitId: string,
  ): void {
    const isValid: boolean = this.#inputValidationService.validateMessage(
      this.#contactFormRepository.getMessage(),
      instantiationId,
      submitId,
    );

    if (!isValid) {
      container.addViolation(ConstraintViolationLabels_Enum.MESSAGE);
    }
  }

  validateInputs(
    container: ConstraintViolationContainer,
    instantiationId: string,
    submitId: string,
  ): void {
    this.#validateEmail(container, instantiationId, submitId);
    this.#validateGeneralLocation(container, instantiationId, submitId);
    this.#validateServiceSelection(container, instantiationId, submitId);
    this.#validateMessage(container, instantiationId, submitId);
  }
}

export { ContactFormOnSubmitInputValidationService_Impl };
