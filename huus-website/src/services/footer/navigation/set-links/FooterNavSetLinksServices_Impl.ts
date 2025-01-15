import { FooterRepository_Interface } from "../../../../state/repositories/footer/FooterRepository_Interface";

import { FooterNavSetLinksService_Interface } from "./FooterNavSetLinksService_Interface";

import {
  FooterNavLinksSets,
  FooterNavLinksSetId,
  FooterNavLinksSet,
} from "../../../../domain-types/navigation/footer/links/Links_DomainTypes";

import { FooterNavLinkSetDoesNotExist_Error } from "./_errors/LinkSetDoesNotExist_Error";
import { Logger_Interface } from "../../../../logging/Logger_Interface";
import { Log_Interface } from "../../../../logging/Log_Interface";

class FooterNavSetLinksServices_Impl
  implements FooterNavSetLinksService_Interface
{
  #footerRepository: FooterRepository_Interface;
  #linkSets: FooterNavLinksSets;
  #logger: Logger_Interface<Log_Interface>;

  constructor(
    footerRepository: FooterRepository_Interface,
    linkSets: FooterNavLinksSets,
    logger: Logger_Interface<Log_Interface>,
  ) {
    this.#footerRepository = footerRepository;
    this.#linkSets = linkSets;
    this.#logger = logger;
  }

  apply(linkSetId: FooterNavLinksSetId): void {
    if (!(linkSetId in this.#linkSets)) {
      const err = new FooterNavLinkSetDoesNotExist_Error();

      // add meta data before throwing

      throw err;
    }

    const linkSet: FooterNavLinksSet = this.#linkSets[linkSetId];

    this.#footerRepository.setNavLinksSet(linkSet);
  }
}

export { FooterNavSetLinksServices_Impl };
