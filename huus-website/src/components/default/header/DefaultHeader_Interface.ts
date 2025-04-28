import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { InvocationIdFactory_LambdaInterface } from "../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";

import { NavButton } from "./nav-bar/nav/nav-button/DefaultNavButton_Interface";

import { DomBodyRepository_Impl } from "../../../state/repositories/DOM/DomBodyRepository_Impl";

export interface FetchImageContext {}

export interface DefaultHeaderProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  navButtons: NavButton[];

  heroImageSrc: string;
  heroImageAlt: string;

  domBodyRepository: DomBodyRepository_Impl;

  componentUsageSource: string;
}
