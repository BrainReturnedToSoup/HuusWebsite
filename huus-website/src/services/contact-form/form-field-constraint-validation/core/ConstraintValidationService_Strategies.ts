import { ConstraintValidation_Lambda } from "./ConstraintValidationService_Interface";

const validateEmail: ConstraintValidation_Lambda = (input: string): boolean => {
  // RFC 5322 compliant
  const emailRegex: RegExp =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const matches: boolean = emailRegex.test(input);

  return matches;
};

const validateGeneralLocation: ConstraintValidation_Lambda = (
  input: string,
): boolean => {
  // can't be empty
  // not making too many assumptions on the standard format of this input
  // may include a dedicated zip code input field for that location standardization
  // without asking for their finite address

  return input.length !== 0 && input.trim().length !== 0;
};

const validateServiceSelection: ConstraintValidation_Lambda = (
  input: string,
): boolean => {
  // can't be empty
  // going to have such attempt to match a set of pre-defined services
  // but that will be implemented later

  return input.length !== 0 && input.trim().length !== 0;
};

const validateMessage: ConstraintValidation_Lambda = (
  input: string,
): boolean => {
  // can't be empty
  // may add something like 'min length must be atleast 20' or something but for now this works

  return input.length !== 0 && input.trim().length !== 0;
};

export {
  validateEmail,
  validateGeneralLocation,
  validateServiceSelection,
  validateMessage,
};
