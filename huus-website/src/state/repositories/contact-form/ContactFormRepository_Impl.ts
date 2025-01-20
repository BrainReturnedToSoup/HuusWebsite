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

import { Log_Interface } from "../../../logging/Log_Interface";
import { Logger_Interface } from "../../../logging/Logger_Interface";

import {
  ContactFormSliceActions,
  ContactFormSliceSelectors,
} from "../../react-redux/slices/contactForm";

import { AppStore } from "../../react-redux/store";
import { ContactFormRepositoryLogKeys_Enum } from "./ContactFormRepository_Enum";
import { ContactFormRepository_Interface } from "./ContactFormRepository_Interface";

import { InvocationId } from "../../../logging/Logging_types";

export interface InstanceMetaData {
  instanceId: string;
}

class ContactFormRepository_Impl implements ContactFormRepository_Interface {
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #store: AppStore;
  #selectors: ContactFormSliceSelectors;
  #actions: ContactFormSliceActions;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

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
    const firstName: FirstName = this.#selectors.firstName(this.#store);

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
    this.#store.dispatch(this.#actions.firstName(firstName));

    this.#loggingHelperForSetters(
      invocationId,

      "setFirstName",
      `firstName:${firstName}`,
      firstName,
    ).commit();
  }

  getLastName(invocationId: InvocationId): LastName {
    const lastName: LastName = this.#selectors.lastName(this.#store);

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
    this.#store.dispatch(this.#actions.lastName(lastName));

    this.#loggingHelperForSetters(
      invocationId,

      "setLastName",
      `lastName:${lastName}`,
      lastName,
    ).commit();
  }

  getEmail(invocationId: InvocationId): Email {
    const email: Email = this.#selectors.email(this.#store);

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
    this.#store.dispatch(this.#actions.email(email));

    this.#loggingHelperForSetters(
      invocationId,

      "setEmail",
      `email:${email}`,
      email,
    ).commit();
  }

  getEmailError(invocationId: InvocationId): EmailError {
    const emailError: EmailError = this.#selectors.emailError(this.#store);

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
    this.#store.dispatch(this.#actions.emailError(emailError));

    this.#loggingHelperForSetters(
      invocationId,

      "setEmailError",
      `emailError:${emailError}`,
      emailError,
    ).commit();
  }

  getGeneralLocation(invocationId: InvocationId): GeneralLocation {
    const generalLocation: GeneralLocation = this.#selectors.generalLocation(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getGeneralLocation",
      generalLocation,
      generalLocation,
    ).commit();

    return generalLocation;
  }

  setGeneralLocation(
    invocationId: InvocationId,

    generalLocation: GeneralLocation,
  ): void {
    this.#store.dispatch(this.#actions.generalLocation(generalLocation));

    this.#loggingHelperForSetters(
      invocationId,

      "setGeneralLocation",
      `generalLocation:${generalLocation}`,
      generalLocation,
    ).commit();
  }

  getGeneralLocationError(invocationId: InvocationId): GeneralLocationError {
    const generalLocationError: GeneralLocationError =
      this.#selectors.generalLocationError(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getGeneralLocationError",
      generalLocationError,
      generalLocationError,
    );

    return generalLocationError;
  }

  setGeneralLocationError(
    invocationId: InvocationId,

    generalLocationError: GeneralLocationError,
  ): void {
    this.#store.dispatch(
      this.#actions.generalLocationError(generalLocationError),
    );

    this.#loggingHelperForSetters(
      invocationId,

      "setGeneralLocationError",
      `generalLocationError:${generalLocationError}`,
      generalLocationError,
    ).commit();
  }

  getServiceSelection(invocationId: InvocationId): ServiceSelection {
    const serviceSelection: ServiceSelection = this.#selectors.serviceSelection(
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
    this.#store.dispatch(this.#actions.serviceSelection(serviceSelection));

    this.#loggingHelperForSetters(
      invocationId,

      "setServiceSelection",
      `serviceSelection:${serviceSelection}`,
      serviceSelection,
    ).commit();
  }

  getServiceSelectionError(invocationId: InvocationId): ServiceSelectionError {
    const serviceSelectionError: ServiceSelectionError =
      this.#selectors.serviceSelectionError(this.#store);

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
      this.#actions.serviceSelectionError(serviceSelectionError),
    );

    this.#loggingHelperForSetters(
      invocationId,

      "setServiceSelectionError",
      `serviceSelectionError:${serviceSelectionError}`,
      serviceSelectionError,
    ).commit();
  }

  getMessage(invocationId: InvocationId): Message {
    const message: Message = this.#selectors.message(this.#store);

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
    this.#store.dispatch(this.#actions.message(message));

    this.#loggingHelperForSetters(
      invocationId,

      "setMessage",
      `message:${message}`,
      message,
    ).commit();
  }

  getMessageError(invocationId: InvocationId): MessageError {
    const messageError: MessageError = this.#selectors.messageError(
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
    this.#store.dispatch(this.#actions.messageError(messageError));

    this.#loggingHelperForSetters(
      invocationId,

      "setMessageError",
      `messageError:${messageError}`,
      messageError,
    ).commit();
  }

  getSubmitIsPending(invocationId: InvocationId): SubmitIsPending {
    const submitIsPending: SubmitIsPending = this.#selectors.submitIsPending(
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
    this.#store.dispatch(this.#actions.submitIsPending(submitIsPending));

    this.#loggingHelperForSetters(
      invocationId,

      "setSubmitIsPending",
      `submitIsPending:${submitIsPending}`,
      submitIsPending,
    ).commit();
  }

  getSubmitSucceeded(invocationId: InvocationId): SubmitSucceeded {
    const submitSucceeded: SubmitSucceeded = this.#selectors.submitSucceeded(
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
    this.#store.dispatch(this.#actions.submitSucceeded(submitSucceeded));

    this.#loggingHelperForSetters(
      invocationId,

      "setSubmitSucceeded",
      `submitSuceeded:${submitSucceeded}`,
      submitSucceeded,
    ).commit();
  }

  getFormError(invocationId: InvocationId): FormError {
    const formError: FormError = this.#selectors.formError(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getFormError",
      formError,
      formError,
    ).commit();

    return formError;
  }

  setFormError(
    invocationId: InvocationId,

    formError: FormError,
  ): void {
    this.#store.dispatch(this.#actions.formError(formError));

    this.#loggingHelperForSetters(
      invocationId,

      "setFormError",
      `formError:${formError}`,
      formError,
    ).commit();
  }

  getInputsDisabled(invocationId: InvocationId): InputsDisabled {
    const inputsDisabled: InputsDisabled = this.#selectors.inputsDisabled(
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
    this.#store.dispatch(this.#actions.inputsDisabled(inputsDisabled));

    this.#loggingHelperForSetters(
      invocationId,

      "setInputsDisabled",
      `inputsDisabled:${inputsDisabled}`,
      inputsDisabled,
    ).commit();
  }

  getSubmitId(invocationId: InvocationId): SubmitId {
    const submitId: SubmitId = this.#selectors.submitId(this.#store);

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
    this.#store.dispatch(this.#actions.submitId(submitId));

    this.#loggingHelperForSetters(
      invocationId,

      "setSubmitId",
      `submitId:${submitId}`,
      submitId,
    ).commit();
  }
}

export { ContactFormRepository_Impl };
