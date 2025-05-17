import { defaultLogger } from "../../../../../logging/logger/default/DefaultLogger_Instance";
import {
  ContactFormConstraintValidationService_Impl,
  InstanceMetaData,
} from "./ConstraintValidationService_Impl";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-CONSTRAINT-VALIDATION-SERVICE-DEFAULT",
} as const;

const contactFormConstraintValidationService =
  new ContactFormConstraintValidationService_Impl(
    instanceMetaData,
    defaultLogger,
  );

export { contactFormConstraintValidationService, instanceMetaData };
