import {
  ContactFormRepository_Impl,
  InstanceMetaData,
} from "./ContactFormRepository_Impl";

import { appStore } from "../../react-redux/store";
import { contactFormSliceSelectors } from "../../react-redux/slices/contactForm";
import { contactFormSliceActions } from "../../react-redux/slices/contactForm";
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
