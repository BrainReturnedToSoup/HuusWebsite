import { ConstraintViolationLabels_Enum } from "../../_errors/contraint-violation/ContraintViolationLabels_Enum";
import { ConstraintViolationContainer_Interface } from "../../_errors/contraint-violation/ConstraintViolationContainer_Interface";

import { contactFormRepository } from "../../../../state/repositories/contact-form/ContactFormRepository_Singleton";

import { ContactFormOnSubmitConstraintValidationService_Impl } from "./OnSubmitConstraintValidationService_Impl";
import { contactFormConstraintValidationService } from "../core/ConstraintValidationService_Singleton";

import {
  onSubmitValidateEmail,
  onSubmitValidateGeneralLocation,
  onSubmitValidateServiceSelection,
  onSubmitValidateMessage,
} from "./OnSubmitConstraintValidationService_Strategies";

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
  );

export { contactFormOnSubmitConstraintValidationService };
