import { MobileNavOpenCloseService_Interface } from "../../../services/mobile/open-close/MobileNavOpenCloseService_Interface";

import {
  MobileNavSetLinksService_Interface,
  MobileNavLinkSetId,
  MobileNavLinkTextMapping,
} from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Interface";

// paired to use a generic string key so that enumerations can be switched out as it pertains to using keys
// to evaluate the mapped link text

export interface MobileNavProps_Interface {
  mobileNavOpenCloseService: MobileNavOpenCloseService_Interface;
  mobileNavSetLinksService: MobileNavSetLinksService_Interface;
  linkSetId: MobileNavLinkSetId;
  linkTextMapping: MobileNavLinkTextMapping;
  // add logger as prop eventually
}
