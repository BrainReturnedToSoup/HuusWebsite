import { ContactFormOnSubmitConstraintValidationService_Interface } from "./OnSubmitConstraintValidationService_Interface";

import { ContactFormConstraintValidationService_Interface } from "../core/ConstraintValidationService_Interface";

import { ContactFormRepository_Interface } from "../../../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { Logger_Interface } from "../../../../../logging/logger/Logger_Interface";
import { Log_Interface } from "../../../../../logging/logger/Log_Interface";
import { InstanceId, InvocationId } from "../../../../../logging/Logging_types";

import {
  FirstName,
  LastName,
  Email,
  Message,
  ServiceSelection,
} from "../../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

import { OnSubmitConstraintValidationServiceLogKeys_Enum } from "./OnSubmitConstraintValidationService_Enum";

// for handling what to do next given a computed constraint validation flag for a particular field
export type OnSubmitConstraintValidationPostHandler_LambdaInterface = (
  logger: Logger_Interface,
  invocationId: InvocationId,

  isValid: boolean,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class ContactFormOnSubmitConstraintValidationService_Impl
  implements ContactFormOnSubmitConstraintValidationService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  // the violation container with its internal type
  #contactFormRepository: ContactFormRepository_Interface;
  #inputValidationService: ContactFormConstraintValidationService_Interface;

  #postHandleFirstName: OnSubmitConstraintValidationPostHandler_LambdaInterface;
  #postHandleLastName: OnSubmitConstraintValidationPostHandler_LambdaInterface;
  #postHandleEmail: OnSubmitConstraintValidationPostHandler_LambdaInterface;
  #postHandleServiceSelection: OnSubmitConstraintValidationPostHandler_LambdaInterface;
  #postHandleMessage: OnSubmitConstraintValidationPostHandler_LambdaInterface;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    contactFormRepository: ContactFormRepository_Interface,
    inputValidationService: ContactFormConstraintValidationService_Interface,

    postHandleFirstName: OnSubmitConstraintValidationPostHandler_LambdaInterface,
    postHandleLastName: OnSubmitConstraintValidationPostHandler_LambdaInterface,
    postHandleEmail: OnSubmitConstraintValidationPostHandler_LambdaInterface,
    postHandleServiceSelection: OnSubmitConstraintValidationPostHandler_LambdaInterface,
    postHandleMessage: OnSubmitConstraintValidationPostHandler_LambdaInterface,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#contactFormRepository = contactFormRepository;
    this.#inputValidationService = inputValidationService;

    this.#postHandleFirstName = postHandleFirstName;
    this.#postHandleLastName = postHandleLastName;
    this.#postHandleEmail = postHandleEmail;
    this.#postHandleServiceSelection = postHandleServiceSelection;
    this.#postHandleMessage = postHandleMessage;
  }

  #loggingHelper(
    invocationId: InvocationId,

    methodName: string,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        methodName,
      );
  }

  #validateFirstNameHelper(invocationId: InvocationId): boolean {
    const firstName: FirstName =
      this.#contactFormRepository.getFirstName(invocationId);

    const isValid: boolean = this.#inputValidationService.validateFirstName(
      invocationId,

      firstName,
    );

    this.#loggingHelper(
      invocationId,

      "validateFirstName",
    ).commit();

    this.#postHandleFirstName(
      this.#logger,
      invocationId,

      isValid,
      this.#contactFormRepository,
    );

    return isValid;
  }

  #validateLastNameHelper(invocationId: InvocationId): boolean {
    const lastName: LastName =
      this.#contactFormRepository.getLastName(invocationId);

    const isValid: boolean = this.#inputValidationService.validateLastName(
      invocationId,

      lastName,
    );

    this.#loggingHelper(
      invocationId,

      "validateLastName",
    ).commit();

    this.#postHandleLastName(
      this.#logger,
      invocationId,

      isValid,
      this.#contactFormRepository,
    );

    return isValid;
  }

  //add method per specific input validation as a decorator and application to the container.

  #validateEmailHelper(invocationId: InvocationId): boolean {
    const email: Email = this.#contactFormRepository.getEmail(invocationId);

    const isValid: boolean = this.#inputValidationService.validateEmail(
      invocationId,

      email,
    );

    this.#loggingHelper(
      invocationId,

      "validateEmail",
    ).commit();

    this.#postHandleEmail(
      this.#logger,
      invocationId,

      isValid,
      this.#contactFormRepository,
    );

    return isValid;
  }

  #validateServiceSelectionHelper(invocationId: InvocationId): boolean {
    const serviceSelection: ServiceSelection =
      this.#contactFormRepository.getServiceSelection(invocationId);

    const isValid: boolean =
      this.#inputValidationService.validateServiceSelection(
        invocationId,

        serviceSelection,
      );

    this.#loggingHelper(
      invocationId,

      "validateServiceSelection",
    ).commit();

    this.#postHandleServiceSelection(
      this.#logger,
      invocationId,

      isValid,
      this.#contactFormRepository,
    );

    return isValid;
  }

  #validateMessageHelper(invocationId: InvocationId): boolean {
    const message: Message =
      this.#contactFormRepository.getMessage(invocationId);

    const isValid: boolean = this.#inputValidationService.validateMessage(
      invocationId,

      message,
    );

    this.#loggingHelper(
      invocationId,

      "validateMessage",
    ).commit();

    this.#postHandleMessage(
      this.#logger,
      invocationId,

      isValid,
      this.#contactFormRepository,
    );

    return isValid;
  }

  // returns a global 'isValid' so if any fail, false is returned
  allFieldsAreValid(invocationId: string): boolean {
    const firstNameIsValid = this.#validateFirstNameHelper(invocationId);
    const lastNameIsValid = this.#validateLastNameHelper(invocationId);
    const emailIsValid = this.#validateEmailHelper(invocationId);
    const serviceSelectionIsValid =
      this.#validateServiceSelectionHelper(invocationId);
    const messageIsValid = this.#validateMessageHelper(invocationId);

    this.#loggingHelper(
      invocationId,

      "validateInputs",
    ).commit();

    return !(
      !firstNameIsValid ||
      !lastNameIsValid ||
      !emailIsValid ||
      !serviceSelectionIsValid ||
      !messageIsValid
    );
  }
}

export { ContactFormOnSubmitConstraintValidationService_Impl };
