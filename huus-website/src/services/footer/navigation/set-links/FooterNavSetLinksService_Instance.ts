import {
  FooterNavSetLinksServices_Impl,
  InstanceMetaData,
} from "./FooterNavSetLinksServices_Impl";

import { FooterNavLinksSets } from "../../../../domain-data-types/navigation/footer/links/Links_DomainTypes";

import { footerRepository } from "../../../../state/repositories/footer/FooterRepository_Instance";
import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";

const FOOTER_NAV_LINK_ID = {
  TO_ROOT: "TO_ROOT",
  TO_ABOUT: "TO_ABOUT",
  TO_CONTACT: "TO_CONTACT",
  TO_LEGAL: "TO_LEGAL",
  TO_MEDIA: "TO_MEDIA",
  TO_SERVICES: "TO_SERVICES",
} as const;

const FOOTER_NAV_LINKS_SET_ID = {
  ON_ROOT_PAGE: "ON_ROOT_PAGE",
  ON_ABOUT_PAGE: "ON_ABOUT_PAGE",
  ON_CONTACT_PAGE: "ON_CONTACT_PAGE",
  ON_LEGAL_PAGE: "ON_LEGAL_PAGE",
  ON_MEDIA_PAGE: "ON_MEDIA_PAGE",
  ON_SERVICES_PAGE: "ON_SERVICES_PAGE",
} as const;

const FOOTER_NAV_LINK_ROUTES = {
  [FOOTER_NAV_LINK_ID.TO_ROOT]: "/",
  [FOOTER_NAV_LINK_ID.TO_ABOUT]: "/about",
  [FOOTER_NAV_LINK_ID.TO_CONTACT]: "/contact",
  [FOOTER_NAV_LINK_ID.TO_LEGAL]: "/legal",
  [FOOTER_NAV_LINK_ID.TO_MEDIA]: "/media",
  [FOOTER_NAV_LINK_ID.TO_SERVICES]: "/services",
} as const;

// use the link IDs as it pertains to the Footer Nav service mappings as of now, but potentially
// further move the links into a more agnostic '/enums' directory where they will use the interfaces
// provided by repositories and services combined.

const FOOTER_NAV_LINK_TEXT = {
  [FOOTER_NAV_LINK_ID.TO_ROOT]: "Home",
  [FOOTER_NAV_LINK_ID.TO_ABOUT]: "About",
  [FOOTER_NAV_LINK_ID.TO_CONTACT]: "Contact",
  [FOOTER_NAV_LINK_ID.TO_LEGAL]: "Legal",
  [FOOTER_NAV_LINK_ID.TO_MEDIA]: "Media",
  [FOOTER_NAV_LINK_ID.TO_SERVICES]: "Services",
} as const;

