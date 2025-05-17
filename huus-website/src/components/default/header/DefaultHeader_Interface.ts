import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { InvocationIdFactory_LambdaInterface } from "../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";

import { DomBodyRepository_Impl } from "../../../state/repositories/DOM/DomBodyRepository_Impl";

import { DefaultNavButtonProps_Interface } from "./nav-bar/nav/nav-button/DefaultNavButton_Interface";

export interface FetchImageContext {}

export interface DefaultHeaderProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  navButtons: DefaultNavButtonProps_Interface[];

  heroImageSrc: string;
  heroImageAlt: string;

  domBodyRepository: DomBodyRepository_Impl;

  componentUsageSource: string;
}
