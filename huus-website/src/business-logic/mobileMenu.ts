//used to

import { store } from "../state/store";
import mobileNavButtonMenuSlice from "../state/slices/mobileNavButtonMenu";

function openMenu(): void {
  store.dispatch(mobileNavButtonMenuSlice.actions.setOpenState(true));
}

function closeMenu(): void {
  store.dispatch(mobileNavButtonMenuSlice.actions.setOpenState(false));
}

export default { openMenu, closeMenu };
