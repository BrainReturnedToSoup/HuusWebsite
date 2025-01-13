import { FooterRepository_Interface } from "../../../../state/repositories/footer/FooterRepository_Interface";

import { FooterNavSetLinksService_Interface } from "./FooterNavSetLinksService_Interface";

import {
  FooterNavLinksSets,
  FooterNavLinksSetId,
  FooterNavLinksSet,
} from "../../../../domain-types/navigation/footer/links/Link_DomainTypes";

import { FooterNavLinkSetDoesNotExist_Error } from "./_errors/LinkSetDoesNotExist_Error";

class FooterNavSetLinksServices_Impl
  implements FooterNavSetLinksService_Interface
{
  #footerRepository: FooterRepository_Interface;
  #linkSets: FooterNavLinksSets;

  constructor(
    footerRepository: FooterRepository_Interface,
    linkSets: FooterNavLinksSets,
  ) {
    this.#footerRepository = footerRepository;
    this.#linkSets = linkSets;
  }

  apply(linkSetId: FooterNavLinksSetId): void {
    if (!(linkSetId in this.#linkSets)) {
      const err = new FooterNavLinkSetDoesNotExist_Error();

      // add meta data before throwing

      throw err;
    }

    const linkSet: FooterNavLinksSet = this.#linkSets[linkSetId];

    this.#footerRepository.setNavLinkSet(linkSet);
  }
}

export { FooterNavSetLinksServices_Impl };
