import {
  ContactFormOnSubmitConstraintValidationService_Impl,
  onSubmitValidateEmail,
  onSubmitValidateGeneralLocation,
  onSubmitValidateServiceSelection,
  onSubmitValidateMessage,
} from "./OnSubmitConstraintValidationService_Impl";

import { ConstraintViolationLabels_Enum } from "../../_errors/contraint-violation/ContraintViolationLabels_Enum";
import { ConstraintViolationContainer_Interface } from "../../_errors/contraint-violation/ConstraintViolationContainer_Interface";

// dependencies
import { contactFormRepository } from "../../../mobile/navigation/state/repositories/contact-form/ContactFormRepository_Singleton";
import { contactFormConstraintValidationService } from "../core/ConstraintValidationService_Singleton";

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
