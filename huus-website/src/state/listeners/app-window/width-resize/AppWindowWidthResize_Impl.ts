import { AppWindowWidthResizeListener_Interface } from "./AppWindowWidthResize_Interface";

import { AppWindowRepository_Interface } from "../../../repositories/app-window/AppWindowRepository_Interface";

import { ListenerNotBinded_Error } from "../../_errors/ListenerNotBinded_Error";
import { ListenerAlreadyBinded_Error } from "../../_errors/ListenerAlreadyBinded_Error";

import { InstanceId, InvocationId } from "../../../../logging/Logging_types";
import { Logger_Interface } from "../../../../logging/logger/Logger_Interface";

import { AppWindowWidthResizeListenerLogKeys_Enum } from "./AppWindowWidthResizeListener_Enum";

export const LISTENER_TYPE = "resize";

export type WindowListenerEventHandler_Lambda = () => void;

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class AppWindowWidthResizeListener_Impl
  implements AppWindowWidthResizeListener_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #appWindowRepository: AppWindowRepository_Interface;
  #window: Window;

  #windowListenerEventHandler: WindowListenerEventHandler_Lambda | null;

  // represents the sector that the screen width value exists within.
  // ex: sector 1 = 0-63 if '#rangeSize' is set to 64 meaning 64px
  #currViewPortWidthRange: number;

  // the size of each range,
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

    this.#currViewPortWidthRange = this.#calcNewviewPortWidthRange(
      this.#window.innerWidth,
    );
  }

  // returns the new width range the supplied currViewPortWidth represents
  #calcNewviewPortWidthRange(currViewPortWidth: number): number {
    return Math.floor(currViewPortWidth / this.#rangeSize);
  }

  bindListener(invocationId: InvocationId): void {
    if (this.#windowListenerEventHandler) {
      throw new ListenerAlreadyBinded_Error("type:window");
    }

    const classScope = this;
    const eventHandler: WindowListenerEventHandler_Lambda = () => {
      // mechanism used for throttling writes to the repository
      const newViewPortWidthRange = this.#calcNewviewPortWidthRange.bind(
        classScope,
      )(this.#window.innerWidth);

      if (newViewPortWidthRange !== this.#currViewPortWidthRange) {
        this.#currViewPortWidthRange = newViewPortWidthRange;

        this.#appWindowRepository.setViewPortWidth(
          invocationId,
          
          this.#window.innerWidth,
        );
      }
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
        AppWindowWidthResizeListenerLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        AppWindowWidthResizeListenerLogKeys_Enum.UNBINDED_LISTENER,
        "window",
      )
      .commit();
  }
}

export { AppWindowWidthResizeListener_Impl };
