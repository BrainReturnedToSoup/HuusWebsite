import { OnSubmitConstraintValidationServiceLogKeys_Enum } from "./OnSubmitConstraintValidationService_Enum";
import { OnSubmitConstraintValidation_LambdaInterface } from "./OnSubmitConstraintValidationService_Impl";

import { ConstraintViolationContainer_Interface } from "./_util/contraint-violation/ConstraintViolationContainer_Interface";
import { OnSubmitConstraintViolationLabels_Enum } from "./_util/contraint-violation/ContraintViolationLabels_Enum";

// these lambdas are largely for adding specific enumerations
// to the supplied container basically. Can't otherwise configure that
// upon instantiation without a strategy.

// Also, since this is done via a strategy, its fairly easy to extend such
// for more complex violation conditions, perhaps even removing certain violations
// in the case another one supercedes it. You can also test in isolation this way.

const onSubmitValidateEmail: OnSubmitConstraintValidation_LambdaInterface<
  ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>
> = (
  logger,
  invocationId,

  isValid,
  container,
): void => {
  if (!isValid) {
    const violation = OnSubmitConstraintViolationLabels_Enum.EMAIL;

    logger
      .createNewLog()
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.CONSTRAINT_VIOLATION_ADDED,
        violation,
      )
      .commit();

    container.addViolation(violation);
  }
};

const onSubmitValidateGeneralLocation: OnSubmitConstraintValidation_LambdaInterface<
  ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>
> = (
  logger,
  invocationId,

  isValid,
  container,
): void => {
  if (!isValid) {
    const violation = OnSubmitConstraintViolationLabels_Enum.GENERAL_LOCATION;

    logger
      .createNewLog()
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.CONSTRAINT_VIOLATION_ADDED,
        violation,
      )
      .commit();

    container.addViolation(violation);
  }
};

const onSubmitValidateServiceSelection: OnSubmitConstraintValidation_LambdaInterface<
  ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>
> = (
  logger,
  invocationId,

  isValid,
  container,
): void => {
  if (!isValid) {
    const violation = OnSubmitConstraintViolationLabels_Enum.SERVICE_SELECTION;

    logger
      .createNewLog()
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.CONSTRAINT_VIOLATION_ADDED,
        violation,
      )
      .commit();

    container.addViolation(violation);
  }
};

const onSubmitValidateMessage: OnSubmitConstraintValidation_LambdaInterface<
  ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>
> = (
  logger,
  invocationId,

  isValid,
  container,
): void => {
  if (!isValid) {
    const violation = OnSubmitConstraintViolationLabels_Enum.MESSAGE;

    logger
      .createNewLog()
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        OnSubmitConstraintValidationServiceLogKeys_Enum.CONSTRAINT_VIOLATION_ADDED,
        violation,
      )
      .commit();

    container.addViolation(violation);
  }
};

export {
  onSubmitValidateEmail,
  onSubmitValidateGeneralLocation,
  onSubmitValidateMessage,
  onSubmitValidateServiceSelection,
};
