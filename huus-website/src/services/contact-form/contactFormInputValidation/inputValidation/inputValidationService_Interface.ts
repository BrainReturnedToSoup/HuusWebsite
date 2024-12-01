// the methods will generally be pure functions, returning a boolean on whether
// the given value is valid or not. This way, this instance can still have a defined logger
// but also still be reusable.

export interface ContactFormInputValidationService_Interface {
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
