import { mobileNavRepository } from "../../../state/repositories/mobile-nav/MobileNavRepository_Singleton";
import { MobileNavSetLinksService_Impl } from "./MobileNavSetLinksService_Impl";

import { LinkSets } from "./MobileNavSetLinksService_Interface";

import { LINKS, LINK_SET_ID, LINK_ID } from "./MobileNavSetLinksService_Enums";

// basically, each link set is a link set per unique page when considering the mobile nav
export const linkSets: LinkSets = {
  [LINK_SET_ID.ROOT]: Object.fromEntries(
    Object.entries(LINKS).filter(([key, val]) => key !== LINK_ID.TO_ROOT), // everything besides the same page link for each link set
  ),

  [LINK_SET_ID.ABOUT]: Object.fromEntries(
    Object.entries(LINKS).filter(([key, val]) => key !== LINK_ID.TO_ABOUT), // everything besides the same page link for each link set
  ),

  [LINK_SET_ID.CONTACT]: Object.fromEntries(
    Object.entries(LINKS).filter(([key, val]) => key !== LINK_ID.TO_CONTACT), // everything besides the same page link for each link set
  ),

  [LINK_SET_ID.LEGAL]: Object.fromEntries(
    Object.entries(LINKS).filter(([key, val]) => key !== LINK_ID.TO_LEGAL), // everything besides the same page link for each link set
  ),

  [LINK_SET_ID.MEDIA]: Object.fromEntries(
    Object.entries(LINKS).filter(([key, val]) => key !== LINK_ID.TO_MEDIA), // everything besides the same page link for each link set
  ),

  [LINK_SET_ID.SERVICES]: Object.fromEntries(
    Object.entries(LINKS).filter(([key, val]) => key !== LINK_ID.TO_SERVICES), // everything besides the same page link for each link set
  ),
};

const mobileNavSetLinksService = new MobileNavSetLinksService_Impl(
  mobileNavRepository,
  linkSets,
);

export { mobileNavSetLinksService };
