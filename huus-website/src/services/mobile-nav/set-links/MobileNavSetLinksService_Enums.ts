export enum LINK_SET_ID {
  ROOT = "ROOT",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
  LEGAL = "LEGAL",
  MEDIA = "MEDIA",
  SERVICES = "SERVICES",
}

export enum LINK_ID {
  TO_ROOT = "TO_ROOT",
  TO_ABOUT = "TO_ABOUT",
  TO_CONTACT = "TO_CONTACT",
  TO_LEGAL = "TO_LEGAL",
  TO_MEDIA = "TO_MEDIA",
  TO_SERVICES = "TO_SERVICES",
}

export const LINKS = {
  [LINK_ID.TO_ROOT]: "/",
  [LINK_ID.TO_ABOUT]: "/about",
  [LINK_ID.TO_CONTACT]: "/contact",
  [LINK_ID.TO_LEGAL]: "/legal",
  [LINK_ID.TO_MEDIA]: "/media",
  [LINK_ID.TO_SERVICES]: "/services",
};
