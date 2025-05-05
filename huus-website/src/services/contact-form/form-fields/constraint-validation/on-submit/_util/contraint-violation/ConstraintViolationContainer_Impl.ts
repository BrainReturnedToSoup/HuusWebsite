import { ConstraintViolationContainer_Interface } from "./ConstraintViolationContainer_Interface";

class ConstraintViolationContainer_Impl<T>
  implements ConstraintViolationContainer_Interface<T>
{
  // add a logger eventually

  #existingViolations: Set<T>;

  #instantiationId: string;
  #submitId: string;

  constructor(instantiationId: string, submitId: string) {
    this.#instantiationId = instantiationId;
    this.#submitId = submitId;

    this.#existingViolations = new Set<T>();
  }

  addViolation(violation: T): void {
    // log before using IDs

    // added in order to allow the npm build to work, doesn't work if a reference is unused as of now.
    this.#instantiationId;
    this.#submitId;

    this.#existingViolations.add(violation);
  }

  // useful for 'onFailure' and or 'onSuccess' handlers.
  hasNoViolations(): boolean {
    // log before using IDs

    return this.#existingViolations.size === 0;
  }

  containsViolation(violation: T) {
    // log before using IDs

    return this.#existingViolations.has(violation);
  }


}

export { ConstraintViolationContainer_Impl };
