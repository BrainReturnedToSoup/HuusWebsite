import { MobileNavOpenCloseService_Interface } from "../../../services/mobile/navigation/open-close/MobileNavOpenCloseService_Interface";

import { MobileNavSetLinksService_Interface } from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Interface";

import { MobileNavLinksSetId } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";
import { InvocationIdFactory_LambdaInterface } from "../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { UseGeneralState_LambdaInterface } from "../../../state/react-state-hook/UseGeneralState_LambdaInterface";
import { DomBodyRepository_Interface } from "../../../state/repositories/DOM/DomBodyRepository_Interface";

// paired to use a generic string key so that enumerations can be switched out as it pertains to using keys
// to evaluate the mapped link text

export interface MobileNavProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  mobileNavOpenCloseService: MobileNavOpenCloseService_Interface;
  mobileNavSetLinksService: MobileNavSetLinksService_Interface;
  linkSetId: MobileNavLinksSetId;

  useGeneralState: UseGeneralState_LambdaInterface;
  domBodyRepository: DomBodyRepository_Interface;
}
