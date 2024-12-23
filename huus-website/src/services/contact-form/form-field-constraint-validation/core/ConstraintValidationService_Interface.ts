// the methods will generally be pure functions, returning a boolean on whether
// the given value is valid or not. This way, this instance can still have a defined logger
// but also still be reusable.

// these do the actual pattern checking and the like, but its unopinionated in the actual internal impl
// you can use regex or comparators or whatever

export interface ContactFormConstraintValidationService_Interface {
  validateEmail(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean;

  validateGeneralLocation(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean;

  validateServiceSelection(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean;

  validateMessage(
    input: string,
    instantiationId: string,
    submitId: string,
  ): boolean;
}

export type ConstraintValidation_Lambda = (input: string) => boolean;
