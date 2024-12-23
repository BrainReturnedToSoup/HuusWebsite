import {
  LinkSet,
  MobileNavRepository_Interface,
} from "../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import { LinkSetDoesNotExist_Error } from "./_errors/LinkSetIdDoesNotExist_Error";

import {
  LinkSets,
  LinkSetId,
  MobileNavSetLinksService_Interface,
} from "./MobileNavSetLinksService_Interface";

class MobileNavSetLinksService_Impl
  implements MobileNavSetLinksService_Interface
{
  #mobileNavRespository: MobileNavRepository_Interface;
  #linkSets: LinkSets;

  constructor(
    mobileNavRepository: MobileNavRepository_Interface,
    linkSets: LinkSets,
  ) {
    this.#mobileNavRespository = mobileNavRepository;
    this.#linkSets = linkSets;
  }

  applyLinkSet(linkSetId: LinkSetId): void {
    // based on the link set ID, apply the schema to the repository on the proper member(s)
    // should be efficient since the schema is an object, which is technically a hash map

    if (!(linkSetId in this.#linkSets)) {
      const err = new LinkSetDoesNotExist_Error();

      // add meta data before throwing

      throw err;
    }

    const linkSet: LinkSet = this.#linkSets[linkSetId];

    this.#mobileNavRespository.setLinkSet(linkSet);
  }
}

export { MobileNavSetLinksService_Impl };
