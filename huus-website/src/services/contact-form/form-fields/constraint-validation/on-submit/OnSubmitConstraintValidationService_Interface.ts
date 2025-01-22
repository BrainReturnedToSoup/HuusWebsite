import { InvocationId } from "../../../../../logging/Logging_types";

import { ConstraintViolationContainer_Interface } from "./_util/contraint-violation/ConstraintViolationContainer_Interface";

/*
  This differs from the regular input validation, ideally wrapping around such. The premise is that this 
  just fills a container of constraint violations that are taking place. This allows a higher level application
  to then supply that container 'all at once' to potentially a strategy lambda it implements. This is good, especially
  since this is using redux under the repository wrapper, so I can extend the repository to do a single 'commit' 
  to state as an additional method.
*/

export interface ContactFormOnSubmitConstraintValidationService_Interface<
  T extends ConstraintViolationContainer_Interface<E>,
  E,
> {
  validateInputs(
    invocationId: InvocationId,

    container: T,
  ): void;
}
