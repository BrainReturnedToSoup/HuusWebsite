import { Logger_Interface } from "../../../../logging/logger/Logger_Interface";
import { DomBodyRepository_Interface } from "../../../../state/repositories/DOM/DomBodyRepository_Interface";
import { NavButton } from "./nav/nav-button/DefaultNavButton_Interface";
import { InvocationIdFactory_LambdaInterface } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";

export interface NavBarProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  navButtons: NavButton[];
  domBodyRepository: DomBodyRepository_Interface;

  componentUsageSource: string;
}
