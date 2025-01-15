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
import { Logger_Interface } from "../../../logging/Logger_Interface";
import { Log_Interface } from "../../../logging/Log_Interface";
import {
  ViewPortWidth,
  ViewPortPositionY,
} from "../../../domain-types/app-window/AppWindow_DomainTypes";
import { AppWindowRepositoryLogKeys_Enum } from "./AppWindowRepository_Enum";

export interface InstanceMetaData {
  instanceId: string;
}

class AppWindowRepository_Impl implements AppWindowRepository_Interface {
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #store: AppStore;
  #selectors: AppWindowSliceSelectors;
  #actions: AppWindowSliceActions;

  #subscribers: Map<StateChangeSubscriberId, StateChangeSubscriber_Lambda>;

  // have it in the back pocket just in case.
  #storeStateUnsubscribe: AppStoreUnsubscribe;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

    store: AppStore,
    selectors: AppWindowSliceSelectors,
    actions: AppWindowSliceActions,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;

    this.#subscribers = new Map<
      StateChangeSubscriberId,
      StateChangeSubscriber_Lambda
    >();

    // BINDING TO REDUX STORE ON-CHANGE BUT ITS THE WHOLE STORE CHANGING THAT CAUSES THIS TO FIRE. KEEP THAT IN MIND
    const reduxStateUnsubscribe = this.#store.subscribe(() => {
      const state = this.#store.getState().appWindow;

      for (const [, subscriberLambda] of this.#subscribers) {
        subscriberLambda(state);
      }
    });

    this.#storeStateUnsubscribe = reduxStateUnsubscribe;
  }

  getViewPortWidth(): ViewPortWidth {
    const viewPortWidth: ViewPortWidth = this.#selectors.viewPortWidth(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getViewPortWidth",
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.OBSERVED_VALUE,
        viewPortWidth,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.RETURNED_VALUE,
        viewPortWidth,
      )
      .commit();

    return viewPortWidth;
  }

  setViewPortWidth(
    viewPortWidth: ViewPortWidth,
    changeSource: AppWindowChangeSources,
  ): void {
    // This essentially ensures that applying a state change involves say more than one
    // member of state within the given store, but done so like a single 'transaction'.
    // This ensures that any associated listeners of state via 'store.subscribe(...)'
    // only receive a single event per domain-centric state transition.

    this.#store.dispatch((dispatch) => {
      dispatch(this.#actions.setViewPortWidth(viewPortWidth));
      dispatch(this.#actions.setViewPortWidth_lastChangeSource(changeSource));
    });

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setViewPortWidth",
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `viewPortWidth:${viewPortWidth},changeSource:${changeSource}`,
      )
      .addAttribute(AppWindowRepositoryLogKeys_Enum.SET_VALUE, viewPortWidth)
      .commit();
  }

  getViewPortPositionY(): ViewPortPositionY {
    const viewPortPositionY: ViewPortPositionY =
      this.#selectors.viewPortPositionY(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getViewPortPositionY",
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.OBSERVED_VALUE,
        viewPortPositionY,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.RETURNED_VALUE,
        viewPortPositionY,
      )
      .commit();

    return viewPortPositionY;
  }

  setViewPortPositionY(
    viewPortPositionY: ViewPortPositionY,
    changeSource: AppWindowChangeSources,
  ): void {
    // This essentially ensures that applying a state change involves say more than one
    // member of state within the given store, but done so like a single 'transaction'.
    // This ensures that any associated listeners of state via 'store.subscribe(...)'
    // only receive a single event per domain-centric state transition.

    this.#store.dispatch((dispatch) => {
      dispatch(this.#actions.setViewPortPositionY(viewPortPositionY));
      dispatch(
        this.#actions.setViewPortPositionY_lastChangeSource(changeSource),
      );
    });

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setViewPortPositionY",
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `viewPortPositionY:${viewPortPositionY},changeSource:${changeSource}`,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.SET_VALUE,
        viewPortPositionY,
      )
      .commit();
  }

  subscribeToRepositoryStateChange(
    subscriberId: StateChangeSubscriberId,
    callback: StateChangeSubscriber_Lambda,
  ): void {
    const id: string = subscriberId;

    if (this.#subscribers.has(id)) {
      const err = new SubscriberAlreadyExists_Error();

      // add some additional properties beyond just Error maybe ?
      // for instance adding additional IDs on the Error itself ?

      throw err;
    }

    this.#subscribers.set(id, callback);

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.NEW_SUBSCRIBER,
        subscriberId,
      )
      .commit();
  }

  unsubscribeFromRepositoryStateChange(
    subscriberId: StateChangeSubscriberId,
  ): void {
    const id: string = subscriberId;

    if (!this.#subscribers.has(id)) {
      const err = new SubscriberDoesNotExist_Error();

      // add some additional properties beyond just Error maybe ?
      // for instance adding additional IDs on the Error itself ?

      throw err;
    }

    this.#subscribers.delete(id);

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(AppWindowRepositoryLogKeys_Enum.UNSUBSCRIBED, subscriberId)
      .commit();
  }
}

export { AppWindowRepository_Impl };
