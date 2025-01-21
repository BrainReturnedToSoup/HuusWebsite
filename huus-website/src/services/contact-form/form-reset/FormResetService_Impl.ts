import { ContactFormResetService_Interface } from "./FormResetService_Interface";
import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { Log_Interface } from "../../../logging/logger/Log_Interface";
import { InstanceId } from "../../../logging/Logging_types";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class ContactFormResetService_Impl
  implements ContactFormResetService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #contactFormRepository: ContactFormRepository_Interface;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

    contactFormRepository: ContactFormRepository_Interface,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#contactFormRepository = contactFormRepository;
  }

  resetForm(): void {
    // still need to implement
  }
}

export { ContactFormResetService_Impl };
