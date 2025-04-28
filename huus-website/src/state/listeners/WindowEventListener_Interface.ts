import { InvocationId } from "../../logging/Logging_types";
// will be purely reserved for binding a low level event listener
// to apply state to the given repository.

// if a piece of code wants to otherwise listen to the piece of state
// then it can use the pub sub pattern on the given repository.

// potentially have these APIs accept an instantiation ID in the future
// for that traceability.

export interface WindowEventListener_Interface {
  // for binding to the given browser event listener so that
  // its invocations may be applied to the same repository as above.
  // This way, for instance if the user changes say their window size and its caught by 'resize'
  // that state snapshot is saved to the repository, ideally in a way to prevent a circular event
  // that could happen in the above binding.
  bindListener(invocationId: InvocationId): void;
  unbindListener(invocationId: InvocationId): void;
}
