import { InvocationId } from "../../../logging/Logging_types";

export interface ContactFormResetService_Interface {
  resetForm(invocationId: InvocationId): void;
}
