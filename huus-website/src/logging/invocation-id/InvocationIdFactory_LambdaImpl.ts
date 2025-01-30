import { InvocationIdFactory_LambdaInterface } from "./InvocationIdFactory_LambdaInterface";
import { InvocationId } from "../Logging_types";

export const createInvocationId: InvocationIdFactory_LambdaInterface =
  (): InvocationId => {
    return crypto.randomUUID();
  };
