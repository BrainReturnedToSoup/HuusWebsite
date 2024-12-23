import { AppWindowWidthResizeListener_Impl } from "./AppWindowWidthResize_Impl";

import { appWindowRepository } from "../../../repositories/app-window/AppWindowRepository_Singleton";

const appWindowWidthResizeListener = new AppWindowWidthResizeListener_Impl(
  appWindowRepository,
);

export { appWindowWidthResizeListener };
