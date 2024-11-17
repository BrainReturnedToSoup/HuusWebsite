import {
  appWindowSliceActions,
  AppWindowSliceActions,
  appWindowSliceSelectors,
  AppWindowSliceSelectors,
} from "../../react-redux-impl/slices/appWindow";
import { AppStore, store } from "../../react-redux-impl/store";
import { AppWindowRepositoryInterface } from "./AppWindowInterface";

class AppWindowRepositoryImpl implements AppWindowRepositoryInterface {
  #store: AppStore;
  #selectors: AppWindowSliceSelectors;
  #actions: AppWindowSliceActions;

  constructor(
    store: AppStore,
    selectors: AppWindowSliceSelectors,
    actions: AppWindowSliceActions,
  ) {
    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  getWidth(): number {
    return this.#selectors.width(this.#store);
  }

  setWidth(width: number): void {
    this.#store.dispatch(this.#actions.setWidth(width));
  }

  getPositionY(): number {
    return this.#selectors.positionY(this.#store);
  }

  setPositionY(positionY: number): void {
    this.#store.dispatch(this.#actions.setPositionY(positionY));
  }
}

const singletonForAppUse = new AppWindowRepositoryImpl(
  store,
  appWindowSliceSelectors,
  appWindowSliceActions,
);

const appWindowRepository = singletonForAppUse;

// the way imports work, declaring the singleton like this allows it to be used, and thus the raw
// import of the module turns the module into effectively a mini IoC container.
export { AppWindowRepositoryImpl, appWindowRepository };