// link setup is basically just a list of different links
const FOOTER_NAV_LINKS_SETS: FooterNavLinksSets = {
  [FOOTER_NAV_LINKS_SET_ID.ON_ROOT_PAGE]: {
    [FOOTER_NAV_LINK_ID.TO_SERVICES]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_SERVICES,
      text: FOOTER_NAV_LINK_TEXT.TO_SERVICES,
    },
    [FOOTER_NAV_LINK_ID.TO_ABOUT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ABOUT,
      text: FOOTER_NAV_LINK_TEXT.TO_ABOUT,
    },
    [FOOTER_NAV_LINK_ID.TO_CONTACT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_CONTACT,
      text: FOOTER_NAV_LINK_TEXT.TO_CONTACT,
    },
    [FOOTER_NAV_LINK_ID.TO_MEDIA]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_MEDIA,
      text: FOOTER_NAV_LINK_TEXT.TO_MEDIA,
    },
    [FOOTER_NAV_LINK_ID.TO_LEGAL]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_LEGAL,
      text: FOOTER_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [FOOTER_NAV_LINKS_SET_ID.ON_ABOUT_PAGE]: {
    [FOOTER_NAV_LINK_ID.TO_ROOT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ROOT,
      text: FOOTER_NAV_LINK_TEXT.TO_ROOT,
    },
    [FOOTER_NAV_LINK_ID.TO_SERVICES]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_SERVICES,
      text: FOOTER_NAV_LINK_TEXT.TO_SERVICES,
    },
    [FOOTER_NAV_LINK_ID.TO_CONTACT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_CONTACT,
      text: FOOTER_NAV_LINK_TEXT.TO_CONTACT,
    },
    [FOOTER_NAV_LINK_ID.TO_MEDIA]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_MEDIA,
      text: FOOTER_NAV_LINK_TEXT.TO_MEDIA,
    },
    [FOOTER_NAV_LINK_ID.TO_LEGAL]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_LEGAL,
      text: FOOTER_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [FOOTER_NAV_LINKS_SET_ID.ON_CONTACT_PAGE]: {
    [FOOTER_NAV_LINK_ID.TO_ROOT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ROOT,
      text: FOOTER_NAV_LINK_TEXT.TO_ROOT,
    },
    [FOOTER_NAV_LINK_ID.TO_SERVICES]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_SERVICES,
      text: FOOTER_NAV_LINK_TEXT.TO_SERVICES,
    },
    [FOOTER_NAV_LINK_ID.TO_ABOUT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ABOUT,
      text: FOOTER_NAV_LINK_TEXT.TO_ABOUT,
    },
    [FOOTER_NAV_LINK_ID.TO_MEDIA]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_MEDIA,
      text: FOOTER_NAV_LINK_TEXT.TO_MEDIA,
    },
    [FOOTER_NAV_LINK_ID.TO_LEGAL]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_LEGAL,
      text: FOOTER_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [FOOTER_NAV_LINKS_SET_ID.ON_LEGAL_PAGE]: {
    [FOOTER_NAV_LINK_ID.TO_ROOT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ROOT,
      text: FOOTER_NAV_LINK_TEXT.TO_ROOT,
    },
    [FOOTER_NAV_LINK_ID.TO_SERVICES]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_SERVICES,
      text: FOOTER_NAV_LINK_TEXT.TO_SERVICES,
    },
    [FOOTER_NAV_LINK_ID.TO_CONTACT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_CONTACT,
      text: FOOTER_NAV_LINK_TEXT.TO_CONTACT,
    },
    [FOOTER_NAV_LINK_ID.TO_ABOUT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ABOUT,
      text: FOOTER_NAV_LINK_TEXT.TO_ABOUT,
    },
    [FOOTER_NAV_LINK_ID.TO_MEDIA]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_MEDIA,
      text: FOOTER_NAV_LINK_TEXT.TO_MEDIA,
    },
  },

  [FOOTER_NAV_LINKS_SET_ID.ON_MEDIA_PAGE]: {
    [FOOTER_NAV_LINK_ID.TO_ROOT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ROOT,
      text: FOOTER_NAV_LINK_TEXT.TO_ROOT,
    },
    [FOOTER_NAV_LINK_ID.TO_SERVICES]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_SERVICES,
      text: FOOTER_NAV_LINK_TEXT.TO_SERVICES,
    },
    [FOOTER_NAV_LINK_ID.TO_CONTACT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_CONTACT,
      text: FOOTER_NAV_LINK_TEXT.TO_CONTACT,
    },
    [FOOTER_NAV_LINK_ID.TO_ABOUT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ABOUT,
      text: FOOTER_NAV_LINK_TEXT.TO_ABOUT,
    },
    [FOOTER_NAV_LINK_ID.TO_LEGAL]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_LEGAL,
      text: FOOTER_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [FOOTER_NAV_LINKS_SET_ID.ON_SERVICES_PAGE]: {
    [FOOTER_NAV_LINK_ID.TO_ROOT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ROOT,
      text: FOOTER_NAV_LINK_TEXT.TO_ROOT,
    },
    [FOOTER_NAV_LINK_ID.TO_CONTACT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_CONTACT,
      text: FOOTER_NAV_LINK_TEXT.TO_CONTACT,
    },
    [FOOTER_NAV_LINK_ID.TO_ABOUT]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_ABOUT,
      text: FOOTER_NAV_LINK_TEXT.TO_ABOUT,
    },
    [FOOTER_NAV_LINK_ID.TO_MEDIA]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_MEDIA,
      text: FOOTER_NAV_LINK_TEXT.TO_MEDIA,
    },
    [FOOTER_NAV_LINK_ID.TO_LEGAL]: {
      route: FOOTER_NAV_LINK_ROUTES.TO_LEGAL,
      text: FOOTER_NAV_LINK_TEXT.TO_LEGAL,
    },
  },
} as const;

const instanceMetaData: InstanceMetaData = {
  instanceId: "FOOTER-NAV-SET-LINKS-SERVICE-DEFAULT",
} as const;

const footerNavSetLinksService = new FooterNavSetLinksServices_Impl(
  instanceMetaData,
  defaultLogger,

  footerRepository,
  FOOTER_NAV_LINKS_SETS,
);

export {
  footerNavSetLinksService,
  instanceMetaData,
  FOOTER_NAV_LINKS_SETS,
  FOOTER_NAV_LINKS_SET_ID,
  FOOTER_NAV_LINK_ID,
  FOOTER_NAV_LINK_TEXT,
  FOOTER_NAV_LINK_ROUTES,
};
