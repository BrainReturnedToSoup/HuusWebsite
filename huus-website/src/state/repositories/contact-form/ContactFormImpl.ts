import {
  contactFormSliceActions,
  ContactFormSliceActions,
  contactFormSliceSelectors,
  ContactFormSliceSelectors,
} from "../../react-redux-impl/slices/contactForm";
import { AppStore, store } from "../../react-redux-impl/store";
import { ContactFormRepositoryInterface } from "./ContactFormInterface";

class ContactFormRepositoryImpl implements ContactFormRepositoryInterface {
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

  getEmail(): string {
    return this.#selectors.yourEmail_input(this.#store);
  }

  setEmail(email: string): void {
    this.#store.dispatch(this.#actions.yourEmail_setInput(email));
  }

  getEmailError(): string {
    return this.#selectors.yourEmail_errorMessage(this.#store);
  }

  setEmailError(errorMessage: string): void {
    this.#store.dispatch(this.#actions.yourEmail_setErrorMessage(errorMessage));
  }


  getGeneralLocation(): string {
      return this.#selectors.generalLocation_input(this.#store);
  }

  setGeneralLocation(location: string): void {
      this.#store.dispatch(this.#actions.generalLocation_setInput(location));
  }

  getGeneralLocationError(): string {
      return this.#selectors.generalLocation_errorMessage(this.#store);
  }

  setGeneralLocationError(errorMessage: string): void {
      this.#store.dispatch(this.#actions.generalLocation_setErrorMessage(errorMessage));
  }


  getServiceSelection(): string {
      return this.#selectors.serviceSelection_input(this.#store);
  }

  setServiceSelecation(selection: string): void {
      this.#store.dispatch(this.#actions.serviceSelection_setInput(selection));
  }

  getServiceSelectionError(): string {
      return this.#selectors.serviceSelection_errorMessage(this.#store);
  }

  setServiceSelectionError(errorMessage: string): void {
      this.#store.dispatch(this.#actions.serviceSelection_setErrorMessage(errorMessage));
  }


  getMessage(): string {
      return this.#selectors.message_input(this.#store);
  }

  setMessage(message: string): void {
      this.#store.dispatch(this.#actions.message_setInput(message));
  }

  getMessageError(): string {
      return this.#selectors.message_errorMessage(this.#store);
  }

  setMessageError(errorMessage: string): void {
      this.#store.dispatch(this.#actions.message_setErrorMessage(errorMessage));
  }


  getPendingSubmit(): boolean {
      return this.#selectors.global_pendingSubmit(this.#store);
  }

  setPendingSubmit(isPending: boolean): void {
      this.#store.dispatch(this.#actions.global_setPendingSubmit(isPending));
  }


  getSubmitSucceeded(): boolean {
      return this.#selectors.global_submitSucceeded(this.#store);
  }

  setSubmitSucceeded(hasSucceeded: boolean): void {
      this.#store.dispatch(this.#actions.global_setSubmitSucceeded(hasSucceeded));
  }


  getErrorMessage(): string {
      return this.#selectors.global_errorMessage(this.#store);
  }

  setErrorMessage(errorMessage: string): void {
      this.#store.dispatch(this.#actions.global_setErrorMessage(errorMessage));
  }


  getInputsDisabled(): boolean {
      return this.#selectors.global_inputsDisabled(this.#store);
  }

  setInputsDisabled(isDisabled: boolean): void {
      this.#store.dispatch(this.#actions.global_setInputsDisabled(isDisabled));
  }
}

const singletonForAppUse = new ContactFormRepositoryImpl(
  store,
  contactFormSliceSelectors,
  contactFormSliceActions,
);

const contactFormRepositoryImpl = singletonForAppUse;

// the way imports work, declaring the singleton like this allows it to be used, and thus the raw
// import of the module turns the module into effectively a mini IoC container. 
export { ContactFormRepositoryImpl, contactFormRepositoryImpl };
