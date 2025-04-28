import {
  AppWindowWidthResizeListener_Impl,
  InstanceMetaData,
} from "./AppWindowWidthResize_Impl";

import { appWindowRepository } from "../../../repositories/app-window/AppWindowRepository_Instance";
import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";
import { createInvocationId } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";

const instanceMetaData: InstanceMetaData = {
  instanceId: "APP-WINDOW-WIDTH-RESIZE-LISTENER-DEFAULT",
} as const;

const appWindowWidthResizeListener = new AppWindowWidthResizeListener_Impl(
  instanceMetaData,
  defaultLogger,

  appWindowRepository,
  window,
  128, // 128px sized width ranges for throttling updates to updates. This works when you follow a base-2 sector sizing schema to match screen sizes.
);

const invocationId = createInvocationId();

appWindowWidthResizeListener.bindListener(invocationId);

export { appWindowWidthResizeListener };
