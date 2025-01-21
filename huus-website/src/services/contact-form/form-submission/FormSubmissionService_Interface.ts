import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { ConstraintViolationContainer_Interface } from "../form-fields/constraint-validation/on-submit/_util/contraint-violation/ConstraintViolationContainer_Interface";

import { InvocationId } from "../../../logging/Logging_types";
import { Log_Interface } from "../../../logging/logger/Log_Interface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

import { SubmitId } from "../../../domain-types/contact-form/ContactForm_DomainTypes";

// this service is meant to encapsulate *all* of the logic and
// side-effects associated with submitting the contact form (i.e. constraint validation, API reqs, state updates)
// Thus, the API invoked by the React components can be no-arg and void return.

export interface ContactFormSubmissionService_Interface {
  submitForm(invocationId: InvocationId): void;
}

// Lambdas that are meant to act as strategies on 'what to do' at various
// possible cases that could happen during the execution of 'submitContactForm' above
// and its various stages. Doing it this way allows for each stage to be configured in behavior
// so that the strategies can directly modify the repository to hold a specific state, and thus
// reflect onto the React as a side effect. However, they can still do other things, ideally
// including their own local logging using an arg dependency to do so.

// organized in the order that they are to possibly happen top to bottom

export type OnConstraintViolation_Lambda<E> = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  submitId: SubmitId,
  constraintViolationContainer: ConstraintViolationContainer_Interface<E>,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export type RequestArgsFactory_Lambda<A> = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  submitId: SubmitId,
  contactFormRepository: ContactFormRepository_Interface,
) => A;

export type OnRequestStatusNotOk_Lambda = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  submitId: SubmitId,
  responseStatus: string | number,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export type OnRequestErrorCaught_Lambda = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  submitId: SubmitId,
  error: Error,
  contactFormRepository: ContactFormRepository_Interface,
) => void;

export type OnSuccess_Lambda = (
  logger: Logger_Interface<Log_Interface>,
  invocationId: InvocationId,

  submitId: SubmitId,
  contactFormRepository: ContactFormRepository_Interface,
) => void;
