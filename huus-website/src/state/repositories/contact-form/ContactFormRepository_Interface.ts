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
  getFirstName(): FirstName;
  setFirstName(firstName: FirstName): void;

  getLastName(): LastName;
  setLastName(lastName: LastName): void;

  getEmail(): Email;
  setEmail(email: Email): void;
  getEmailError(): EmailError;
  setEmailError(emailError: EmailError): void;

  getGeneralLocation(): GeneralLocation;
  setGeneralLocation(generalLocation: GeneralLocation): void;
  getGeneralLocationError(): GeneralLocationError;
  setGeneralLocationError(errorMessage: GeneralLocationError): void;

  getServiceSelection(): ServiceSelection;
  setServiceSelection(serviceSelection: ServiceSelection): void;
  getServiceSelectionError(): ServiceSelectionError;
  setServiceSelectionError(serviceSelectionError: ServiceSelectionError): void;

  getMessage(): Message;
  setMessage(message: Message): void;
  getMessageError(): MessageError;
  setMessageError(messageError: MessageError): void;

  getSubmitIsPending(): SubmitIsPending;
  setSubmitIsPending(submitIsPending: SubmitIsPending): void;

  getSubmitSucceeded(): SubmitSucceeded;
  setSubmitSucceeded(submitSucceeded: SubmitSucceeded): void;

  getFormError(): FormError;
  setFormError(formError: FormError): void;

  getInputsDisabled(): InputsDisabled;
  setInputsDisabled(inputsDisabled: InputsDisabled): void;

  getSubmitId(): SubmitId;
  setSubmitId(id: SubmitId): void;
}
