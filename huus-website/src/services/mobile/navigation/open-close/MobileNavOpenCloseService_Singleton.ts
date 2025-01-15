import {
  InstanceMetaData,
  MobileNavOpenCloseService_Impl,
} from "./MobileNavOpenCloseService_Impl";

import { mobileNavRepository } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Singleton";
import { defaultLogger } from "../../../../logging/default/DefaultLogger_Singleton";

const instanceMetaData: InstanceMetaData = {
  instanceId: "MOBILE-NAV-OPEN-CLOSE-SERVICE-DEFAULT",
};

const mobileNavOpenCloseService = new MobileNavOpenCloseService_Impl(
  instanceMetaData,
  defaultLogger,

  mobileNavRepository,
);

export { mobileNavOpenCloseService };
