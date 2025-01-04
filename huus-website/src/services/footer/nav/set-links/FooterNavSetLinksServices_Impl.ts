import { FooterRepository_Interface } from "../../../../state/repositories/footer/FooterRepository_Interface";

import {
  FooterNavLinkSet,
  FooterNavSetLinksService_Interface,
  FooterNavLinkSetId,
  FooterNavLinkSets,
} from "./FooterNavSetLinksService_Interface";

import { FooterNavLinkSetDoesNotExist_Error } from "./_errors/LinkSetDoesNotExist_Error";

class FooterNavSetLinksServices_Impl
  implements FooterNavSetLinksService_Interface
{
  #footerRepository: FooterRepository_Interface;
  #linkSets: FooterNavLinkSets;

  constructor(
    footerRepository: FooterRepository_Interface,
    linkSets: FooterNavLinkSets,
  ) {
    this.#footerRepository = footerRepository;
    this.#linkSets = linkSets;
  }

  applyLinkSet(linkSetId: FooterNavLinkSetId): void {
    if (!(linkSetId in this.#linkSets)) {
      const err = new FooterNavLinkSetDoesNotExist_Error();

      // add meta data before throwing

      throw err;
    }

    const linkSet: FooterNavLinkSet = this.#linkSets[linkSetId];

    this.#footerRepository.setNavLinkSet(linkSet);
  }
}

export { FooterNavSetLinksServices_Impl };
