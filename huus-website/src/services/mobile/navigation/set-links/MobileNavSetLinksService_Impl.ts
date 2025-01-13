import { MobileNavSetLinksService_Interface } from "./MobileNavSetLinksService_Interface";

import { MobileNavRepository_Interface } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import { MobileNavLinkSetDoesNotExist_Error } from "./_errors/LinkSetIdDoesNotExist_Error";

import {
  MobileNavLinksSet,
  MobileNavLinksSets,
  MobileNavLinksSetId,
} from "../../../../domain-types/navigation/mobile/links/Link_DomainTypes";

class MobileNavSetLinksService_Impl
  implements MobileNavSetLinksService_Interface
{
  #mobileNavRespository: MobileNavRepository_Interface;
  #linksSets: MobileNavLinksSets;

  constructor(
    mobileNavRepository: MobileNavRepository_Interface,
    linksSets: MobileNavLinksSets,
  ) {
    this.#mobileNavRespository = mobileNavRepository;
    this.#linksSets = linksSets;
  }

  apply(linksSetId: MobileNavLinksSetId): void {
    // based on the link set ID, apply the schema to the repository on the proper member(s)
    // should be efficient since the schema is an object, which is technically a hash map

    if (!(linksSetId in this.#linksSets)) {
      const err = new MobileNavLinkSetDoesNotExist_Error();

      // add meta data and log before throwing

      throw err;
    }

    const linkSet: MobileNavLinksSet = this.#linksSets[linksSetId];

    this.#mobileNavRespository.setLinksSet(linkSet);
  }
}

export { MobileNavSetLinksService_Impl };
