import { ContactFormOnSubmitInputValidationService_Impl } from "./onSubmitInputValidationService_Impl";

// dependencies
import { contactFormRepository } from "../../../../state/repositories/contact-form/ContactFormImpl";
import { contactFormInputValidationService } from "../inputValidation/inputValidationService_Singleton";

const contactFormOnSubmitInputValidationService =
  new ContactFormOnSubmitInputValidationService_Impl(
    contactFormRepository,
    contactFormInputValidationService,
  );

export { contactFormOnSubmitInputValidationService };
