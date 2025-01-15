import { MobileNavOpenCloseService_Impl } from "./MobileNavOpenCloseService_Impl";

import { mobileNavRepository } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Singleton";
import { defaultLogger } from "../../../../logging/default/DefaultLogger_Singleton";

const mobileNavOpenCloseService = new MobileNavOpenCloseService_Impl(
  mobileNavRepository,
  defaultLogger,
);

export { mobileNavOpenCloseService };
