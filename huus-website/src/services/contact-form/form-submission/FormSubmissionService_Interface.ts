import { ContactFormRepository_Interface } from "../../../state/repositories/contact-form/ContactFormRepository_Interface";
import { ConstraintViolationContainer_Interface } from "../form-fields/constraint-validation/_util/contraint-violation/ConstraintViolationContainer_Interface";

// this service is meant to encapsulate *all* of the logic and
// side-effects associated with submitting the contact form (i.e. constraint validation, API reqs, state updates)
// Thus, the API invoked by the React components can be no-arg and void return.

export interface ContactFormSubmissionService_Interface {
  submitContactForm(): void;
}

// Lambdas that are meant to act as strategies on 'what to do' at various
// possible cases that could happen during the execution of 'submitContactForm' above
// and its various stages. Doing it this way allows for each stage to be configured in behavior
// so that the strategies can directly modify the repository to hold a specific state, and thus
// reflect onto the React as a side effect. However, they can still do other things, ideally
// including their own local logging using an arg dependency to do so.

// organized in the order that they are to possibly happen top to bottom

export type OnConstraintViolation_Lambda<E> = (
  constraintViolationContainer: ConstraintViolationContainer_Interface<E>,
  contactFormRepository: ContactFormRepository_Interface,
  instantiationId: string,
  submitId: string,
) => void;

export type RequestArgsBuilder_Lambda<A> = (
  contactFormRepository: ContactFormRepository_Interface,
) => A;

export type OnRequestStatusNotOk_Lambda = (
  responseStatus: string | number,
  contactFormRepository: ContactFormRepository_Interface,
  instantiationId: string,
  submitId: string,
) => void;

export type OnRequestErrorCaught_Lambda = (
  error: Error,
  contactFormRepository: ContactFormRepository_Interface,
  instantiationId: string,
  submitId: string,
) => void;

export type OnSuccess_Lambda = (
  contactFormRepository: ContactFormRepository_Interface,
  instantiationId: string,
  submitId: string,
) => void;
