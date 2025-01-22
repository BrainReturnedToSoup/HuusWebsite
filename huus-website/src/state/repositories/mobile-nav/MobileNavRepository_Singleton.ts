import {
  InstanceMetaData,
  MobileNavRepository_Impl,
} from "./MobileNavRepository_Impl";

import { appStore } from "../../react-redux/store";
import { mobileNavSliceSelectors } from "../../react-redux/slices/mobileNav";
import { mobileNavSliceActions } from "../../react-redux/slices/mobileNav";
import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Singleton";

const instanceMetaData: InstanceMetaData = {
  instanceId: "MOBILE-NAV-REPOSITORY-DEFAULT",
};

const mobileNavRepository = new MobileNavRepository_Impl(
  instanceMetaData,
  defaultLogger,
  
  appStore,
  mobileNavSliceSelectors,
  mobileNavSliceActions,
);

export { mobileNavRepository, instanceMetaData };
