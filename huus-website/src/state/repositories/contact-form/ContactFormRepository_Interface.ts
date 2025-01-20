import { InvocationId } from "../../../logging/Logging_types";

import {
  Email,
  EmailError,
  FirstName,
  FormError,
  GeneralLocation,
  GeneralLocationError,
  InputsDisabled,
  LastName,
  Message,
  MessageError,
  ServiceSelection,
  ServiceSelectionError,
  SubmitId,
  SubmitIsPending,
  SubmitSucceeded,
} from "../../../domain-types/contact-form/ContactForm_DomainTypes";

export interface ContactFormRepository_Interface {
  getFirstName(invocationId: InvocationId): FirstName;
  setFirstName(
    invocationId: InvocationId,

    firstName: FirstName,
  ): void;

  getLastName(invocationId: InvocationId): LastName;
  setLastName(invocationId: InvocationId, lastName: LastName): void;

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

  getGeneralLocation(invocationId: InvocationId): GeneralLocation;
  setGeneralLocation(
    invocationId: InvocationId,

    generalLocation: GeneralLocation,
  ): void;
  getGeneralLocationError(invocationId: InvocationId): GeneralLocationError;
  setGeneralLocationError(
    invocationId: InvocationId,

    errorMessage: GeneralLocationError,
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

  getFormError(invocationId: InvocationId): FormError;
  setFormError(
    invocationId: InvocationId,

    formError: FormError,
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
