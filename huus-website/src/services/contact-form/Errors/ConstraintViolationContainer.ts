type Violation = string; // switch this out with enums eventually

class ConstraintViolationContainer {
  // add a logger eventually

  #existingViolations: Set<Violation>;

  #instantiationId: string;
  #submitId: string;

  constructor(instantiationId: string, submitId: string) {
    this.#instantiationId = instantiationId;
    this.#submitId = submitId;

    this.#existingViolations = new Set<Violation>();
  }

  addViolation(violation: Violation): void {
    // log before using IDs

    this.#existingViolations.add(violation);
  }

  // useful for 'onFailure' and or 'onSuccess' handlers.
  hasNoViolations(): boolean {
    // log before using IDs

    return this.#existingViolations.size === 0;
  }

  containsViolation(violation: Violation) {
    // log before using IDs

    return this.#existingViolations.has(violation);
  }
}

export { ConstraintViolationContainer };
