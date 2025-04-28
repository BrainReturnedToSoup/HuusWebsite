import { InvocationIdFactory_LambdaInterface } from "../../../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { Logger_Interface } from "../../../../../logging/logger/Logger_Interface";

export interface MobileNavButton {
  id: string;
  text: string;
  url: string;
}

export interface MobileNavButtonProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  navButton: MobileNavButton;
}
