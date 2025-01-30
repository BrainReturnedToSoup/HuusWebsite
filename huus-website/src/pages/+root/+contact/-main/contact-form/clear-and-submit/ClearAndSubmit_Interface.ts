import { Logger_Interface } from "../../../../../../logging/logger/Logger_Interface";
import { InvocationIdFactory_LambdaInterface } from "../../../../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { ContactFormResetService_Interface } from "../../../../../../services/contact-form/form-reset/FormResetService_Interface";

export interface ClearAndSubmitProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  formResetService: ContactFormResetService_Interface;
}
