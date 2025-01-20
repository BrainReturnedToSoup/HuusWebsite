import {
  InstanceMetaData,
  MobileNavOpenCloseService_Impl,
} from "./MobileNavOpenCloseService_Impl";

import { mobileNavRepository } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Singleton";
import { defaultLogger } from "../../../../logging/default/DefaultLogger_Singleton";
import { ToggleTimeoutTimeInMs } from "./MobileNavOpenCloseService_Interface";

const instanceMetaData: InstanceMetaData = {
  instanceId: "MOBILE-NAV-OPEN-CLOSE-SERVICE-DEFAULT",
} as const;

const toggleTimeoutTimeInMs: ToggleTimeoutTimeInMs = 300;

const mobileNavOpenCloseService = new MobileNavOpenCloseService_Impl(
  instanceMetaData,
  defaultLogger,

  mobileNavRepository,
  toggleTimeoutTimeInMs,
);

export { mobileNavOpenCloseService, instanceMetaData };
