import { ContactFormRepositoryInterface } from "../../../state/repositories/contact-form/ContactFormInterface";
import { ConstraintViolationContainer } from "../Errors/ConstraintViolationContainer";

// add docs to explain the 'why' behind each interface
// but not necessarily how it's achieved. The 'why' is more important
// when you consider implementation of the interfaces.

export interface ContactFormSubmissionService_Interface {
  submitContactForm(): void;
}

export type RequestArgsBuilder_Lambda<A> = (
  contactFormRepository: ContactFormRepositoryInterface,
) => A;

export type OnRequestStatusNotOk_Lambda = (
  responseStatus: string | number,
  contactFormRepository: ContactFormRepositoryInterface,
  instantiationId: string,
  submitId: string,
) => void;

export type OnRequestErrorCaught_Lambda = (
  error: Error,
  contactFormRepository: ContactFormRepositoryInterface,
  instantiationId: string,
  submitId: string,
) => void;

export type OnSuccess_Lambda = (
  contactFormRepository: ContactFormRepositoryInterface,
  instantiationId: string,
  submitId: string,
) => void;

export type OnConstraintViolation_Lambda = (
  constraintViolationContainer: ConstraintViolationContainer,
  contactFormRepository: ContactFormRepositoryInterface,
  instantiationId: string,
  submitId: string,
) => void;
