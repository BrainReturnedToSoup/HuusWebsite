import { AppStore } from "../../react-redux/store";

import {
  FooterSliceActions,
  FooterSliceSelectors,
} from "../../react-redux/slices/footer";

import { FooterNavLinksSet } from "../../../domain-types/navigation/footer/links/Links_DomainTypes";

import { FooterRepository_Interface } from "./FooterRepository_Interface";
import { Logger_Interface } from "../../../logging/Logger_Interface";
import { Log_Interface } from "../../../logging/Log_Interface";
import { FooterRepositoryLogKeys_Enum } from "./FooterRepository_Enum";

export interface InstanceMetaData {
  instanceId: string;
}

class FooterRepository_Impl implements FooterRepository_Interface {
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #store: AppStore;
  #selectors: FooterSliceSelectors;
  #actions: FooterSliceActions;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

    store: AppStore,
    selectors: FooterSliceSelectors,
    actions: FooterSliceActions,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  getNavLinksSet(): FooterNavLinksSet | null {
    const footerNavLinksSet: FooterNavLinksSet | null =
      this.#selectors.navLinksSet(this.#store);

    this.#logger
      .createNewLog()
      .addAttribute(
        FooterRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(FooterRepositoryLogKeys_Enum.INVOKED_GETTER, "getNavLinksSet")
      .addAttribute(FooterRepositoryLogKeys_Enum.OBSERVED_VALUE, footerNavLinksSet)
      .addAttribute(FooterRepositoryLogKeys_Enum.RETURNED_VALUE, footerNavLinksSet)
      .commit();

    return footerNavLinksSet;
  }

  setNavLinksSet(linksSet: FooterNavLinksSet): void {
    this.#store.dispatch(this.#actions.navLinksSet(linksSet));

    this.#logger
      .createNewLog()
      .addAttribute(
        FooterRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(FooterRepositoryLogKeys_Enum.INVOKED_SETTER, "setNavLinksSet")
      .addAttribute(FooterRepositoryLogKeys_Enum.RECEIVED_ARGS, `linksSet:${linksSet}`)
      .addAttribute(FooterRepositoryLogKeys_Enum.SET_VALUE, linksSet)
      .commit();
  }
}

export { FooterRepository_Impl };
