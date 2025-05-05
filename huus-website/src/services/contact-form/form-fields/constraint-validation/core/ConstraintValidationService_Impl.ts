import {
  Email,
  GeneralLocation,
  Message,
  ServiceSelection,
} from "../../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

import { Log_Interface } from "../../../../../logging/logger/Log_Interface";
import { Logger_Interface } from "../../../../../logging/logger/Logger_Interface";

import { InstanceId, InvocationId } from "../../../../../logging/Logging_types";
import { ConstraintValidationServiceLogKeys_Enum } from "./ConstraintValidationService_Enum";

import { ContactFormConstraintValidationService_Interface } from "./ConstraintValidationService_Interface";

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.

// will be responsible for either directly invoking some type of state change to
// the repository, or adding a lambda to be executed later.

export type ConstraintValidation_Lambda = (
  logger: Logger_Interface,
  invocationId: InvocationId,

  input: string,
) => boolean;

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class ContactFormConstraintValidationService_Impl
  implements ContactFormConstraintValidationService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #validateEmailLambda: ConstraintValidation_Lambda;
  #validateGeneralLocationLambda: ConstraintValidation_Lambda;
  #validateServiceSelectionLambda: ConstraintValidation_Lambda;
  #validateMessage: ConstraintValidation_Lambda;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    validateEmailLambda: ConstraintValidation_Lambda,
    validateGeneralLocationLambda: ConstraintValidation_Lambda,
    validateServiceSelectionLambda: ConstraintValidation_Lambda,
    validateMessage: ConstraintValidation_Lambda,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#validateEmailLambda = validateEmailLambda;
    this.#validateGeneralLocationLambda = validateGeneralLocationLambda;
    this.#validateServiceSelectionLambda = validateServiceSelectionLambda;
    this.#validateMessage = validateMessage;
  }

  // simple helper to reduce repetition on certain logging patterns considered more standard in the
  // given impl. Does not commit the log though, so to let the source of the log have final control on commit.
  // This allows the point of origin to add additional attributes if necessary.
  #loggingHelper(
    invocationId: InvocationId,

    invokedPublicMethod: string,
    isValid: boolean,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        ConstraintValidationServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        ConstraintValidationServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        invokedPublicMethod,
      )
      .addAttribute(ConstraintValidationServiceLogKeys_Enum.IS_VALID, isValid);
  }

  validateEmail(
    invocationId: InvocationId,

    input: Email,
  ): boolean {
    const isValid = this.#validateEmailLambda(
      this.#logger,
      invocationId,

      input,
    );

    this.#loggingHelper(invocationId, "validateEmail", isValid).commit();

    return isValid;
  }

  validateGeneralLocation(
    invocationId: InvocationId,

    input: GeneralLocation,
  ): boolean {
    const isValid = this.#validateGeneralLocationLambda(
      this.#logger,
      invocationId,

      input,
    );

    this.#loggingHelper(
      invocationId,
      "validateGeneralLocation",
      isValid,
    ).commit();

    return isValid;
  }

  validateServiceSelection(
    invocationId: InvocationId,

    input: ServiceSelection,
  ): boolean {
    const isValid = this.#validateServiceSelectionLambda(
      this.#logger,
      invocationId,

      input,
    );

    this.#loggingHelper(
      invocationId,
      "validateServiceSelection",
      isValid,
    ).commit();

    return isValid;
  }

  validateMessage(
    invocationId: InvocationId,

    input: Message,
  ): boolean {
    const isValid = this.#validateMessage(
      this.#logger,
      invocationId,

      input,
    );

    this.#loggingHelper(invocationId, "validateMessage", isValid).commit();

    return isValid;
  }
}

export { ContactFormConstraintValidationService_Impl };
