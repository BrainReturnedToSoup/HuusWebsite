import { ContactFormRepository_Impl } from "./ContactFormRepository_Impl";

import { appStore } from "../../react-redux/store";
import { contactFormSliceSelectors } from "../../react-redux/slices/contactForm";
import { contactFormSliceActions } from "../../react-redux/slices/contactForm";

const contactFormRepository = new ContactFormRepository_Impl(
  appStore,
  contactFormSliceSelectors,
  contactFormSliceActions,
);

export { contactFormRepository };
