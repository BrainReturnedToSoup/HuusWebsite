import { ContactFormResetService_Impl } from "./FormResetService_Impl";

// dependencies
import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormRepository_Singleton";

const contactFormResetService = new ContactFormResetService_Impl(
  contactFormRepository,
);

export { contactFormResetService };
