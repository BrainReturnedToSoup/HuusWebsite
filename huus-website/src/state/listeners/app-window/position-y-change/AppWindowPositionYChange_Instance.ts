import {
  AppWindowPositionYChange_Impl,
  InstanceMetaData,
} from "./AppWindowPositionYChange_Impl";

import { appWindowRepository } from "../../../repositories/app-window/AppWindowRepository_Instance";
import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";
import { createInvocationId } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";

const instanceMetaData: InstanceMetaData = {
  instanceId: "APP-WINDOW-POSITION-Y-CHANGE-DEFAULT",
} as const;

const appWindowPositionYChange = new AppWindowPositionYChange_Impl(
  instanceMetaData,
  defaultLogger,

  appWindowRepository,
  window,
  64,
);

const invocationId = createInvocationId();

appWindowPositionYChange.bindListener(invocationId);

export { appWindowPositionYChange };
