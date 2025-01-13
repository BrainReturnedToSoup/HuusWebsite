import {
  ContactFormSliceActions,
  ContactFormSliceSelectors,
} from "../../react-redux/slices/contactForm";

import { AppStore } from "../../react-redux/store";
import { ContactFormRepository_Interface } from "./ContactFormRepository_Interface";

class ContactFormRepository_Impl implements ContactFormRepository_Interface {
  #store: AppStore;
  #selectors: ContactFormSliceSelectors;
  #actions: ContactFormSliceActions;

  constructor(
    store: AppStore,
    selectors: ContactFormSliceSelectors,
    actions: ContactFormSliceActions,
  ) {
    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  getFirstName(): string {
    return this.#selectors.firstName(this.#store);
  }

  setFirstName(firstName: string): void {
    this.#store.dispatch(this.#actions.firstName(firstName));
  }

  getLastName(): string {
    return this.#selectors.lastName(this.#store);
  }

  setLastName(lastName: string): void {
    this.#store.dispatch(this.#actions.lastName(lastName));
  }

  getEmail(): string {
    return this.#selectors.email(this.#store);
  }

  setEmail(email: string): void {
    this.#store.dispatch(this.#actions.email(email));
  }

  getEmailError(): string {
    return this.#selectors.emailError(this.#store);
  }

  setEmailError(errorMessage: string): void {
    this.#store.dispatch(this.#actions.emailError(errorMessage));
  }

  getGeneralLocation(): string {
    return this.#selectors.generalLocation(this.#store);
  }

  setGeneralLocation(location: string): void {
    this.#store.dispatch(this.#actions.generalLocation(location));
  }

  getGeneralLocationError(): string {
    return this.#selectors.generalLocationError(this.#store);
  }

  setGeneralLocationError(errorMessage: string): void {
    this.#store.dispatch(
      this.#actions.generalLocationError(errorMessage),
    );
  }

  getServiceSelection(): string {
    return this.#selectors.serviceSelection(this.#store);
  }

  setServiceSelecation(selection: string): void {
    this.#store.dispatch(this.#actions.serviceSelection(selection));
  }

  getServiceSelectionError(): string {
    return this.#selectors.serviceSelectionError(this.#store);
  }

  setServiceSelectionError(errorMessage: string): void {
    this.#store.dispatch(
      this.#actions.serviceSelectionError(errorMessage),
    );
  }

  getMessage(): string {
    return this.#selectors.message(this.#store);
  }

  setMessage(message: string): void {
    this.#store.dispatch(this.#actions.message(message));
  }

  getMessageError(): string {
    return this.#selectors.messageError(this.#store);
  }

  setMessageError(errorMessage: string): void {
    this.#store.dispatch(this.#actions.messageError(errorMessage));
  }

  submitIsPending(): boolean {
    return this.#selectors.submitIsPending(this.#store);
  }

  setPendingSubmit(isPending: boolean): void {
    this.#store.dispatch(this.#actions.submitIsPending(isPending));
  }

  getSubmitSucceeded(): boolean {
    return this.#selectors.submitSucceeded(this.#store);
  }

  setSubmitSucceeded(hasSucceeded: boolean): void {
    this.#store.dispatch(this.#actions.submitSucceeded(hasSucceeded));
  }

  getFormErrorMessage(): string {
    return this.#selectors.formErrorMessage(this.#store);
  }

  setFormErrorMessage(errorMessage: string): void {
    this.#store.dispatch(this.#actions.formErrorMessage(errorMessage));
  }

  getInputsDisabled(): boolean {
    return this.#selectors.inputsDisabled(this.#store);
  }

  setInputsDisabled(isDisabled: boolean): void {
    this.#store.dispatch(this.#actions.inputsDisabled(isDisabled));
  }

  getSubmitId(): string {
    return this.#selectors.submitId(this.#store);
  }

  setSubmitId(uuid: string): void {
    this.#store.dispatch(this.#actions.submitId(uuid));
  }
}

export { ContactFormRepository_Impl };
