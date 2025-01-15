import { ConstraintViolationLabels_Enum } from "../_util/contraint-violation/ContraintViolationLabels_Enum";
import { ConstraintViolationContainer_Interface } from "../_util/contraint-violation/ConstraintViolationContainer_Interface";

import { contactFormRepository } from "../../../../../state/repositories/contact-form/ContactFormRepository_Singleton";

import { ContactFormOnSubmitConstraintValidationService_Impl } from "./OnSubmitConstraintValidationService_Impl";
import { contactFormConstraintValidationService } from "../core/ConstraintValidationService_Singleton";

import {
  onSubmitValidateEmail,
  onSubmitValidateGeneralLocation,
  onSubmitValidateServiceSelection,
  onSubmitValidateMessage,
} from "./OnSubmitConstraintValidationService_Strategies";
import { defaultLogger } from "../../../../../logging/default/DefaultLogger_Singleton";

const contactFormOnSubmitConstraintValidationService =
  new ContactFormOnSubmitConstraintValidationService_Impl<
    ConstraintViolationContainer_Interface<ConstraintViolationLabels_Enum>,
    ConstraintViolationLabels_Enum
  >(
    contactFormRepository,
    contactFormConstraintValidationService,
    onSubmitValidateEmail,
    onSubmitValidateGeneralLocation,
    onSubmitValidateServiceSelection,
    onSubmitValidateMessage,
    defaultLogger,
  );

export { contactFormOnSubmitConstraintValidationService };
