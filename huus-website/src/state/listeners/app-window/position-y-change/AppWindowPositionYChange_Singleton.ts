import { AppWindowPositionYChange_Impl } from "./AppWindowPositionYChange_Impl";

import { appWindowRepository } from "../../../repositories/app-window/AppWindowRepository_Singleton";

const appWindowPositionYChange = new AppWindowPositionYChange_Impl(
  appWindowRepository,
);

export { appWindowPositionYChange };
