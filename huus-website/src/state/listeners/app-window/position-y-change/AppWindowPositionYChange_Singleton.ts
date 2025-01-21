import {
  AppWindowPositionYChange_Impl,
  InstanceMetaData,
} from "./AppWindowPositionYChange_Impl";

import { appWindowRepository } from "../../../repositories/app-window/AppWindowRepository_Singleton";
import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Singleton";

const instanceMetaData: InstanceMetaData = {
  instanceId: "APP-WINDOW-POSITION-Y-CHANGE-DEFAULT",
} as const;

const appWindowPositionYChange = new AppWindowPositionYChange_Impl(
  instanceMetaData,
  defaultLogger,

  appWindowRepository,
);

export { appWindowPositionYChange };
