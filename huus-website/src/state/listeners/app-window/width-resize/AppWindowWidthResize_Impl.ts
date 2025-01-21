import {
  AppWindowWidthResizeListener_Interface,
  WindowListenerEventHandler_Lambda,
} from "./AppWindowWidthResize_Interface";

import {
  AppWindowRepository_Interface,
  StateChangeSubscriberId,
} from "../../../repositories/app-window/AppWindowRepository_Interface";

import { ListenerNotBinded_Error } from "../../_errors/ListenerNotBinded_Error";
import { ListenerAlreadyBinded_Error } from "../../_errors/ListenerAlreadyBinded_Error";

import { AppWindowSliceState } from "../../../react-redux/slices/app-window/appWindow";
import { AppWindowChangeSources } from "../../../react-redux/slices/app-window/appWindow_Enum";

import { LISTENER_TYPE } from "./AppWindowWidthResize_Interface";
import { InstanceId, InvocationId } from "../../../../logging/Logging_types";
import { Logger_Interface } from "../../../../logging/logger/Logger_Interface";
import { Log_Interface } from "../../../../logging/logger/Log_Interface";
import { AppWindowWidthResizeListenerLogKeys_Enum } from "./AppWIndowWidthResizeListener_Enum";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class AppWindowWidthResizeListener_Impl
  implements AppWindowWidthResizeListener_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #appWindowRepository: AppWindowRepository_Interface;
  #appWindowRepositoryStateSubscriptionId: StateChangeSubscriberId | null;
  #windowListenerEventHandler: WindowListenerEventHandler_Lambda | null;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

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
    viewPortWidth: newWindowInnerWidth,
    viewPortWidth_lastChangeSource: width_lastChangeSource,
  }: AppWindowSliceState): void {
    // need to add an event change source ID that is stored in the redux as well
    // this way any circular events are exited on the backswing when reading the
    // change source ID within this handler.

    if (width_lastChangeSource !== AppWindowChangeSources.LISTENER) {
      // if the last change to the 'width' property in the app window slice was NOT due to this listener itself.
      // if so, then apply that state value to the actual window object.

      this.#logger
        .createNewLog()
        .addAttribute(
          AppWindowWidthResizeListenerLogKeys_Enum.INSTANCE_ID,
          this.#instanceMetaData.instanceId,
        )
        .addAttribute(
          AppWindowWidthResizeListenerLogKeys_Enum.NEW_WINDOW_INNER_WIDTH,
          newWindowInnerWidth,
        )
        .commit();

      window.resizeTo(newWindowInnerWidth, window.innerHeight); // WILL CAUSE ASSOCIATED EVENT LISTENERS TO FIRE BE CAREFUL
    }
  }

  bindListener_Repository(invocationId: InvocationId): void {
    if (this.#appWindowRepositoryStateSubscriptionId !== null) {
      throw new ListenerAlreadyBinded_Error("type:repository");
    }

    const subscriberId: StateChangeSubscriberId = crypto.randomUUID();

    this.#appWindowRepository.subscribeToRepositoryStateChange(
      invocationId,

      subscriberId,
      this.#eventHandler_ListeningToRepository,
    );

    this.#appWindowRepositoryStateSubscriptionId = subscriberId;

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.BINDED_LISTENER,
        "repository",
      )
      .commit();
  }

  unbindListener_Repository(invocationId: InvocationId): void {
    if (this.#appWindowRepositoryStateSubscriptionId === null) {
      throw new ListenerNotBinded_Error("type:repository");
    }

    const id: StateChangeSubscriberId =
      this.#appWindowRepositoryStateSubscriptionId;

    this.#appWindowRepository.unsubscribeFromRepositoryStateChange(
      invocationId,

      id,
    );

    this.#appWindowRepositoryStateSubscriptionId = null;

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.UNBINDED_LISTENER,
        "repository",
      )
      .commit();
  }

  #eventHandler_ListeningToWindow(invocationId: InvocationId): void {
    const newWindowInnerWidth: number = window.innerWidth;

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.NEW_WINDOW_INNER_WIDTH,
        newWindowInnerWidth,
      )
      .commit();

    this.#appWindowRepository.setViewPortWidth(
      invocationId,

      newWindowInnerWidth,
      AppWindowChangeSources.LISTENER,
    ); // add setter source eventually like an ID
  }

  bindListener_Target(invocationId: InvocationId): void {
    if (this.#windowListenerEventHandler) {
      throw new ListenerAlreadyBinded_Error("type:target");
    }

    // reuses the ID as a closure rather than a new ID each time. This works
    // because the event listener should already fire as it pertains to causality
    // anyway. This also means that the underlying JIT interpreter can optimized for this reused ID
    // since it should be a hotspot.

    // declared separately rather than inline in order to reuse the reference when potentially
    // unbinding the listener.
    const eventHandler: WindowListenerEventHandler_Lambda = () => {
      this.#eventHandler_ListeningToWindow(invocationId);
    };

    window.addEventListener(LISTENER_TYPE, eventHandler);

    this.#windowListenerEventHandler = eventHandler;

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.BINDED_LISTENER,
        "target",
      )
      .commit();
  }

  unbindListener_Target(invocationId: InvocationId): void {
    if (!this.#windowListenerEventHandler) {
      throw new ListenerNotBinded_Error("type:target");
    }

    window.removeEventListener(LISTENER_TYPE, this.#windowListenerEventHandler);

    this.#windowListenerEventHandler = null;

    this.#logger
      .createNewLog()
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.UNBINDED_LISTENER,
        "target",
      )
      .commit();
  }
}

export { AppWindowWidthResizeListener_Impl };
