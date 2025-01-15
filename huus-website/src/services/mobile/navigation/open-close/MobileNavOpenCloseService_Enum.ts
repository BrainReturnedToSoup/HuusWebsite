export enum MobileNavOpenCloseServiceLogKeys_Enum {
  INSTANCE_ID = "instance-id",

  INVOKED_PUBLIC_METHOD = "invoked-public-method",

  VALID_STATE_TRANSITION = "valid-state-transition",

  REASON_FOR_TRANSITION_FAILURE = "reason-for-transition-failure",
}

export enum TransitionFailureReason_Enum {
  ALREADY_OPEN = "already-open",

  ALREADY_CLOSED = "already-closed",

  TOGGLE_DISABLED = "toggle-disabled",
}
