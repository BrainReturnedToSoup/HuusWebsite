// context-specific helpers and constructs
import { contactFormInputValidatorService } from "../contactFormInputValidation/inputValidatorsImpl";

import { ContactFormSubmissionServiceInterface } from "./contactFormSubmissionInterface";
import { ContactFormRepositoryInterface } from "../../../state/repositories/contact-form/ContactFormInterface";
import { SendEmailAPIInterface } from "../../../APIs/send-email/sendEmailInterface";
import {
  EmailJsSend,
  sendEmail_emailJs,
} from "../../../APIs/send-email/emailJS/sendEmail_emailJS";
import { contactFormRepository } from "../../../state/repositories/contact-form/ContactFormImpl";
import { ContactFormErrorContainer } from "../Errors/ContactFormErrorContainer";
import { ContactFormInputValidatorInterface } from "../contactFormInputValidation/inputValidatorsInterface";

// make the API call using the supplied binded fetch, and
// handles a success or a failure by reflecting such into the corresponding
// contact form repository state.

class ContactFormSubmissionService<A, P>
  implements ContactFormSubmissionServiceInterface
{
  #contactFormRepository: ContactFormRepositoryInterface;
  #contactFormInputValidatorService: ContactFormInputValidatorInterface;
  #sendEmailAPI: SendEmailAPIInterface<A, P>;

  constructor(
    contactFormRepository: ContactFormRepositoryInterface,
    contactFormInputValidatorService: ContactFormInputValidatorInterface,
    sendEmailAPI: SendEmailAPIInterface<A, P>,
  ) {
    this.#contactFormRepository = contactFormRepository;
    this.#contactFormInputValidatorService = contactFormInputValidatorService;
    this.#sendEmailAPI = sendEmailAPI;
  }

  #onSuccess(): void {
    // pre-defined on-success behavior, which will be mainly just updating the contact form repo.
  }

  #onFailure(errorContainer: ContactFormErrorContainer): void {
    // will execute all of the prebound lambdas in the error container, which
    // those lambdas may be a closure for sending updates to the contact form repository
    // as a closure.
  }

  #validateFormFields(errorContainer: ContactFormErrorContainer): void {
    // run though all of the validator methods, which add lambdas automatically to the supplied error container.
  }

  submitContactForm(): void {
    // using an ID already in the repository, because this ID only changes if a previous submission
    // succeeds. For event sourcing and idempotent handling.
    const instantiationId = crypto.randomUUID();
    const submitId = this.#contactFormRepository.getSubmitId();

    const errorContainer = new ContactFormErrorContainer(
      null,
      instantiationId,
      submitId,
    );

    this.#validateFormFields(errorContainer);

    // add API call attempt here with the error container


    if (errorContainer.hasErrors()) {
      this.#onFailure(errorContainer);
    } else {
      this.#onSuccess();
    }
  }
}

const singletonForAppUse = new ContactFormSubmissionService<
  EmailJsSend,
  void
>(contactFormRepository, contactFormInputValidatorService, sendEmail_emailJs);

const contactFormSubmissionService = singletonForAppUse;

export { ContactFormSubmissionService, contactFormSubmissionService };
