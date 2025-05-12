import { AppStore } from "../../react-redux/store";

import {
  MobileNavSliceSelectors,
  MobileNavSliceActions,
} from "../../react-redux/slices/mobileNav";

import { MobileNavRepository_Interface } from "./MobileNavRepository_Interface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { Log_Interface } from "../../../logging/logger/Log_Interface";

import { MobileNavRepositoryLogKeys_Enum } from "./MobileNavRepository_Enum";
import {
  IsOpen,
  IsToggleDisabled,
} from "../../../domain-data-types/navigation/mobile/open-close/OpenClose_DomainTypes";

import { InvocationId } from "../../../logging/Logging_types";

export interface InstanceMetaData {
  instanceId: string;
}

class MobileNavRepository_Impl implements MobileNavRepository_Interface {
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #store: AppStore;
  #selectors: MobileNavSliceSelectors;
  #actions: MobileNavSliceActions;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    store: AppStore,
    selectors: MobileNavSliceSelectors,
    actions: MobileNavSliceActions,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  #loggingHelperForGetters(
    invocationId: InvocationId,

    methodName: string,
    observedValue: any,
    returnedValue: any,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(MobileNavRepositoryLogKeys_Enum.INVOCATION_ID, invocationId)
      .addAttribute(MobileNavRepositoryLogKeys_Enum.INVOKED_GETTER, methodName)
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.OBSERVED_VALUE,
        observedValue,
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.RETURNED_VALUE,
        returnedValue,
      );
  }

  #loggingHelperForSetters(
    invocationId: InvocationId,

    methodName: string,
    receivedArgs: string,
    setValue: any,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(MobileNavRepositoryLogKeys_Enum.INVOCATION_ID, invocationId)
      .addAttribute(MobileNavRepositoryLogKeys_Enum.INVOKED_SETTER, methodName)
      .addAttribute(MobileNavRepositoryLogKeys_Enum.RECEIVED_ARGS, receivedArgs)
      .addAttribute(MobileNavRepositoryLogKeys_Enum.SET_VALUE, setValue);
  }

  getIsOpen(invocationId: InvocationId): IsOpen {
    const isOpen: IsOpen = this.#selectors.isOpen(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getIsOpen",
      isOpen,
      isOpen,
    ).commit();

    return isOpen;
  }

  setIsOpen(
    invocationId: InvocationId,

    isOpen: IsOpen,
  ): void {
    this.#store.dispatch(this.#actions.isOpen(isOpen));

    this.#loggingHelperForSetters(
      invocationId,

      "setIsOpen",
      `isOpen:${isOpen}`,
      isOpen,
    ).commit();
  }

  getIsToggleDisabled(invocationId: InvocationId): IsToggleDisabled {
    const isToggleDisabled = this.#selectors.isToggleDisabled(this.#store);

    this.#loggingHelperForGetters(
      invocationId,

      "getIsToggleDisabled",
      isToggleDisabled,
      isToggleDisabled,
    ).commit();

    return isToggleDisabled;
  }

  setIsToggleDisabled(
    invocationId: InvocationId,

    isDisabled: IsToggleDisabled,
  ): void {
    this.#store.dispatch(this.#actions.isToggleDisabled(isDisabled));

    this.#loggingHelperForSetters(
      invocationId,

      "setIsToggleDisabled",
      `isDisabled:${isDisabled}`,
      isDisabled,
    ).commit();
  }
}

export { MobileNavRepository_Impl };
