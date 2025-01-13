import {
  Email,
  EmailError,
  FirstName,
  FormErrorMessage,
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
  getFirstName(): FirstName;
  setFirstName(firstName: FirstName): void;

  getLastName(): LastName;
  setLastName(lastName: LastName): void;

  getEmail(): Email;
  setEmail(email: Email): void;
  getEmailError(): EmailError;
  setEmailError(errorMessage: EmailError): void;

  getGeneralLocation(): GeneralLocation;
  setGeneralLocation(location: GeneralLocation): void;
  getGeneralLocationError(): GeneralLocationError;
  setGeneralLocationError(errorMessage: GeneralLocationError): void;

  getServiceSelection(): ServiceSelection;
  setServiceSelecation(selection: ServiceSelection): void;
  getServiceSelectionError(): ServiceSelectionError;
  setServiceSelectionError(errorMessage: ServiceSelectionError): void;

  getMessage(): Message;
  setMessage(message: Message): void;
  getMessageError(): MessageError;
  setMessageError(messageError: MessageError): void;

  submitIsPending(): SubmitIsPending;
  setPendingSubmit(submitIsPending: SubmitIsPending): void;

  getSubmitSucceeded(): SubmitSucceeded;
  setSubmitSucceeded(submitSucceeded: SubmitSucceeded): void;

  getFormErrorMessage(): FormErrorMessage;
  setFormErrorMessage(formErrorMessage: FormErrorMessage): void;

  getInputsDisabled(): InputsDisabled;
  setInputsDisabled(inputsDisabled: InputsDisabled): void;

  getSubmitId(): SubmitId;
  setSubmitId(id: SubmitId): void;
}
