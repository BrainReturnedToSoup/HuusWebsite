import { AppStore } from "../../react-redux/store";

import {
  FooterSliceActions,
  FooterSliceSelectors,
} from "../../react-redux/slices/footer";

import { FooterNavLinksSet } from "../../../domain-types/navigation/footer/links/Link_DomainTypes";

import { FooterRepository_Interface } from "./FooterRepository_Interface";

class FooterRepository_Impl implements FooterRepository_Interface {
  #store: AppStore;
  #selectors: FooterSliceSelectors;
  #actions: FooterSliceActions;

  constructor(
    store: AppStore,
    selectors: FooterSliceSelectors,
    actions: FooterSliceActions,
  ) {
    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  getNavLinkSet(): FooterNavLinksSet | null {
    return this.#selectors.navLinksSet(this.#store);
  }

  setNavLinkSet(linkSet: FooterNavLinksSet): void {
    this.#store.dispatch(this.#actions.navLinksSet(linkSet));
  }
}

export { FooterRepository_Impl };
