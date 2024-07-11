import { store, selectors } from "../state/store";
import mobileNavSlice from "../state/slices/mobileNav";

function allowToggleDelayed(delayMs: number = 250): void {
  setTimeout(() => {
    store.dispatch(mobileNavSlice.actions.setToggleDisabledState(false));
  }, delayMs);
}

function open(): void {
  const toggleDisabled: boolean = selectors.mobileNav.toggleDisabled();

  if (toggleDisabled) return;

  store.dispatch((dispatch) => {
    allowToggleDelayed();

    dispatch(mobileNavSlice.actions.setToggleDisabledState(true));

    dispatch(mobileNavSlice.actions.setOpenState(true));
  });
}

function close(): void {
  const toggleDisabled: boolean = selectors.mobileNav.toggleDisabled();

  if (toggleDisabled) return;

  store.dispatch((dispatch) => {
    allowToggleDelayed();

    dispatch(mobileNavSlice.actions.setToggleDisabledState(true));

    dispatch(mobileNavSlice.actions.setOpenState(false));
  });
}

export default { open, close };
