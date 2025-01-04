import { MobileNavRepository_Interface } from "../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import { MobileNavLinkSetDoesNotExist_Error } from "./_errors/LinkSetIdDoesNotExist_Error";

import {
  MobileNavLinkSet,
  MobileNavLinkSets,
  MobileNavLinkSetId,
  MobileNavSetLinksService_Interface,
} from "./MobileNavSetLinksService_Interface";

class MobileNavSetLinksService_Impl
  implements MobileNavSetLinksService_Interface
{
  #mobileNavRespository: MobileNavRepository_Interface;
  #linkSets: MobileNavLinkSets;

  constructor(
    mobileNavRepository: MobileNavRepository_Interface,
    linkSets: MobileNavLinkSets,
  ) {
    this.#mobileNavRespository = mobileNavRepository;
    this.#linkSets = linkSets;
  }

  applyLinkSet(linkSetId: MobileNavLinkSetId): void {
    // based on the link set ID, apply the schema to the repository on the proper member(s)
    // should be efficient since the schema is an object, which is technically a hash map

    if (!(linkSetId in this.#linkSets)) {
      const err = new MobileNavLinkSetDoesNotExist_Error();

      // add meta data and log before throwing

      throw err;
    }

    const linkSet: MobileNavLinkSet = this.#linkSets[linkSetId];

    this.#mobileNavRespository.setLinkSet(linkSet);
  }
}

export { MobileNavSetLinksService_Impl };
