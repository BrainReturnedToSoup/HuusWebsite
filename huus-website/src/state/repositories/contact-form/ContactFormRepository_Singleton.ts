import {
  ContactFormRepository_Impl,
  InstanceMetaData,
} from "./ContactFormRepository_Impl";

import { appStore } from "../../react-redux/store";
import { contactFormSliceSelectors } from "../../react-redux/slices/contactForm";
import { contactFormSliceActions } from "../../react-redux/slices/contactForm";
import { defaultLogger } from "../../../logging/default/DefaultLogger_Singleton";

const instanceMetaData: InstanceMetaData = {
  instanceId: "CONTACT-FORM-REPOSITORY-DEFAULT",
};

const contactFormRepository = new ContactFormRepository_Impl(
  instanceMetaData,
  defaultLogger,

  appStore,
  contactFormSliceSelectors,
  contactFormSliceActions,
);

export { contactFormRepository };
