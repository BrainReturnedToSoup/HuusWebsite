import {
  ContactFormResetService_Impl,
  InstanceMetaData,
} from "./FormResetService_Impl";

// dependencies
import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormRepository_Instance";
import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-RESET-SERVICE-DEFAULT",
} as const;

const contactFormResetService = new ContactFormResetService_Impl(
  instanceMetaData,
  defaultLogger,

  contactFormRepository,
);

export { contactFormResetService, instanceMetaData };
