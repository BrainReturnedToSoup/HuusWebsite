import {
  AppWindowWidthResizeListener_Impl,
  InstanceMetaData,
} from "./AppWindowWidthResize_Impl";

import { appWindowRepository } from "../../../repositories/app-window/AppWindowRepository_Singleton";
import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Singleton";

const instanceMetaData: InstanceMetaData = {
  instanceId: "APP-WINDOW-WIDTH-RESIZE-LISTENER-DEFAULT",
} as const;

const appWindowWidthResizeListener = new AppWindowWidthResizeListener_Impl(
  instanceMetaData,
  defaultLogger,

  appWindowRepository,
);

export { appWindowWidthResizeListener };
