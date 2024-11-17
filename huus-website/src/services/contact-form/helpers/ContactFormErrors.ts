import { Logger } from "../../../lib/createFetchWithTimeout";

type ErrorId = string | number;
type ErrorLambda = () => void;

class LambdaExecutionError extends Error {}

// the idea is that this object instance encapsulates all of the errors detected when
// attempting to submit a form. It's supplied lambdas to eventually execute in the case
// of encountering an error.
export default class ContactFormErrors {
  #sendId: string | null = null;
  #logger: Logger | null = null;

  #existingErrors: Map<ErrorId, ErrorLambda> = new Map<ErrorId, ErrorLambda>();
  #errorsCommitted: boolean = false;

  constructor(logger: Logger | null, sendId: string) {
    if (logger) {
      this.#logger = logger;
    }

    if (typeof sendId !== "string") throw new Error(""); // TRUE EXCEPTION, APP BREAKING IF TRUE, DON'T CATCH AND HANDLE, FIX UR CODE

    this.#sendId = sendId;
  }

  addError(id: ErrorId, lambda: ErrorLambda): boolean {
    if (this.#existingErrors.has(id)) throw new Error(""); // TRUE EXCEPTION, APP BREAKING IF TRUE, DON'T CATCH AND HANDLE, FIX UR CODE

    if (this.#errorsCommitted === true) return false;

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
      for (const [ErrorId, ErrorLambda] of this.#existingErrors) {
        currId = ErrorId;

        if (this.#logger)
          this.#logger(
            `Error Lambda "${ErrorId}" for the send "${this.#sendId}"`,
          );

        ErrorLambda();
      }
    } catch (error) {
      // use this catch pattern because you can basically throw any object in JS, but I want to deal with
      // only Error and child instances.
      if (error instanceof Error) {
        throw new LambdaExecutionError(
          `ContactFormErrors : error executing an error lambda : Error Lambda ID "${currId}" : EmailJS send ID "${this.#sendId}" : error message "${error.message}"`,
        );
      } else {
        console.error(
          `Error caught within "executeAllErrorLambdas" was not of a type "Error" : "${typeof error}"`,
        );
      }
    }
  }
}
