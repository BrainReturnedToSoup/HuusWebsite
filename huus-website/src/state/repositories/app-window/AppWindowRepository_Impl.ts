import {
  AppWindowRepository_Interface,
  StateChangeSubscriber_Lambda,
  StateChangeSubscriberId,
} from "./AppWindowRepository_Interface";

import {
  AppWindowSliceActions,
  AppWindowSliceSelectors,
} from "../../react-redux/slices/app-window/appWindow";
import { AppStore, AppStoreUnsubscribe } from "../../react-redux/store";

import { SubscriberDoesNotExist_Error } from "../_errors/SubscriberDoesNotExist_Error";
import { SubscriberAlreadyExists_Error } from "../_errors/SubscriberAlreadyExists_Error";
import { AppWindowChangeSources } from "../../react-redux/slices/app-window/appWindow_Enum";

class AppWindowRepository_Impl implements AppWindowRepository_Interface {
  #store: AppStore;
  #selectors: AppWindowSliceSelectors;
  #actions: AppWindowSliceActions;

  #subscribers: Map<StateChangeSubscriberId, StateChangeSubscriber_Lambda>;

  // have it in the back pocket just in case.
  #storeUnsubscribe: AppStoreUnsubscribe;

  constructor(
    store: AppStore,
    selectors: AppWindowSliceSelectors,
    actions: AppWindowSliceActions,
  ) {
    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;

    this.#subscribers = new Map<
      StateChangeSubscriberId,
      StateChangeSubscriber_Lambda
    >();

    // BINDING TO REDUX STORE ON-CHANGE BUT ITS THE WHOLE STORE SO KEEP IN MIND
    const reduxUnsubscribe = this.#store.subscribe(() => {
      const state = this.#store.getState().appWindow;

      for (const [, subscriberLambda] of this.#subscribers) {
        subscriberLambda(state);
      }
    });

    this.#storeUnsubscribe = reduxUnsubscribe; // save it for future use
  }

  getWidth(): number {
    return this.#selectors.width(this.#store);
  }

  setWidth(width: number, changeSource: AppWindowChangeSources): void {
    // This essentially ensures that applying a state change involves say more than one
    // member of state within the given store, but done so like a single 'transaction'.
    // This ensures that any associated listeners of state via 'store.subscribe(...)'
    // only receive a single event per domain-centric state transition.

    this.#store.dispatch((dispatch) => {
      dispatch(this.#actions.setWidth(width));
      dispatch(this.#actions.setWidth_lastChangeSource(changeSource));
    });
  }

  getPositionY(): number {
    return this.#selectors.positionY(this.#store);
  }

  setPositionY(positionY: number, changeSource: AppWindowChangeSources): void {
    // This essentially ensures that applying a state change involves say more than one
    // member of state within the given store, but done so like a single 'transaction'.
    // This ensures that any associated listeners of state via 'store.subscribe(...)'
    // only receive a single event per domain-centric state transition.

    this.#store.dispatch((dispatch) => {
      dispatch(this.#actions.setPositionY(positionY));
      dispatch(this.#actions.setPositionY_lastChangeSource(changeSource));
    });
  }

  subscribeToStateChange(
    subscriberId: StateChangeSubscriberId,
    callback: StateChangeSubscriber_Lambda,
  ): void {
    const stringified: string = String(subscriberId);

    if (this.#subscribers.has(stringified)) {
      const err = new SubscriberAlreadyExists_Error();

      // add some additional properties beyond just Error maybe ?
      // for instance adding additional IDs on the Error itself ?

      throw err;
    }

    this.#subscribers.set(stringified, callback);
  }

  unsubscribeFromState(subscriberId: StateChangeSubscriberId): void {
    const stringified: string = String(subscriberId);

    if (!this.#subscribers.has(stringified)) {
      const err = new SubscriberDoesNotExist_Error();

      // add some additional properties beyond just Error maybe ?
      // for instance adding additional IDs on the Error itself ?

      throw err;
    }

    this.#subscribers.delete(stringified);
  }
}

// ADD LOGGER EVENTUALLY

// the way imports work, declaring the singleton like this allows it to be used, and thus the raw
// import of the module turns the module into effectively a mini IoC container.
export { AppWindowRepository_Impl };
