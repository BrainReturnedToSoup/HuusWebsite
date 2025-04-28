import { AppWindowPositionYChange_Interface } from "./AppWindowPositionYChange_Interface";

import { AppWindowRepository_Interface } from "../../../repositories/app-window/AppWindowRepository_Interface";

import { ListenerAlreadyBinded_Error } from "../../_errors/ListenerAlreadyBinded_Error";
import { ListenerNotBinded_Error } from "../../_errors/ListenerNotBinded_Error";

import { InstanceId, InvocationId } from "../../../../logging/Logging_types";
import { Logger_Interface } from "../../../../logging/logger/Logger_Interface";

import { AppWindowPositionYChangeListenerLogKeys_Enum } from "./AppWindowPositionYChange_Enum";

export const LISTENER_TYPE: string = "scroll";

export type WindowListenerEventHandler_LambdaInterface = () => void;

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class AppWindowPositionYChange_Impl
  implements AppWindowPositionYChange_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #appWindowRepository: AppWindowRepository_Interface;
  #window: Window;

  #windowListenerEventHandler: WindowListenerEventHandler_LambdaInterface | null;

  #currViewPortPositionYRange: number;

  #rangeSize: number;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    appWindowRepository: AppWindowRepository_Interface,
    window: Window,

    rangeSize: number,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#appWindowRepository = appWindowRepository;
    this.#window = window;

    this.#windowListenerEventHandler = null;

    this.#rangeSize = rangeSize;

    this.#currViewPortPositionYRange = this.#calcNewViewPortPositionYRange(
      this.#window.scrollY,
    );
  }

  #calcNewViewPortPositionYRange(currViewPortPositionY: number) {
    return Math.floor(currViewPortPositionY / this.#rangeSize);
  }

  bindListener(invocationId: InvocationId): void {
    if (this.#windowListenerEventHandler) {
      throw new ListenerAlreadyBinded_Error("type:window");
    }

    const classScope = this;
    const eventHandler: WindowListenerEventHandler_LambdaInterface = () => {
      const newViewPortPositionYRange =
        this.#calcNewViewPortPositionYRange.bind(classScope)(
          this.#window.scrollY,
        );

      if (newViewPortPositionYRange !== this.#currViewPortPositionYRange) {
        this.#currViewPortPositionYRange = newViewPortPositionYRange;

        this.#appWindowRepository.setViewPortPositionY(
          invocationId,

          this.#window.scrollY,
        );
      }
    };

    window.addEventListener(LISTENER_TYPE, eventHandler);

    this.#windowListenerEventHandler = eventHandler;

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
  }

  unbindListener(invocationId: InvocationId): void {
    if (!this.#windowListenerEventHandler) {
      throw new ListenerNotBinded_Error("type:window");
    }

    window.removeEventListener(LISTENER_TYPE, this.#windowListenerEventHandler);

    this.#windowListenerEventHandler = null;

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
  }
}

export { AppWindowPositionYChange_Impl };
