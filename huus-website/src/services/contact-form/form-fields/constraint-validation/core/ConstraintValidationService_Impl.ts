import {
  Email,
  FirstName,
  LastName,
  Message,
  ServiceSelection,
} from "../../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

import { Log_Interface } from "../../../../../logging/logger/Log_Interface";
import { Logger_Interface } from "../../../../../logging/logger/Logger_Interface";

import { InstanceId, InvocationId } from "../../../../../logging/Logging_types";
import { ConstraintValidationServiceLogKeys_Enum } from "./ConstraintValidationService_Enum";

import { ContactFormConstraintValidationService_Interface } from "./ConstraintValidationService_Interface";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class ContactFormConstraintValidationService_Impl
  implements ContactFormConstraintValidationService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  constructor(instanceMetaData: InstanceMetaData, logger: Logger_Interface) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;
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

  validateFirstName(invocationId: InvocationId, input: FirstName): boolean {
    const isValid = input.trim().length !== 0;

    this.#loggingHelper(invocationId, "validateFirstName", isValid).commit();

    return isValid;
  }

  validateLastName(invocationId: InvocationId, input: LastName): boolean {
    const isValid = input.trim().length !== 0;

    this.#loggingHelper(invocationId, "validateLastName", isValid).commit();

    return isValid;
  }

  validateEmail(
    invocationId: InvocationId,

    input: Email,
  ): boolean {
    // RFC 5322 compliant
    const emailRegex: RegExp =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const matches: boolean = emailRegex.test(input);

    const isValid = matches;

    this.#loggingHelper(invocationId, "validateEmail", isValid).commit();

    return isValid;
  }

  validateServiceSelection(
    invocationId: InvocationId,

    input: ServiceSelection,
  ): boolean {
    // can't be empty
    // going to have such attempt to match a set of pre-defined services
    // but that will be implemented later

    const isValid: boolean = input.length !== 0 && input.trim().length !== 0;

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
    // can't be empty
    // may add something like 'min length must be atleast 20' or something but for now this works

    const isValid: boolean = input.length !== 0 && input.trim().length !== 0;

    this.#loggingHelper(invocationId, "validateMessage", isValid).commit();

    return isValid;
  }
}

export { ContactFormConstraintValidationService_Impl };
