import { MobileNavRepository_Impl } from "./MobileNavRepository_Impl";

import { store } from "../../react-redux/store";
import { mobileNavSliceSelectors } from "../../react-redux/slices/mobileNav";
import { mobileNavSliceActions } from "../../react-redux/slices/mobileNav";

const mobileNavRepository = new MobileNavRepository_Impl(
  store,
  mobileNavSliceSelectors,
  mobileNavSliceActions,
);

export { mobileNavRepository };
