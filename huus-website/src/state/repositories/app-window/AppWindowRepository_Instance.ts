import {
  AppWindowRepository_Impl,
  InstanceMetaData,
} from "./AppWindowRepository_Impl";

import { appStore } from "../../react-redux/store";
import { appWindowSliceSelectors } from "../../react-redux/slices/app-window/appWindow";
import { appWindowSliceActions } from "../../react-redux/slices/app-window/appWindow";
import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";

const instanceMetaData: InstanceMetaData = {
  instanceId: "APP-WINDOW-REPOSITORY-DEFAULT",
} as const;

const appWindowRepository = new AppWindowRepository_Impl(
  instanceMetaData,
  defaultLogger,

  appStore,
  appWindowSliceSelectors,
  appWindowSliceActions,

  window,
);

export { appWindowRepository, instanceMetaData };
