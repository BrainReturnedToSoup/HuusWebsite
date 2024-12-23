import { AppWindowRepository_Impl } from "./AppWindowRepository_Impl";

import { store } from "../../react-redux/store";
import { appWindowSliceSelectors } from "../../react-redux/slices/app-window/appWindow";
import { appWindowSliceActions } from "../../react-redux/slices/app-window/appWindow";

const appWindowRepository = new AppWindowRepository_Impl(
  store,
  appWindowSliceSelectors,
  appWindowSliceActions,
);

export { appWindowRepository };
