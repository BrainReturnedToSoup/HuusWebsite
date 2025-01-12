import { AppStore } from "../../react-redux/store";

import {
  FooterSliceActions,
  FooterSliceSelectors,
} from "../../react-redux/slices/footer";

import { FooterNavLinkSet } from "../../../services/footer/navigation/set-links/FooterNavSetLinksService_Interface";

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

  getNavLinkSet(): FooterNavLinkSet | null {
    return this.#selectors.navLinkSet(this.#store);
  }

  setNavLinkSet(linkSet: FooterNavLinkSet): void {
    this.#store.dispatch(this.#actions.setNavLinkSet(linkSet));
  }
}

export { FooterRepository_Impl };
