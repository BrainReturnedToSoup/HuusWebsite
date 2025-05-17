import { OnSubmitConstraintValidationServiceLogKeys_Enum } from "./OnSubmitConstraintValidationService_Enum";
import { OnSubmitConstraintValidationPostHandler_LambdaInterface } from "./OnSubmitConstraintValidationService_Impl";

// these lambdas are largely for adding specific enumerations
// to the supplied container basically. Can't otherwise configure that
// upon instantiation without a strategy.

// Also, since this is done via a strategy, its fairly easy to extend such
// for more complex violation conditions, perhaps even removing certain violations
// in the case another one supercedes it. You can also test in isolation this way.
const postHandleFirstName: OnSubmitConstraintValidationPostHandler_LambdaInterface =
  (
    logger,
    invocationId,

    isValid,
    contactFormRepository,
  ): void => {
    if (!isValid) {
      const errorMessage = "Please enter your first name";

      contactFormRepository.setFirstNameError(
        invocationId,

        errorMessage,
      );
    } else {
      contactFormRepository.setFirstNameError(invocationId, "");
    }
  };

const postHandleLastName: OnSubmitConstraintValidationPostHandler_LambdaInterface =
  (
    logger,
    invocationId,

    isValid,
    contactFormRepository,
  ): void => {
    if (!isValid) {
      const errorMessage = "Please enter your last name";

      contactFormRepository.setLastNameError(
        invocationId,

        errorMessage,
      );
    } else {
      contactFormRepository.setLastNameError(invocationId, "");
    }
  };

const postHandleEmail: OnSubmitConstraintValidationPostHandler_LambdaInterface =
  (
    logger,
    invocationId,

    isValid,
    contactFormRepository,
  ): void => {
    if (!isValid) {
      const errorMessage = "Please enter a valid email";

      contactFormRepository.setEmailError(
        invocationId,

        errorMessage,
      );
    } else {
      contactFormRepository.setEmailError(invocationId, "");
    }
  };

const postHandleServiceSelection: OnSubmitConstraintValidationPostHandler_LambdaInterface =
  (
    logger,
    invocationId,

    isValid,
    contactFormRepository,
  ): void => {
    if (!isValid) {
      const errorMessage = "Please select a valid option";

      contactFormRepository.setServiceSelectionError(
        invocationId,

        errorMessage,
      );
    } else {
      contactFormRepository.setServiceSelectionError(invocationId, "");
    }
  };

const postHandleMessage: OnSubmitConstraintValidationPostHandler_LambdaInterface =
  (
    logger,
    invocationId,

    isValid,
    contactFormRepository,
  ): void => {
    if (!isValid) {
      const errorMessage = "Please enter a valid message";

      contactFormRepository.setMessageError(
        invocationId,

        errorMessage,
      );
    } else {
      contactFormRepository.setMessageError(invocationId, "");
    }
  };

export {
  postHandleFirstName,
  postHandleLastName,
  postHandleEmail,
  postHandleMessage,
  postHandleServiceSelection,
};
