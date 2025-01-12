export enum FOOTER_NAV_LINK_ID {
  TO_ROOT = "TO_ROOT",
  TO_ABOUT = "TO_ABOUT",
  TO_CONTACT = "TO_CONTACT",
  TO_LEGAL = "TO_LEGAL",
  TO_MEDIA = "TO_MEDIA",
  TO_SERVICES = "TO_SERVICES",
}

export enum FOOTER_NAV_LINK_SET_ID {
  ON_ROOT_PAGE = "ON_ROOT_PAGE",
  ON_ABOUT_PAGE = "ON_ABOUT_PAGE",
  ON_CONTACT_PAGE = "ON_CONTACT_PAGE",
  ON_LEGAL_PAGE = "ON_LEGAL_PAGE",
  ON_MEDIA_PAGE = "ON_MEDIA_PAGE",
  ON_SERVICES_PAGE = "ON_SERVICES_PAGE",
}

export const FOOTER_NAV_LINK_ROUTES = {
  [FOOTER_NAV_LINK_ID.TO_ROOT]: "/",
  [FOOTER_NAV_LINK_ID.TO_ABOUT]: "/about",
  [FOOTER_NAV_LINK_ID.TO_CONTACT]: "/contact",
  [FOOTER_NAV_LINK_ID.TO_LEGAL]: "/legal",
  [FOOTER_NAV_LINK_ID.TO_MEDIA]: "/media",
  [FOOTER_NAV_LINK_ID.TO_SERVICES]: "/services",
};

// use the link IDs as it pertains to the Footer Nav service mappings as of now, but potentially
// further move the links into a more agnostic '/enums' directory where they will use the interfaces
// provided by repositories and services combined.

export const FOOTER_NAV_LINK_TEXT = {
  [FOOTER_NAV_LINK_ID.TO_ROOT]: "Home",
  [FOOTER_NAV_LINK_ID.TO_ABOUT]: "About",
  [FOOTER_NAV_LINK_ID.TO_CONTACT]: "Contact",
  [FOOTER_NAV_LINK_ID.TO_LEGAL]: "Legal",
  [FOOTER_NAV_LINK_ID.TO_MEDIA]: "Media",
  [FOOTER_NAV_LINK_ID.TO_SERVICES]: "Services",
};
