// the methods will generally be pure functions, returning a boolean on whether
// the given value is valid or not. This way, this instance can still have a defined logger
// but also still be reusable.

import {
  Email,
  GeneralLocation,
  Message,
  ServiceSelection,
} from "../../../../domain-types/contact-form/ContactForm_DomainTypes";

// these do the actual pattern checking and the like, but its unopinionated in the actual internal impl
// you can use regex or comparators or whatever

export interface ContactFormConstraintValidationService_Interface {
  validateEmail(
    input: Email,
    instantiationId: string,
    submitId: string,
  ): boolean;

  validateGeneralLocation(
    input: GeneralLocation,
    instantiationId: string,
    submitId: string,
  ): boolean;

  validateServiceSelection(
    input: ServiceSelection,
    instantiationId: string,
    submitId: string,
  ): boolean;

  validateMessage(
    input: Message,
    instantiationId: string,
    submitId: string,
  ): boolean;
}

