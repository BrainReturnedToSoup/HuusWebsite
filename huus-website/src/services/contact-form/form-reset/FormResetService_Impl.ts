import { ContactFormResetService_Interface } from "./FormResetService_Interface";
import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";

class ContactFormResetService_Impl
  implements ContactFormResetService_Interface
{
  #contactFormRepository: ContactFormRepository_Interface;

  constructor(contactFormRepository: ContactFormRepository_Interface) {
    this.#contactFormRepository = contactFormRepository;
  }

  resetForm(): void {}
}

export { ContactFormResetService_Impl };
