// the methods will generally be pure functions, returning a boolean on whether
// the given value is valid or not. This way, this instance can still have a defined logger
// but also still be reusable.

import {
  Email,
  GeneralLocation,
  Message,
  ServiceSelection,
} from "../../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

import { InvocationId } from "../../../../../logging/Logging_types";

// these do the actual pattern checking and the like, but its unopinionated in the actual internal impl
// you can use regex or comparators or whatever

export interface ContactFormConstraintValidationService_Interface {
  validateEmail(
    invocationId: InvocationId,

    input: Email,
  ): boolean;

  validateGeneralLocation(
    invocationId: InvocationId,

    input: GeneralLocation,
  ): boolean;

  validateServiceSelection(
    invocationId: InvocationId,

    input: ServiceSelection,
  ): boolean;

  validateMessage(
    invocationId: InvocationId,

    input: Message,
  ): boolean;
}
