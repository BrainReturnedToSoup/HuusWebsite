import { MobileNavRepository_Impl } from "./MobileNavRepository_Impl";

import { appStore } from "../../react-redux/store";
import { mobileNavSliceSelectors } from "../../react-redux/slices/mobileNav";
import { mobileNavSliceActions } from "../../react-redux/slices/mobileNav";

const mobileNavRepository = new MobileNavRepository_Impl(
  appStore,
  mobileNavSliceSelectors,
  mobileNavSliceActions,
);

export { mobileNavRepository };
