export interface ConstraintViolationContainer_Interface<T> {
  addViolation(violation: T): void;

  hasNoViolations(): boolean;

  containsViolation(viocation: T): boolean;

  toString(): string;
}
