import { AppStore } from "../../react-redux/store";

import {
  MobileNavSliceSelectors,
  MobileNavSliceActions,
} from "../../react-redux/slices/mobileNav";

import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";

import { MobileNavRepository_Interface } from "./MobileNavRepository_Interface";
import { Logger_Interface } from "../../../logging/Logger_Interface";
import { Log_Interface } from "../../../logging/Log_Interface";

import { MobileNavRepositoryLogKeys_Enum } from "./MobileNavRepository_Enum";
import { IsOpen, IsToggleDisabled } from "../../../domain-types/navigation/mobile/open-close/OpenClose_DomainTypes";

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

  getIsOpen(): IsOpen {
    const isOpen: IsOpen = this.#selectors.isOpen(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(MobileNavRepositoryLogKeys_Enum.INVOKED_GETTER, "getIsOpen")
      .addAttribute(MobileNavRepositoryLogKeys_Enum.OBSERVED_VALUE, isOpen)
      .addAttribute(MobileNavRepositoryLogKeys_Enum.RETURNED_VALUE, isOpen)
      .commit();

    return isOpen;
  }

  setIsOpen(isOpen: IsOpen): void {
    this.#store.dispatch(this.#actions.isOpen(isOpen));

    this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(MobileNavRepositoryLogKeys_Enum.INVOKED_SETTER, "setIsOpen")
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `isOpen:${isOpen}`,
      )
      .addAttribute(MobileNavRepositoryLogKeys_Enum.SET_VALUE, isOpen)
      .commit();
  }

  getIsToggleDisabled(): IsToggleDisabled {
    const isToggleDisabled = this.#selectors.isToggleDisabled(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getIsToggleDisabled",
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.OBSERVED_VALUE,
        isToggleDisabled,
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.RETURNED_VALUE,
        isToggleDisabled,
      )
      .commit();

    return isToggleDisabled;
  }

  setIsToggleDisabled(isDisabled: IsToggleDisabled): void {
    this.#store.dispatch(this.#actions.isToggleDisabled(isDisabled));

    this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setIsToggleDisabled",
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `isDisabled:${isDisabled}`,
      )
      .addAttribute(MobileNavRepositoryLogKeys_Enum.SET_VALUE, isDisabled)
      .commit();
  }

  getLinksSet(): MobileNavLinksSet | null {
    const mobileNavLinkSet: MobileNavLinksSet | null = this.#selectors.linksSet(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getLinksSet",
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.OBSERVED_VALUE,
        mobileNavLinkSet,
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.RETURNED_VALUE,
        mobileNavLinkSet,
      )
      .commit();

    return mobileNavLinkSet;
  }

  setLinksSet(linksSet: MobileNavLinksSet): void {
    this.#store.dispatch(this.#actions.linksSet(linksSet));

    this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setLinksSet",
      )
      .addAttribute(
        MobileNavRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `linksSet:${linksSet}`,
      )
      .addAttribute(MobileNavRepositoryLogKeys_Enum.SET_VALUE, linksSet)
      .commit();
  }
}

export { MobileNavRepository_Impl };
