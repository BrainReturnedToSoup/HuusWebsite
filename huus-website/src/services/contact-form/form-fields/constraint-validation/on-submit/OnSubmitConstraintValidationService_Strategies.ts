import { OnSubmitConstraintValidation_Lambda } from "./OnSubmitConstraintValidationService_Impl";

import { ConstraintViolationContainer_Interface } from "../_util/contraint-violation/ConstraintViolationContainer_Interface";
import { ConstraintViolationLabels_Enum } from "../_util/contraint-violation/ContraintViolationLabels_Enum";

// these lambdas are largely for adding specific enumerations
// to the supplied container basically. Can't otherwise configure that
// upon instantiation without a strategy.

// Also, since this is done via a strategy, its fairly easy to extend such
// for more complex violation conditions, perhaps even removing certain violations
// in the case another one supercedes it. You can also test in isolation this way.

const onSubmitValidateEmail: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  // logging here?

  if (!isValid) container.addViolation(ConstraintViolationLabels_Enum.EMAIL);

  // logging here?
};

const onSubmitValidateGeneralLocation: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  // logging here?

  if (!isValid)
    container.addViolation(ConstraintViolationLabels_Enum.GENERAL_LOCATION);

  // logging here?
};

const onSubmitValidateServiceSelection: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  // logging here?

  if (!isValid)
    container.addViolation(ConstraintViolationLabels_Enum.SERVICE_SELECTION);

  // logging here?
};

const onSubmitValidateMessage: OnSubmitConstraintValidation_Lambda<
  ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>
> = (isValid, container): void => {
  // logging here?

  if (!isValid) container.addViolation(ConstraintViolationLabels_Enum.MESSAGE);

  // logging here?
};

export {
  onSubmitValidateEmail,
  onSubmitValidateGeneralLocation,
  onSubmitValidateMessage,
  onSubmitValidateServiceSelection,
};
