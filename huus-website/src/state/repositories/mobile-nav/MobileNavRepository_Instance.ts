import {
  InstanceMetaData,
  MobileNavRepository_Impl,
} from "./MobileNavRepository_Impl";

import { appStore } from "../../react-redux/store";

import {
  mobileNavSliceSelectors,
  mobileNavSliceActions,
} from "../../react-redux/slices/mobile-nav/mobileNav";

import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";

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
