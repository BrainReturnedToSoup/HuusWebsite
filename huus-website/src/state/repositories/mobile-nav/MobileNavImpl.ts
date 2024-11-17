import {
  MobileNavSliceSelectors,
  MobileNavSliceActions,
  mobileNavSliceSelectors,
  mobileNavSliceActions,
} from "../../react-redux-impl/slices/mobileNav";
import { AppStore, store } from "../../react-redux-impl/store";
import { MobileNavRepositoryInterface } from "./MobileNavInterface";

class MobileNavRepositoryImpl implements MobileNavRepositoryInterface {
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
}

const singletonForAppUse = new MobileNavRepositoryImpl(
  store,
  mobileNavSliceSelectors,
  mobileNavSliceActions,
);

const mobileNavRepository = singletonForAppUse;

// the way imports work, declaring the singleton like this allows it to be used, and thus the raw
// import of the module turns the module into effectively a mini IoC container.
export { MobileNavRepositoryImpl, mobileNavRepository };
