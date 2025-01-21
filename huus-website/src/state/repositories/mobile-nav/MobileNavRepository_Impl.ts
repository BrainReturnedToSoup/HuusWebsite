import { AppStore } from "../../react-redux/store";

import {
  MobileNavSliceSelectors,
  MobileNavSliceActions,
} from "../../react-redux/slices/mobileNav";

import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";

import { MobileNavRepository_Interface } from "./MobileNavRepository_Interface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { Log_Interface } from "../../../logging/logger/Log_Interface";

import { MobileNavRepositoryLogKeys_Enum } from "./MobileNavRepository_Enum";
import {
  IsOpen,
  IsToggleDisabled,
} from "../../../domain-types/navigation/mobile/open-close/OpenClose_DomainTypes";

import { InvocationId } from "../../../logging/Logging_types";

export interface InstanceMetaData {
  instanceId: string;
}

class MobileNavRepository_Impl implements MobileNavRepository_Interface {
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #store: AppStore;
  #selectors: MobileNavSliceSelectors;
  #actions: MobileNavSliceActions;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

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

  getLinksSet(invocationId: InvocationId): MobileNavLinksSet | null {
    const mobileNavLinkSet: MobileNavLinksSet | null = this.#selectors.linksSet(
      this.#store,
    );

    this.#loggingHelperForGetters(
      invocationId,

      "getLinksSet",
      mobileNavLinkSet,
      mobileNavLinkSet,
    ).commit();

    return mobileNavLinkSet;
  }

  setLinksSet(
    invocationId: InvocationId,

    linksSet: MobileNavLinksSet,
  ): void {
    this.#store.dispatch(this.#actions.linksSet(linksSet));

    this.#loggingHelperForSetters(
      invocationId,

      "setLinksSet",
      `linksSet:${linksSet}`,
      linksSet,
    ).commit();
  }
}

export { MobileNavRepository_Impl };
