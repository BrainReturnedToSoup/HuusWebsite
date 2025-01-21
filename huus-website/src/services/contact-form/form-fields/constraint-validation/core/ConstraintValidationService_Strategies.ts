import { Log_Interface } from "../../../../../logging/logger/Log_Interface";
import { Logger_Interface } from "../../../../../logging/logger/Logger_Interface";
import { InvocationId } from "../../../../../logging/Logging_types";
import { ConstraintValidationServiceLogKeys_Enum } from "./ConstraintValidationService_Enum";
import { ConstraintValidation_Lambda } from "./ConstraintValidationService_Impl";

const validateEmail: ConstraintValidation_Lambda = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  input: string,
): boolean => {
  // RFC 5322 compliant
  const emailRegex: RegExp =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const matches: boolean = emailRegex.test(input);

  logger
    .createNewLog()
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
      invocationId,
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOKED_LAMBDA,
      "validateEmail",
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.CONSTRAINT_DESC,
      "RegExp pattern checking against RFC 5322 compliant email pattern.",
    )
    .commit();

  return matches;
};

const validateGeneralLocation: ConstraintValidation_Lambda = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  input: string,
): boolean => {
  // can't be empty
  // not making too many assumptions on the standard format of this input
  // may include a dedicated zip code input field for that location standardization
  // without asking for their finite address

  const isValid: boolean = input.length !== 0 && input.trim().length !== 0;

  logger
    .createNewLog()
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
      invocationId,
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOKED_LAMBDA,
      "validateGeneralLocation",
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.CONSTRAINT_DESC,
      "Simple condition to check for an empty string.",
    )
    .commit();

  return isValid;
};

const validateServiceSelection: ConstraintValidation_Lambda = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  input: string,
): boolean => {
  // can't be empty
  // going to have such attempt to match a set of pre-defined services
  // but that will be implemented later

  const isValid: boolean = input.length !== 0 && input.trim().length !== 0;

  logger
    .createNewLog()
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
      invocationId,
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOKED_LAMBDA,
      "validateServiceSelection",
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.CONSTRAINT_DESC,
      "Simple condition to check for an empty string.",
    )
    .commit();

  return isValid;
};

const validateMessage: ConstraintValidation_Lambda = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  input: string,
): boolean => {
  // can't be empty
  // may add something like 'min length must be atleast 20' or something but for now this works

  const isValid: boolean = input.length !== 0 && input.trim().length !== 0;

  logger
    .createNewLog()
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
      invocationId,
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.INVOKED_LAMBDA,
      "validateMessage",
    )
    .addAttribute(
      ConstraintValidationServiceLogKeys_Enum.CONSTRAINT_DESC,
      "Simple condition to check for an empty string.",
    )
    .commit();

  return isValid;
};

export {
  validateEmail,
  validateGeneralLocation,
  validateServiceSelection,
  validateMessage,
};
