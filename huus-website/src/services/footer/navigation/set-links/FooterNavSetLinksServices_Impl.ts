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
import { FooterNavSetLinksServiceLogKeys_Enum } from "./FooterNavSetLinksService_Enum";
import { InvocationId } from "../../../../logging/Logging_types";

export interface InstanceMetaData {
  instanceId: string;
}

class FooterNavSetLinksServices_Impl
  implements FooterNavSetLinksService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #footerRepository: FooterRepository_Interface;
  #linkSets: FooterNavLinksSets;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

    footerRepository: FooterRepository_Interface,
    linkSets: FooterNavLinksSets,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#footerRepository = footerRepository;
    this.#linkSets = linkSets;
  }

  applyLinksSet(
    invocationId: InvocationId,

    linksSetId: FooterNavLinksSetId,
  ): void {
    if (!(linksSetId in this.#linkSets)) {
      const err = new FooterNavLinkSetDoesNotExist_Error();

      // add meta data before throwing

      throw err;
    }

    const linksSet: FooterNavLinksSet = this.#linkSets[linksSetId];

    this.#logger
      .createNewLog()
      .addAttribute(
        FooterNavSetLinksServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        FooterNavSetLinksServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        "applyLinksSet",
      )
      .addAttribute(
        FooterNavSetLinksServiceLogKeys_Enum.RECEIVED_ARGS,
        `linksSetId:${linksSetId}`,
      )
      .addAttribute(
        FooterNavSetLinksServiceLogKeys_Enum.CHOSEN_LINKS_SET,
        linksSet,
      )
      .commit();

    this.#footerRepository.setNavLinksSet(
      invocationId,

      linksSet,
    );
  }
}

export { FooterNavSetLinksServices_Impl };
