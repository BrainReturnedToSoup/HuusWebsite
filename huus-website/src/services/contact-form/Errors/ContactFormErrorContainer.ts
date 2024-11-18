type Logger = (message: string) => void;
type ErrorId = string | number;
type ErrorLambda = () => void;

class LambdaExecutionError extends Error {}

// the idea is that this object instance encapsulates all of the errors detected when
// attempting to submit a form. It's supplied lambdas to eventually execute in the case
// of encountering an error.
class ContactFormErrorContainer {
  #instantiationId: string;
  #submitId: string;
  #logger: Logger | null = null;

  #existingErrors: Map<ErrorId, ErrorLambda> = new Map<ErrorId, ErrorLambda>();
  #errorsCommitted: boolean = false;

  constructor(
    logger: Logger | null,
    instantiationId: string,
    submitId: string,
  ) {
    if (typeof instantiationId !== "string") {
      throw new Error(
        "ContactFormErrorContainer:failed to instantiate 'ContactFormErrorContainer':'instantiationId' supplied is not of type 'string'. Instead '" +
          typeof instantiationId +
          "'.",
      ); // TRUE EXCEPTION, APP BREAKING IF TRUE, DON'T CATCH AND HANDLE, FIX UR CODE
    }

    if (typeof submitId !== "string") {
      throw new Error(
        "ContactFormErrorContainer:failed to instantiate 'ContactFormErrorContainer':'submitId' supplied is not of type 'string'. Instead '" +
          typeof submitId +
          "'.",
      ); // TRUE EXCEPTION, APP BREAKING IF TRUE, DON'T CATCH AND HANDLE, FIX UR CODE
    }

    if (logger) {
      this.#logger = logger;
    }

    this.#instantiationId = instantiationId;
    this.#submitId = submitId;
  }

  addError(id: ErrorId, lambda: ErrorLambda): boolean {
    if (this.#errorsCommitted === true) return false;

    if (this.#existingErrors.has(id))
      throw new Error(
        "ContactFormErrorContainer:failed to add an error lambda for execution:it appears the lambda '" +
          id +
          "' already exists on this container.",
      ); // TRUE EXCEPTION, APP BREAKING IF TRUE, DON'T CATCH AND HANDLE, FIX UR CODE

    this.#existingErrors.set(id, lambda);

    return true;
  }

  // commit the errors that exist, so that they cannot be deleted afterwards.
  // this allows the ability to add higher level 'adding and subtracting of lambdas' which makes
  // it easy to make some really intricate error handling execution.
  commit(): void {
    this.#errorsCommitted = true;
  }

  // useful for 'onFailure' and or 'onSuccess' handlers.
  hasErrors(): boolean {
    return this.#existingErrors.size !== 0;
  }

  // since all the lambdas are pre-bound, you can invoke them through an abstraction rather than returning
  // the lambda set and invoking them.
  executeAllErrorLambdas(): void {
    let currId: ErrorId | null = null;

    try {
      for (const [errorId, errorLambda] of this.#existingErrors) {
        currId = errorId;

        if (this.#logger)
          this.#logger(
            `ContactFormErrorContainer:instantiationId=${this.#instantiationId} submitId=${this.#submitId}:error lambda errorLambdaId="${errorId}" created"`,
          );

        errorLambda();
      }
    } catch (error) {
      // use this catch pattern because you can basically throw any object in JS, but I want to deal with
      // only Error and child instances.
      if (error instanceof Error) {
        const message = `ContactFormErrorContainer:instantiationId=${this.#instantiationId} submitId=${this.#submitId}:error executing an error lambda:errorLambdaId=${currId}:error message '${error.message}'`;

        if (this.#logger) this.#logger(message);

        throw new LambdaExecutionError(message);
      } else {
        console.error(
          `ContactFormErrorContainer:instantiationId=${this.#instantiationId} submitId=${this.#submitId}:error caught within "executeAllErrorLambdas" was not of a type "Error":"${typeof error}"`,
        );
      }
    }
  }
}

export { ContactFormErrorContainer };
