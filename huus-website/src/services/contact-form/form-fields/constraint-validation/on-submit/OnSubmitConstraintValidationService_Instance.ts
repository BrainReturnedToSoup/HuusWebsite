import { OnSubmitConstraintViolationLabels_Enum } from "./_util/contraint-violation/ContraintViolationLabels_Enum";
import { ConstraintViolationContainer_Interface } from "./_util/contraint-violation/ConstraintViolationContainer_Interface";

import { contactFormRepository } from "../../../../../state/repositories/contact-form/ContactFormRepository_Instance";

import {
  ContactFormOnSubmitConstraintValidationService_Impl,
  InstanceMetaData,
} from "./OnSubmitConstraintValidationService_Impl";
import { contactFormConstraintValidationService } from "../core/ConstraintValidationService_Instance";

import {
  onSubmitValidateEmail,
  onSubmitValidateGeneralLocation,
  onSubmitValidateServiceSelection,
  onSubmitValidateMessage,
} from "./OnSubmitConstraintValidationService_Strategies";
import { defaultLogger } from "../../../../../logging/logger/default/DefaultLogger_Instance";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-ON-SUBMIT-CONSTRAINT-VALIDATION-SERVICE-DEFAULT",
} as const;

const contactFormOnSubmitConstraintValidationService =
  new ContactFormOnSubmitConstraintValidationService_Impl<
    ConstraintViolationContainer_Interface<OnSubmitConstraintViolationLabels_Enum>,
    OnSubmitConstraintViolationLabels_Enum
  >(
    instanceMetaData,
    defaultLogger,

    contactFormRepository,
    contactFormConstraintValidationService,

    onSubmitValidateEmail,
    onSubmitValidateGeneralLocation,
    onSubmitValidateServiceSelection,
    onSubmitValidateMessage,
  );

export { contactFormOnSubmitConstraintValidationService, instanceMetaData };
