import {
  InstanceMetaData,
  MobileNavOpenCloseService_Impl,
} from "./MobileNavOpenCloseService_Impl";

import { mobileNavRepository } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Instance";
import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";
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
