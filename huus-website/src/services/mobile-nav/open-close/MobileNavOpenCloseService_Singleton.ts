import { mobileNavRepository } from "../../../state/repositories/mobile-nav/MobileNavRepository_Singleton";
import { MobileNavOpenCloseService_Impl } from "./MobileNavOpenCloseService_Impl";

const mobileNavOpenCloseService = new MobileNavOpenCloseService_Impl(
  mobileNavRepository,
);

export { mobileNavOpenCloseService };
