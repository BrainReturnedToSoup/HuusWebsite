import { InvocationId } from "../../../logging/Logging_types";

// this service is meant to encapsulate *all* of the logic and
// side-effects associated with submitting the contact form (i.e. constraint validation, API reqs, state updates)
// Thus, the API invoked by the React components can be no-arg and void return.

export interface ContactFormSubmissionService_Interface {
  submitForm(invocationId: InvocationId): void;
}

// Lambdas that are meant to act as strategies on 'what to do' at various
// possible cases that could happen during the execution of 'submitContactForm' above
// and its various stages. Doing it this way allows for each stage to be configured in behavior
// so that the strategies can directly modify the repository to hold a specific state, and thus
// reflect onto the React as a side effect. However, they can still do other things, ideally
// including their own local logging using an arg dependency to do so.

// organized in the order that they are to possibly happen top to bottom
