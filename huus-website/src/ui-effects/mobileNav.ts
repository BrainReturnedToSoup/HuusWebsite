import { store, selectors } from "../state/store";
import mobileNavSlice from "../state/slices/mobileNav";

function allowToggleDelayed(delayMs: number = 250): void {
  setTimeout(() => {
    store.dispatch(mobileNavSlice.actions.setToggleDisabledState(false));
  }, delayMs);
}

function open(): void {
  //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
  //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
  const toggleDisabled: boolean = selectors.mobileNav.toggleDisabled();

  if (toggleDisabled) return;

  store.dispatch((dispatch) => {
    allowToggleDelayed();

    dispatch(mobileNavSlice.actions.setToggleDisabledState(true));

    dispatch(mobileNavSlice.actions.setOpenState(true));
  });
}

function close(): void {
  //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
  //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
  const toggleDisabled: boolean = selectors.mobileNav.toggleDisabled();

  if (toggleDisabled) return;

  store.dispatch((dispatch) => {
    allowToggleDelayed();

    dispatch(mobileNavSlice.actions.setToggleDisabledState(true));

    dispatch(mobileNavSlice.actions.setOpenState(false));
  });
}

export default { open, close };
