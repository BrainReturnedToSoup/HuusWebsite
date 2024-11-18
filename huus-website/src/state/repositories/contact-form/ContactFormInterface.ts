export interface ContactFormRepositoryInterface {
  /* per form field flags for the contact form */

  getEmail(): string;
  setEmail(email: string): void;
  getEmailError(): string;
  setEmailError(errorMessage: string): void;

  getGeneralLocation(): string;
  setGeneralLocation(location: string): void;
  getGeneralLocationError(): string;
  setGeneralLocationError(errorMessage: string): void;

  getServiceSelection(): string;
  setServiceSelecation(selection: string): void;
  getServiceSelectionError(): string;
  setServiceSelectionError(errorMessage: string): void;

  getMessage(): string;
  setMessage(message: string): void;
  getMessageError(): string;
  setMessageError(errorMessage: string): void;

  /* Global flags for the contact form */

  getPendingSubmit(): boolean;
  setPendingSubmit(isPending: boolean): void;

  getSubmitSucceeded(): boolean;
  setSubmitSucceeded(hasSucceeded: boolean): void;

  getErrorMessage(): string;
  setErrorMessage(errorMessage: string): void;

  getInputsDisabled(): boolean;
  setInputsDisabled(isDisabled: boolean): void;

  getSubmitId(): string;
  setSubmitId(uuid: string): void;
}
