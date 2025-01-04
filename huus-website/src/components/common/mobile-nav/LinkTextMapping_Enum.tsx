import { MOBILE_NAV_LINK_ID } from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Enums";

// use the link IDs as it pertains to the Mobile Nav service mappings as of now, but potentially
// further move the links into a more agnostic '/enums' directory where they will use the interfaces
// provided by repositories and services combined.

export const LINK_TEXT_MAPPING: Record<MOBILE_NAV_LINK_ID, string> = {
  [MOBILE_NAV_LINK_ID.TO_ROOT]: "Home",
  [MOBILE_NAV_LINK_ID.TO_ABOUT]: "About",
  [MOBILE_NAV_LINK_ID.TO_CONTACT]: "Contact",
  [MOBILE_NAV_LINK_ID.TO_LEGAL]: "Legal",
  [MOBILE_NAV_LINK_ID.TO_MEDIA]: "Media",
  [MOBILE_NAV_LINK_ID.TO_SERVICES]: "Services",
};
