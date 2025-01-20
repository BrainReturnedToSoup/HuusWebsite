import { InvocationId } from "../../../../logging/Logging_types";

export interface MobileNavOpenCloseService_Interface {
  open(invocationId: InvocationId): void;

  close(invocationId: InvocationId): void;
}

export type ToggleTimeoutTimeInMs = number;
