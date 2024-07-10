import { store, selectors } from "../state/store";
import mobileNavButtonMenuSlice from "../state/slices/mobileNavButtonMenu";

function allowToggleDelayed(delayMs: number = 250): void {
  setTimeout(() => {
    store.dispatch(
      mobileNavButtonMenuSlice.actions.setToggleDisabledState(false),
    );
  }, delayMs);
}

function openMenu(): void {
  const toggleDisabled: boolean =
    selectors.mobileNavButtonMenu.toggleDisabled();

  if (toggleDisabled) return;

  store.dispatch((dispatch) => {
    allowToggleDelayed();

    dispatch(mobileNavButtonMenuSlice.actions.setToggleDisabledState(true));

    dispatch(mobileNavButtonMenuSlice.actions.setOpenState(true));
  });
}

function closeMenu(): void {
  const toggleDisabled: boolean =
    selectors.mobileNavButtonMenu.toggleDisabled();

  if (toggleDisabled) return;

  store.dispatch((dispatch) => {
    allowToggleDelayed();

    dispatch(mobileNavButtonMenuSlice.actions.setToggleDisabledState(true));

    dispatch(mobileNavButtonMenuSlice.actions.setOpenState(false));
  });
}

export default { openMenu, closeMenu };
