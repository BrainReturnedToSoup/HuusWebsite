import { InvocationId } from "../../../logging/Logging_types";

import {
  Email,
  EmailError,
  FirstName,
  FirstNameError,
  GeneralFormError,
  InputsDisabled,
  LastName,
  LastNameError,
  Message,
  MessageError,
  ServiceSelection,
  ServiceSelectionError,
  SubmitId,
  SubmitIsPending,
  SubmitSucceeded,
} from "../../../domain-data-types/contact-form/ContactForm_DomainTypes";

export interface ContactFormRepository_Interface {
  getFirstName(invocationId: InvocationId): FirstName;
  setFirstName(
    invocationId: InvocationId,

    firstName: FirstName,
  ): void;

  getFirstNameError(invocationId: InvocationId): FirstNameError;
  setFirstNameError(
    invocationId: InvocationId,

    firstNameError: FirstNameError,
  ): void;

  getLastName(invocationId: InvocationId): LastName;
  setLastName(invocationId: InvocationId, lastName: LastName): void;

  getLastNameError(invocationId: InvocationId): LastNameError;
  setLastNameError(
    invocationId: InvocationId,
    lastNameError: LastNameError,
  ): void;

  getEmail(invocationId: InvocationId): Email;
  setEmail(
    invocationId: InvocationId,

    email: Email,
  ): void;
  getEmailError(invocationId: InvocationId): EmailError;
  setEmailError(
    invocationId: InvocationId,

    emailError: EmailError,
  ): void;

  getServiceSelection(invocationId: InvocationId): ServiceSelection;
  setServiceSelection(
    invocationId: InvocationId,

    serviceSelection: ServiceSelection,
  ): void;
  getServiceSelectionError(invocationId: InvocationId): ServiceSelectionError;
  setServiceSelectionError(
    invocationId: InvocationId,

    serviceSelectionError: ServiceSelectionError,
  ): void;

  getMessage(invocationId: InvocationId): Message;
  setMessage(
    invocationId: InvocationId,

    message: Message,
  ): void;
  getMessageError(invocationId: InvocationId): MessageError;
  setMessageError(
    invocationId: InvocationId,

    messageError: MessageError,
  ): void;

  getSubmitIsPending(invocationId: InvocationId): SubmitIsPending;
  setSubmitIsPending(
    invocationId: InvocationId,

    submitIsPending: SubmitIsPending,
  ): void;

  getSubmitSucceeded(invocationId: InvocationId): SubmitSucceeded;
  setSubmitSucceeded(
    invocationId: InvocationId,

    submitSucceeded: SubmitSucceeded,
  ): void;

  getFormError(invocationId: InvocationId): GeneralFormError;
  setGeneralFormError(
    invocationId: InvocationId,

    formError: GeneralFormError,
  ): void;

  getInputsDisabled(invocationId: InvocationId): InputsDisabled;
  setInputsDisabled(
    invocationId: InvocationId,

    inputsDisabled: InputsDisabled,
  ): void;

  getSubmitId(invocationId: InvocationId): SubmitId;
  setSubmitId(
    invocationId: InvocationId,

    submitId: SubmitId,
  ): void;
}
