import { InvocationIdFactory_LambdaInterface } from "../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { DomBodyRepository_Interface } from "../../../state/repositories/DOM/DomBodyRepository_Interface";
import { MobileNavButton } from "./mobile-nav-menu/mobile-nav-buttons/MobileNavButton_Interface";

// paired to use a generic string key so that enumerations can be switched out as it pertains to using keys
// to evaluate the mapped link text

export interface MobileNavProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;
  componentUsageSource: string;
  
  domBodyRepository: DomBodyRepository_Interface;
  viewPortWidth: number;
  viewPortWidthLimit: number;

  mobileNavButtons: MobileNavButton[];
}
