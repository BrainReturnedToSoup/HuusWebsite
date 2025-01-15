import { ContactFormResetService_Interface } from "./FormResetService_Interface";
import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { Logger_Interface } from "../../../logging/Logger_Interface";
import { Log_Interface } from "../../../logging/Log_Interface";

class ContactFormResetService_Impl
  implements ContactFormResetService_Interface
{
  #contactFormRepository: ContactFormRepository_Interface;
  #logger: Logger_Interface<Log_Interface>;

  constructor(
    contactFormRepository: ContactFormRepository_Interface,
    logger: Logger_Interface<Log_Interface>,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#logger = logger;
  }

  resetForm(): void {}
}

export { ContactFormResetService_Impl };
