import { InvocationIdFactory_Lambda } from "./InvocationIdFactory_Interface";
import { InvocationId } from "./Logging_types";

export const createInvocationId: InvocationIdFactory_Lambda =
  (): InvocationId => {
    return crypto.randomUUID();
  };
