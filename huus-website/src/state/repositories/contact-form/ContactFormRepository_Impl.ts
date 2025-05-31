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

import { Log_Interface } from "../../../logging/logger/Log_Interface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

import {
  ContactFormSliceActions,
  ContactFormSliceSelectors,
} from "../../react-redux/slices/contact-form/contactForm";

import { AppStore } from "../../react-redux/store";
import { ContactFormRepositoryLogKeys_Enum } from "./ContactFormRepository_Enum";
import { ContactFormRepository_Interface } from "./ContactFormRepository_Interface";

import { InvocationId } from "../../../logging/Logging_types";

export interface InstanceMetaData {
  instanceId: string;
}

class ContactFormRepository_Impl implements ContactFormRepository_Interface {
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #store: AppStore;
  #selectors: ContactFormSliceSelectors;
  #actions: ContactFormSliceActions;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    store: AppStore,
    selectors: ContactFormSliceSelectors,
    actions: ContactFormSliceActions,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  #loggingHelperForGetters(
    invocationId: InvocationId,

    methodName: string,
    observedValue: any,
    returnedValue: any,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        methodName,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        observedValue,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        returnedValue,
      );
  }

  #loggingHelperForSetters(
    invocationId: InvocationId,

    methodName: string,
    receivedArgs: string,
    setValue: any,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        methodName,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        receivedArgs,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, setValue);
  }

  getFirstName(invocationId: InvocationId): FirstName {
    const firstName: FirstName = this.#selectors.getFirstName(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getFirstName",
      firstName,
      firstName,
    ).commit();

    return firstName;
  }

  setFirstName(
    invocationId: InvocationId,

    firstName: FirstName,
  ): void {
    this.#store.dispatch(this.#actions.setFirstName(firstName));

    this.#loggingHelperForSetters(
      invocationId,

      "setFirstName",
      `firstName:${firstName}`,
      firstName,
    ).commit();
  }

  getFirstNameError(invocationId: InvocationId): FirstNameError {
    const firstNameError: FirstNameError = this.#selectors.getFirstNameError(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getFirstNameError",
      firstNameError,
      firstNameError,
    ).commit();

    return firstNameError;
  }

  setFirstNameError(
    invocationId: InvocationId,
    firstNameError: FirstNameError,
  ): void {
    this.#store.dispatch(this.#actions.setFirstNameError(firstNameError));

    this.#loggingHelperForSetters(
      invocationId,

      "setFirstNameError",
      `firstNameError:${firstNameError}`,
      firstNameError,
    ).commit();
  }

  getLastName(invocationId: InvocationId): LastName {
    const lastName: LastName = this.#selectors.getLastName(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getLastName",
      lastName,
      lastName,
    ).commit();

    return lastName;
  }

  setLastName(
    invocationId: InvocationId,

    lastName: LastName,
  ): void {
    this.#store.dispatch(this.#actions.setLastName(lastName));

    this.#loggingHelperForSetters(
      invocationId,

      "setLastName",
      `lastName:${lastName}`,
      lastName,
    ).commit();
  }

  getLastNameError(invocationId: InvocationId): LastNameError {
    const lastNameError: LastNameError = this.#selectors.getFirstNameError(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getLastNameError",
      lastNameError,
      lastNameError,
    ).commit();

    return lastNameError;
  }

  setLastNameError(
    invocationId: InvocationId,
    lastNameError: LastNameError,
  ): void {
    this.#store.dispatch(this.#actions.setLastNameError(lastNameError));

    this.#loggingHelperForSetters(
      invocationId,

      "setLastNameError",
      `lastNameError:${lastNameError}`,
      lastNameError,
    ).commit();
  }

  getEmail(invocationId: InvocationId): Email {
    const email: Email = this.#selectors.getEmail(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getEmail",
      email,
      email,
    ).commit();

    return email;
  }

  setEmail(
    invocationId: InvocationId,

    email: Email,
  ): void {
    this.#store.dispatch(this.#actions.setEmail(email));

    this.#loggingHelperForSetters(
      invocationId,

      "setEmail",
      `email:${email}`,
      email,
    ).commit();
  }

  getEmailError(invocationId: InvocationId): EmailError {
    const emailError: EmailError = this.#selectors.getEmailError(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getEmailError",
      emailError,
      emailError,
    ).commit();

    return emailError;
  }

  setEmailError(
    invocationId: InvocationId,

    emailError: EmailError,
  ): void {
    this.#store.dispatch(this.#actions.setEmailError(emailError));

    this.#loggingHelperForSetters(
      invocationId,

      "setEmailError",
      `emailError:${emailError}`,
      emailError,
    ).commit();
  }

  getServiceSelection(invocationId: InvocationId): ServiceSelection {
    const serviceSelection: ServiceSelection = this.#selectors.getServiceSelection(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getServiceSelection",
      serviceSelection,
      serviceSelection,
    ).commit();

    return serviceSelection;
  }

  setServiceSelection(
    invocationId: InvocationId,

    serviceSelection: ServiceSelection,
  ): void {
    this.#store.dispatch(this.#actions.setServiceSelection(serviceSelection));

    this.#loggingHelperForSetters(
      invocationId,

      "setServiceSelection",
      `serviceSelection:${serviceSelection}`,
      serviceSelection,
    ).commit();
  }

  getServiceSelectionError(invocationId: InvocationId): ServiceSelectionError {
    const serviceSelectionError: ServiceSelectionError =
      this.#selectors.getServiceSelectionError(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getServiceSelectionError",
      serviceSelectionError,
      serviceSelectionError,
    ).commit();

    return serviceSelectionError;
  }

  setServiceSelectionError(
    invocationId: InvocationId,

    serviceSelectionError: ServiceSelectionError,
  ): void {
    this.#store.dispatch(
      this.#actions.setServiceSelectionError(serviceSelectionError),
    );

    this.#loggingHelperForSetters(
      invocationId,

      "setServiceSelectionError",
      `serviceSelectionError:${serviceSelectionError}`,
      serviceSelectionError,
    ).commit();
  }

  getMessage(invocationId: InvocationId): Message {
    const message: Message = this.#selectors.getMessage(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getMessage",
      message,
      message,
    ).commit();

    return message;
  }

  setMessage(
    invocationId: InvocationId,

    message: Message,
  ): void {
    this.#store.dispatch(this.#actions.setMessage(message));

    this.#loggingHelperForSetters(
      invocationId,

      "setMessage",
      `message:${message}`,
      message,
    ).commit();
  }

  getMessageError(invocationId: InvocationId): MessageError {
    const messageError: MessageError = this.#selectors.getMessageError(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getMessageError",
      messageError,
      messageError,
    ).commit();

    return messageError;
  }

  setMessageError(
    invocationId: InvocationId,

    messageError: MessageError,
  ): void {
    this.#store.dispatch(this.#actions.setMessageError(messageError));

    this.#loggingHelperForSetters(
      invocationId,

      "setMessageError",
      `messageError:${messageError}`,
      messageError,
    ).commit();
  }

  getSubmitIsPending(invocationId: InvocationId): SubmitIsPending {
    const submitIsPending: SubmitIsPending = this.#selectors.getSubmitIsPending(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getSubmitIsPending",
      submitIsPending,
      submitIsPending,
    ).commit();

    return submitIsPending;
  }

  setSubmitIsPending(
    invocationId: InvocationId,

    submitIsPending: SubmitIsPending,
  ): void {
    this.#store.dispatch(this.#actions.setSubmitIsPending(submitIsPending));

    this.#loggingHelperForSetters(
      invocationId,

      "setSubmitIsPending",
      `submitIsPending:${submitIsPending}`,
      submitIsPending,
    ).commit();
  }

  getSubmitSucceeded(invocationId: InvocationId): SubmitSucceeded {
    const submitSucceeded: SubmitSucceeded = this.#selectors.getSubmitSucceeded(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getSubmitSucceeded",
      submitSucceeded,
      submitSucceeded,
    ).commit();

    return submitSucceeded;
  }

  setSubmitSucceeded(
    invocationId: InvocationId,

    submitSucceeded: boolean,
  ): void {
    this.#store.dispatch(this.#actions.setSubmitSucceeded(submitSucceeded));

    this.#loggingHelperForSetters(
      invocationId,

      "setSubmitSucceeded",
      `submitSuceeded:${submitSucceeded}`,
      submitSucceeded,
    ).commit();
  }

  getFormError(invocationId: InvocationId): GeneralFormError {
    const formError: GeneralFormError = this.#selectors.getGeneralFormError(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getFormError",
      formError,
      formError,
    ).commit();

    return formError;
  }

  setGeneralFormError(
    invocationId: InvocationId,

    formError: GeneralFormError,
  ): void {
    this.#store.dispatch(this.#actions.setGeneralFormError(formError));

    this.#loggingHelperForSetters(
      invocationId,

      "setFormError",
      `formError:${formError}`,
      formError,
    ).commit();
  }

  getInputsDisabled(invocationId: InvocationId): InputsDisabled {
    const inputsDisabled: InputsDisabled = this.#selectors.getInputsDisabled(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getInputsDisabled",
      inputsDisabled,
      inputsDisabled,
    ).commit();

    return inputsDisabled;
  }

  setInputsDisabled(
    invocationId: InvocationId,

    inputsDisabled: InputsDisabled,
  ): void {
    this.#store.dispatch(this.#actions.setInputsDisabled(inputsDisabled));

    this.#loggingHelperForSetters(
      invocationId,

      "setInputsDisabled",
      `inputsDisabled:${inputsDisabled}`,
      inputsDisabled,
    ).commit();
  }

  getSubmitId(invocationId: InvocationId): SubmitId {
    const submitId: SubmitId = this.#selectors.getSubmitId(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getSubmitId",
      submitId,
      submitId,
    ).commit();

    return submitId;
  }

  setSubmitId(
    invocationId: InvocationId,

    submitId: SubmitId,
  ): void {
    this.#store.dispatch(this.#actions.setSubmitId(submitId));

    this.#loggingHelperForSetters(
      invocationId,

      "setSubmitId",
      `submitId:${submitId}`,
      submitId,
    ).commit();
  }
}

export { ContactFormRepository_Impl };
