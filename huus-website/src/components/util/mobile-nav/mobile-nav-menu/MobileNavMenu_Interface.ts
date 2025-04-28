import { InvocationIdFactory_LambdaInterface } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { Logger_Interface } from "../../../../logging/logger/Logger_Interface";
import { MobileNavButton } from "./mobile-nav-buttons/MobileNavButton_Interface";

export interface MobileNavMenuProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;
  componentUsageSource: string;

  mobileNavButtons: MobileNavButton[];
  closeMobileNav: () => void;
}
