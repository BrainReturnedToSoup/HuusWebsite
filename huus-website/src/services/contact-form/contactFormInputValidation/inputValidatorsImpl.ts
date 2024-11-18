import { ContactFormRepositoryInterface } from "../../../state/repositories/contact-form/ContactFormInterface";
import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormImpl";
import { ContactFormInputValidatorInterface } from "./inputValidatorsInterface";
import { ContactFormErrorContainer } from "../Errors/ContactFormErrorContainer";

// LET ERRORS THROW TO TOP. ERRORS IN THIS SCOPE MEAN SOME BAD CODE ALTOGETHER.

// will be responsible for either directly invoking some type of state change to
// the repository, or adding a lambda to be executed later.
class ContactFormInputValidatorService
  implements ContactFormInputValidatorInterface
{
  #contactFormRepository: ContactFormRepositoryInterface;

  constructor(contactFormRepository: ContactFormRepositoryInterface) {
    this.#contactFormRepository = contactFormRepository;
  }

  // for each of these public methods, implement sub methods based on the existence of
  // 'ContactFormErrorContainer'
  validateEmail(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void {}

  validateGeneralLocation(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void {}

  validateMessage(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void {}

  validateServiceSelection(
    errorContainer: ContactFormErrorContainer | null | undefined,
  ): void {}
}

const singletonForAppUse = new ContactFormInputValidatorService(
  contactFormRepository,
);

const contactFormInputValidatorService = singletonForAppUse;

export { ContactFormInputValidatorService, contactFormInputValidatorService };
