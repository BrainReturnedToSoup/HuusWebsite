import {
  ContactFormRepository_Impl,
  InstanceMetaData,
} from "./ContactFormRepository_Impl";

import { appStore } from "../../react-redux/store";
import {
  contactFormSliceActions,
  contactFormSliceSelectors,
} from "../../react-redux/slices/contact-form/contactForm";
import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-REPOSITORY-DEFAULT",
} as const;

const contactFormRepository = new ContactFormRepository_Impl(
  instanceMetaData,
  defaultLogger,

  appStore,
  contactFormSliceSelectors,
  contactFormSliceActions,
);

export { contactFormRepository, instanceMetaData };
