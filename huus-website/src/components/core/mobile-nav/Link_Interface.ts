import {
  MobileNavLinkData,
  MobileNavLinkId,
} from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";

import { InvocationIdFactory_LambdaInterface } from "../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

export interface LinkProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  linkId: MobileNavLinkId;
  linkData: MobileNavLinkData;
}
