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
import { SubmitSucceeded } from "../../../domain-types/contact-form/ContactForm_DomainTypes";

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

  getFirstName(): FirstName {
    const firstName: FirstName = this.#selectors.firstName(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getFirstName",
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE, firstName)
      .addAttribute(ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE, firstName)
      .commit();

    return firstName;
  }

  setFirstName(firstName: FirstName): void {
    this.#store.dispatch(this.#actions.firstName(firstName));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setFirstName",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `firstName:${firstName}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, firstName)
      .commit();
  }

  getLastName(): LastName {
    const lastName: LastName = this.#selectors.lastName(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getLastName",
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE, lastName)
      .addAttribute(ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE, lastName)
      .commit();

    return lastName;
  }

  setLastName(lastName: LastName): void {
    this.#store.dispatch(this.#actions.lastName(lastName));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setLastName",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `lastName:${lastName}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, lastName)
      .commit();
  }

  getEmail(): Email {
    const email: Email = this.#selectors.email(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getEmail",
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE, email)
      .addAttribute(ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE, email)
      .commit();

    return email;
  }

  setEmail(email: Email): void {
    this.#store.dispatch(this.#actions.email(email));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setEmail",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `email:${email}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, email)
      .commit();
  }

  getEmailError(): EmailError {
    const emailError: EmailError = this.#selectors.emailError(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getEmailError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        emailError,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        emailError,
      )
      .commit();

    return emailError;
  }

  setEmailError(emailError: EmailError): void {
    this.#store.dispatch(this.#actions.emailError(emailError));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setEmailError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `emailError:${emailError}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, emailError)
      .commit();
  }

  getGeneralLocation(): GeneralLocation {
    const generalLocation: GeneralLocation = this.#selectors.generalLocation(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getGeneralLocation",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        generalLocation,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        generalLocation,
      )
      .commit();

    return generalLocation;
  }

  setGeneralLocation(generalLocation: GeneralLocation): void {
    this.#store.dispatch(this.#actions.generalLocation(generalLocation));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setGeneralLocation",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `generalLocation:${generalLocation}`,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.SET_VALUE,
        generalLocation,
      )
      .commit();
  }

  getGeneralLocationError(): GeneralLocationError {
    const generalLocationError: GeneralLocationError =
      this.#selectors.generalLocationError(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getGeneralLocationError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        generalLocationError,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        generalLocationError,
      )
      .commit();

    return generalLocationError;
  }

  setGeneralLocationError(generalLocationError: GeneralLocationError): void {
    this.#store.dispatch(
      this.#actions.generalLocationError(generalLocationError),
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setGeneralLocationError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `generalLocationError:${generalLocationError}`,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.SET_VALUE,
        generalLocationError,
      )
      .commit();
  }

  getServiceSelection(): ServiceSelection {
    const serviceSelection: ServiceSelection = this.#selectors.serviceSelection(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getServiceSelection",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        serviceSelection,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        serviceSelection,
      )
      .commit();

    return serviceSelection;
  }

  setServiceSelection(serviceSelection: ServiceSelection): void {
    this.#store.dispatch(this.#actions.serviceSelection(serviceSelection));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setServiceSelection",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `serviceSelection:${serviceSelection}`,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.SET_VALUE,
        serviceSelection,
      )
      .commit();
  }

  getServiceSelectionError(): ServiceSelectionError {
    const serviceSelectionError: ServiceSelectionError =
      this.#selectors.serviceSelectionError(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getServiceSelectionError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        serviceSelectionError,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        serviceSelectionError,
      )
      .commit();

    return serviceSelectionError;
  }

  setServiceSelectionError(serviceSelectionError: ServiceSelectionError): void {
    this.#store.dispatch(
      this.#actions.serviceSelectionError(serviceSelectionError),
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setServiceSelectionError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `serviceSelectionError:${serviceSelectionError}`,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.SET_VALUE,
        serviceSelectionError,
      )
      .commit();
  }

  getMessage(): Message {
    const message: Message = this.#selectors.message(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getMessage",
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE, message)
      .addAttribute(ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE, message)
      .commit();

    return message;
  }

  setMessage(message: Message): void {
    this.#store.dispatch(this.#actions.message(message));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setMessage",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `message:${message}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, message)
      .commit();
  }

  getMessageError(): MessageError {
    const messageError: MessageError = this.#selectors.messageError(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getMessageError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        messageError,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        messageError,
      )
      .commit();

    return messageError;
  }

  setMessageError(messageError: MessageError): void {
    this.#store.dispatch(this.#actions.messageError(messageError));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setMessageError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `messageError:${messageError}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, messageError)
      .commit();
  }

  getSubmitIsPending(): SubmitIsPending {
    const submitIsPending: SubmitIsPending = this.#selectors.submitIsPending(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getSubmitIsPending",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        submitIsPending,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        submitIsPending,
      )
      .commit();

    return submitIsPending;
  }

  setSubmitIsPending(submitIsPending: SubmitIsPending): void {
    this.#store.dispatch(this.#actions.submitIsPending(submitIsPending));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setSubmitIsPending",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `submitIsPending:${submitIsPending}`,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.SET_VALUE,
        submitIsPending,
      )
      .commit();
  }

  getSubmitSucceeded(): SubmitSucceeded {
    const submitSucceeded: SubmitSucceeded = this.#selectors.submitSucceeded(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getSubmitSucceeded",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        submitSucceeded,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        submitSucceeded,
      )
      .commit();

    return submitSucceeded;
  }

  setSubmitSucceeded(submitSucceeded: boolean): void {
    this.#store.dispatch(this.#actions.submitSucceeded(submitSucceeded));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setSubmitSucceeded",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `submitSucceeded:${submitSucceeded}`,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.SET_VALUE,
        submitSucceeded,
      )
      .commit();
  }

  getFormError(): FormError {
    const formError: FormError = this.#selectors.formError(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getFormError",
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE, formError)
      .addAttribute(ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE, formError)
      .commit();

    return formError;
  }

  setFormError(formError: FormError): void {
    this.#store.dispatch(this.#actions.formError(formError));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setFormError",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `formError:${formError}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, formError)
      .commit();
  }

  getInputsDisabled(): InputsDisabled {
    const inputsDisabled: InputsDisabled = this.#selectors.inputsDisabled(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getInputsDisabled",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE,
        inputsDisabled,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE,
        inputsDisabled,
      )
      .commit();

    return inputsDisabled;
  }

  setInputsDisabled(inputsDisabled: InputsDisabled): void {
    this.#store.dispatch(this.#actions.inputsDisabled(inputsDisabled));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setInputsDisabled",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `inputsDisabled:${inputsDisabled}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, inputsDisabled)
      .commit();
  }

  getSubmitId(): SubmitId {
    const submitId: SubmitId = this.#selectors.submitId(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getSubmitId",
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.OBSERVED_VALUE, submitId)
      .addAttribute(ContactFormRepositoryLogKeys_Enum.RETURNED_VALUE, submitId)
      .commit();

    return submitId;
  }

  setSubmitId(submitId: SubmitId): void {
    this.#store.dispatch(this.#actions.submitId(submitId));

    this.#logger
      .createNewLog()
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setSubmitId",
      )
      .addAttribute(
        ContactFormRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `submitId:${submitId}`,
      )
      .addAttribute(ContactFormRepositoryLogKeys_Enum.SET_VALUE, submitId)
      .commit();
  }
}

export { ContactFormRepository_Impl };
