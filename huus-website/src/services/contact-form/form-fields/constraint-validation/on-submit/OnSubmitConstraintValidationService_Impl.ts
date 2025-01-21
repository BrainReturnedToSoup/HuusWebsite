import { ContactFormOnSubmitConstraintValidationService_Interface } from "./OnSubmitConstraintValidationService_Interface";

import { ConstraintViolationContainer_Interface } from "./_util/contraint-violation/ConstraintViolationContainer_Interface";

import { ContactFormConstraintValidationService_Interface } from "../core/ConstraintValidationService_Interface";

import { ContactFormRepository_Interface } from "../../../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { Logger_Interface } from "../../../../../logging/logger/Logger_Interface";
import { Log_Interface } from "../../../../../logging/logger/Log_Interface";
import { InstanceId, InvocationId } from "../../../../../logging/Logging_types";
import {
  Email,
  GeneralLocation,
  Message,
  ServiceSelection,
} from "../../../../../domain-types/contact-form/ContactForm_DomainTypes";
import { OnSubmitConstraintValidationServiceLogKeys_Enum } from "./OnSubmitConstraintValidationService_Enum";

import { OnSubmitConstraintValidation_Lambda } from "./OnSubmitConstraintValidationService_Interface";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class ContactFormOnSubmitConstraintValidationService_Impl<
  T extends ConstraintViolationContainer_Interface<E>,
  E,
> implements ContactFormOnSubmitConstraintValidationService_Interface<T, E>
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  // the violation container with its internal type
  #contactFormRepository: ContactFormRepository_Interface;
  #inputValidationService: ContactFormConstraintValidationService_Interface;

  #validateEmailLambda: OnSubmitConstraintValidation_Lambda<T>;
  #validateGeneralLocationLambda: OnSubmitConstraintValidation_Lambda<T>;
  #validateServiceSelectionLambda: OnSubmitConstraintValidation_Lambda<T>;
  #validateMessageLambda: OnSubmitConstraintValidation_Lambda<T>;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

    contactFormRepository: ContactFormRepository_Interface,
    inputValidationService: ContactFormConstraintValidationService_Interface,

    validateEmailLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateGeneralLocationLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateServiceSelectionLambda: OnSubmitConstraintValidation_Lambda<T>,
    validateMessageLambda: OnSubmitConstraintValidation_Lambda<T>,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#contactFormRepository = contactFormRepository;
    this.#inputValidationService = inputValidationService;

    this.#validateEmailLambda = validateEmailLambda;
    this.#validateGeneralLocationLambda = validateGeneralLocationLambda;
    this.#validateServiceSelectionLambda = validateServiceSelectionLambda;
    this.#validateMessageLambda = validateMessageLambda;
  }

  // simple helper to reduce repetition on certain logging patterns considered more standard in the
  // given impl. Does not commit the log though, so to let the source of the log have final control on commit.
  // This allows the point of origin to add additional attributes if necessary.
  #loggingHelperForPrivateMethods(
    invocationId: InvocationId,

    privateMethodName: string,
    isValid: boolean,
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
        OnSubmitConstraintValidationServiceLogKeys_Enum.INVOKED_PRIVATE_METHOD,
        privateMethodName,
      )
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.IS_VALID,
        isValid,
      );
  }

  #loggingHelperForPublicMethods(
    invocationId: InvocationId,

    publicMethodName: string,
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
        publicMethodName,
      );
  }

  //add method per specific input validation as a decorator and application to the container.

  #validateEmail(
    invocationId: InvocationId,

    container: T,
  ): void {
    const email: Email = this.#contactFormRepository.getEmail(invocationId);

    const isValid: boolean = this.#inputValidationService.validateEmail(
      invocationId,

      email,
    );

    this.#loggingHelperForPrivateMethods(
      invocationId,

      "validateEmail",
      isValid,
    ).commit();

    this.#validateEmailLambda(
      this.#logger,
      invocationId,

      isValid,
      container,
    );
  }

  #validateGeneralLocation(
    invocationId: InvocationId,

    container: T,
  ): void {
    const generalLocation: GeneralLocation =
      this.#contactFormRepository.getGeneralLocation(invocationId);

    const isValid: boolean =
      this.#inputValidationService.validateGeneralLocation(
        invocationId,

        generalLocation,
      );

    this.#loggingHelperForPrivateMethods(
      invocationId,

      "validateGeneralLocation",
      isValid,
    ).commit();

    this.#validateGeneralLocationLambda(
      this.#logger,
      invocationId,

      isValid,
      container,
    );
  }

  #validateServiceSelection(
    invocationId: InvocationId,

    container: T,
  ): void {
    const serviceSelection: ServiceSelection =
      this.#contactFormRepository.getServiceSelection(invocationId);

    const isValid: boolean =
      this.#inputValidationService.validateServiceSelection(
        invocationId,

        serviceSelection,
      );

    this.#loggingHelperForPrivateMethods(
      invocationId,

      "validateServiceSelection",
      isValid,
    ).commit();

    this.#validateServiceSelectionLambda(
      this.#logger,
      invocationId,

      isValid,
      container,
    );
  }

  #validateMessage(
    invocationId: InvocationId,

    container: T,
  ): void {
    const message: Message =
      this.#contactFormRepository.getMessage(invocationId);

    const isValid: boolean = this.#inputValidationService.validateMessage(
      invocationId,

      message,
    );

    this.#loggingHelperForPrivateMethods(
      invocationId,

      "validateMessage",
      isValid,
    ).commit();

    this.#validateMessageLambda(
      this.#logger,
      invocationId,

      isValid,
      container,
    );
  }

  validateInputs(
    invocationId: string,

    container: T,
  ): void {
    const log: Log_Interface = this.#loggingHelperForPublicMethods(
      invocationId,

      "validateInputs",
    ).addAttribute(
      OnSubmitConstraintValidationServiceLogKeys_Enum.RECEIVED_ARGS,
      `container:${container.toString()}`,
    );

    this.#validateEmail(
      invocationId,

      container,
    );

    this.#validateGeneralLocation(
      invocationId,

      container,
    );

    this.#validateServiceSelection(
      invocationId,

      container,
    );

    this.#validateMessage(
      invocationId,

      container,
    );

    log
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.FINAL_CONTAINER_STATE,
        container.toString(),
      )
      .commit();
  }
}

export { ContactFormOnSubmitConstraintValidationService_Impl };
