import {
  AppWindowPositionYChange_Interface,
  WindowListenerEventHandler_Lambda,
} from "./AppWindowPositionYChange_Interface";

import {
  AppWindowRepository_Interface,
  StateChangeSubscriberId,
} from "../../../repositories/app-window/AppWindowRepository_Interface";

import { AppWindowSliceState } from "../../../react-redux/slices/app-window/appWindow";
import { AppWindowChangeSources } from "../../../react-redux/slices/app-window/appWindow_Enum";

import { ListenerAlreadyBinded_Error } from "../../_errors/ListenerAlreadyBinded_Error";
import { ListenerNotBinded_Error } from "../../_errors/ListenerNotBinded_Error";

import { LISTENER_TYPE } from "./AppWindowPositionYChange_Interface";
import { InstanceId, InvocationId } from "../../../../logging/Logging_types";
import { Logger_Interface } from "../../../../logging/logger/Logger_Interface";

import { AppWindowPositionYChangeListenerLogKeys_Enum } from "./AppWindowPositionYChange_Enum";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class AppWindowPositionYChange_Impl
  implements AppWindowPositionYChange_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #appWindowRepository: AppWindowRepository_Interface;

  #appWindowRepositoryStateSubscriptionId: StateChangeSubscriberId | null;

  #windowListenerEventHandler: WindowListenerEventHandler_Lambda | null;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,
    appWindowRepository: AppWindowRepository_Interface,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#appWindowRepository = appWindowRepository;

    // this is a custom pub/sub reactive system, which returns an ID on subscription,
    // so the existence of the subscription ID represents true, and of course non-existence means false
    this.#appWindowRepositoryStateSubscriptionId = null;

    this.#windowListenerEventHandler = null;
  }

  /* event handler that binds to the given repository */

  #eventHandler_ListeningToRepository({
    viewPortPositionY: positionY,
    viewPortPositionY_lastChangeSource: positionY_lastChangeSource,
  }: AppWindowSliceState): void {
    // need to add an event change source ID that is stored in the redux as well
    // this way any circular events are exited on the backswing when reading the
    // change source ID within this handler.

    if (positionY_lastChangeSource !== AppWindowChangeSources.LISTENER) {
      // if the last change to the 'positionY' property in the app window slice was NOT due to this listener itself.
      // if so, then apply that state value to the actual window object.

      this.#logger
        .createNewLog()
        .addAttribute(
          AppWindowPositionYChangeListenerLogKeys_Enum.INSTANCE_ID,
          this.#instanceMetaData.instanceId,
        )
        .addAttribute(
          AppWindowPositionYChangeListenerLogKeys_Enum.NEW_WINDOW_POSITION_Y,
          positionY,
        )
        .commit();

      window.scrollTo({ top: positionY, left: window.screenLeft }); // WILL CAUSE ASSOCIATED EVENT LISTENERS TO FIRE BE CAREFUL
    }
  }

  bindListener_Repository(invocationId: InvocationId): void {
    if (this.#appWindowRepositoryStateSubscriptionId !== null) {
      throw new ListenerAlreadyBinded_Error("type:repository");
    }

    const subscriberId: StateChangeSubscriberId = crypto.randomUUID();

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.BINDED_LISTENER,
        "repository",
      )
      .commit();

    this.#appWindowRepository.subscribeToRepositoryStateChange(
      invocationId,

      subscriberId,
      this.#eventHandler_ListeningToRepository,
    );

    this.#appWindowRepositoryStateSubscriptionId = subscriberId;
  }

  unbindListener_Repository(invocationId: InvocationId): void {
    if (this.#appWindowRepositoryStateSubscriptionId === null) {
      throw new ListenerNotBinded_Error("type:repository");
    }

    const subscriberId: StateChangeSubscriberId =
      this.#appWindowRepositoryStateSubscriptionId;

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.UNBINDED_LISTENER,
        "repository",
      )
      .commit();

    this.#appWindowRepository.unsubscribeFromRepositoryStateChange(
      invocationId,

      subscriberId,
    );

    this.#appWindowRepositoryStateSubscriptionId = null;
  }

  /* general event handler */

  #eventHandler_ListeningToWindow(invocationId: InvocationId): void {
    const newWindowPositionY: number = window.screenTop;

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.NEW_WINDOW_POSITION_Y,
        newWindowPositionY,
      )
      .commit();

    this.#appWindowRepository.setViewPortPositionY(
      invocationId,

      newWindowPositionY,
      AppWindowChangeSources.LISTENER,
    ); // add setter source eventually like an ID
  }

  bindListener_Window(invocationId: InvocationId): void {
    if (this.#windowListenerEventHandler) {
      throw new ListenerAlreadyBinded_Error("type:target");
    }

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.BINDED_LISTENER,
        "window",
      )
      .commit();

    const eventHandler: WindowListenerEventHandler_Lambda = () => {
      this.#eventHandler_ListeningToWindow(invocationId);
    };

    window.addEventListener(LISTENER_TYPE, eventHandler);

    this.#windowListenerEventHandler = eventHandler;
  }

  unbindListener_Window(invocationId: InvocationId): void {
    if (!this.#windowListenerEventHandler) {
      throw new ListenerNotBinded_Error("type:window");
    }

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowPositionYChangeListenerLogKeys_Enum.UNBINDED_LISTENER,
        "window",
      )
      .commit();

    window.removeEventListener(LISTENER_TYPE, this.#windowListenerEventHandler);

    this.#windowListenerEventHandler = null;
  }
}

export { AppWindowPositionYChange_Impl };
