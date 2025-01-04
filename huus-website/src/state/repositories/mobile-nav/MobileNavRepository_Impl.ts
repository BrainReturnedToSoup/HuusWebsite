import { AppStore } from "../../react-redux/store";

import {
  MobileNavSliceSelectors,
  MobileNavSliceActions,
} from "../../react-redux/slices/mobileNav";

import { MobileNavLinkSet } from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Interface";

import { MobileNavRepository_Interface } from "./MobileNavRepository_Interface";

class MobileNavRepository_Impl implements MobileNavRepository_Interface {
  #store: AppStore;
  #selectors: MobileNavSliceSelectors;
  #actions: MobileNavSliceActions;

  constructor(
    store: AppStore,
    selectors: MobileNavSliceSelectors,
    actions: MobileNavSliceActions,
  ) {
    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  getIsOpen(): boolean {
    return this.#selectors.isOpen(this.#store);
  }

  setIsOpen(isOpen: boolean): void {
    this.#store.dispatch(this.#actions.setOpenState(isOpen));
  }

  getIsToggleDisabled(): boolean {
    return this.#selectors.isToggleDisabled(this.#store);
  }

  setIsToggleDisabled(isDisabled: boolean): void {
    this.#store.dispatch(this.#actions.setToggleDisabledState(isDisabled));
  }

  getLinkSet(): MobileNavLinkSet | null {
    return this.#selectors.linkSet(this.#store);
  }

  setLinkSet(linkSet: MobileNavLinkSet): void {
    this.#store.dispatch(this.#actions.setLinkSet(linkSet));
  }
}

// the way imports work, declaring the singleton like this allows it to be used, and thus the raw
// import of the module turns the module into effectively a mini IoC container.
export { MobileNavRepository_Impl };
