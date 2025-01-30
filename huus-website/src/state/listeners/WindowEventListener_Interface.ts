import { InvocationId } from "../../logging/Logging_types";
// will be purely reserved for binding a low level event listener
// to apply state to the given repository.

// if a piece of code wants to otherwise listen to the piece of state
// then it can use the pub sub pattern on the given repository.

// potentially have these APIs accept an instantiation ID in the future
// for that traceability.

export interface WindowEventListener_Interface {
  // for binding to the given repository that manages a specific
  // on-event state, such as for instance syncing to the window object
  // properties indirectly though a listener defined with this interface.

  // This way, the associated repository is the true single source of truth,
  // so even a proper manual setter will reflect onto the window object itself.
  bindListener_Repository(invocationId: InvocationId): void;
  unbindListener_Repository(invocationId: InvocationId): void;

  // for binding to the given browser event listener so that
  // its invocations may be applied to the same repository as above.
  // This way, for instance if the user changes say their window size and its caught by 'resize'
  // that state snapshot is saved to the repository, ideally in a way to prevent a circular event
  // that could happen in the above binding.

  // the term 'GeneralTarget' simply means that the binder is not making any assumptions of what
  // is being binded directly. All that is known is that this listener is likely the glue between
  // the original state, and the repository state, which the app will use repositories as the single source
  // of truth generally.
  bindListener_Window(invocationId: InvocationId): void;
  unbindListener_Window(invocationId: InvocationId): void;
}
