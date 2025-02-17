import { MobileNavSetLinksService_Interface } from "./MobileNavSetLinksService_Interface";

import { MobileNavRepository_Interface } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import { MobileNavLinkSetDoesNotExist_Error } from "./_errors/LinkSetIdDoesNotExist_Error";

import {
  MobileNavLinksSet,
  MobileNavLinksSets,
  MobileNavLinksSetId,
} from "../../../../domain-types/navigation/mobile/links/Links_DomainTypes";
import { Logger_Interface } from "../../../../logging/logger/Logger_Interface";

import { MobileNavSetLinksServiceLogKeys_Enum } from "./MobileNavSetLinksService_Enum";
import { InstanceId, InvocationId } from "../../../../logging/Logging_types";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

class MobileNavSetLinksService_Impl
  implements MobileNavSetLinksService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #mobileNavRespository: MobileNavRepository_Interface;
  #linksSets: MobileNavLinksSets;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    mobileNavRepository: MobileNavRepository_Interface,
    linksSets: MobileNavLinksSets,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#mobileNavRespository = mobileNavRepository;
    this.#linksSets = linksSets;
  }

  apply(
    invocationId: InvocationId,

    linksSetId: MobileNavLinksSetId,
  ): void {
    // based on the link set ID, apply the schema to the repository on the proper member(s)
    // should be efficient since the schema is an object, which is technically a hash map

    if (!(linksSetId in this.#linksSets)) {
      const err = new MobileNavLinkSetDoesNotExist_Error();

      // add meta data and log before throwing

      throw err;
    }

    const linksSet: MobileNavLinksSet = this.#linksSets[linksSetId];

    this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavSetLinksServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        MobileNavSetLinksServiceLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        MobileNavSetLinksServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        "apply",
      )
      .addAttribute(
        MobileNavSetLinksServiceLogKeys_Enum.RECEIVED_ARGS,
        `linksSetId:${linksSetId}`,
      )
      .addAttribute(
        MobileNavSetLinksServiceLogKeys_Enum.CHOSEN_LINKS_SET,
        linksSet,
      )
      .commit();

    this.#mobileNavRespository.setLinksSet(
      invocationId,

      linksSet,
    );
  }
}

export { MobileNavSetLinksService_Impl };
