import {
  InstanceMetaData,
  MobileNavSetLinksService_Impl,
} from "./MobileNavSetLinksService_Impl";

import { MobileNavLinksSets } from "../../../../domain-types/navigation/mobile/links/Links_DomainTypes";

import { mobileNavRepository } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Singleton";

import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Singleton";

const MOBILE_NAV_LINK_ID = {
  TO_ROOT: "TO_ROOT",
  TO_ABOUT: "TO_ABOUT",
  TO_CONTACT: "TO_CONTACT",
  TO_LEGAL: "TO_LEGAL",
  TO_MEDIA: "TO_MEDIA",
  TO_SERVICES: "TO_SERVICES",
} as const;

const MOBILE_NAV_LINK_SET_ID = {
  ON_ROOT_PAGE: "ON_ROOT_PAGE",
  ON_ABOUT_PAGE: "ON_ABOUT_PAGE",
  ON_CONTACT_PAGE: "ON_CONTACT_PAGE",
  ON_LEGAL_PAGE: "ON_LEGAL_PAGE",
  ON_MEDIA_PAGE: "ON_MEDIA_PAGE",
  ON_SERVICES_PAGE: "ON_SERVICES_PAGE",
} as const;

const MOBILE_NAV_LINK_ROUTES = {
  [MOBILE_NAV_LINK_ID.TO_ROOT]: "/",
  [MOBILE_NAV_LINK_ID.TO_ABOUT]: "/about",
  [MOBILE_NAV_LINK_ID.TO_CONTACT]: "/contact",
  [MOBILE_NAV_LINK_ID.TO_LEGAL]: "/legal",
  [MOBILE_NAV_LINK_ID.TO_MEDIA]: "/media",
  [MOBILE_NAV_LINK_ID.TO_SERVICES]: "/services",
} as const;

// use the link IDs as it pertains to the Mobile Nav service mappings as of now, but potentially
// further move the links into a more agnostic '/enums' directory where they will use the interfaces
// provided by repositories and services combined.

const MOBILE_NAV_LINK_TEXT = {
  [MOBILE_NAV_LINK_ID.TO_ROOT]: "Home",
  [MOBILE_NAV_LINK_ID.TO_ABOUT]: "About",
  [MOBILE_NAV_LINK_ID.TO_CONTACT]: "Contact",
  [MOBILE_NAV_LINK_ID.TO_LEGAL]: "Legal",
  [MOBILE_NAV_LINK_ID.TO_MEDIA]: "Media",
  [MOBILE_NAV_LINK_ID.TO_SERVICES]: "Services",
} as const;

// basically, each link set is a link set per unique page when considering the mobile nav
// the duplication here is accidental, but the various pieces have the potential to change for
// different reasons. Plus, having the schema 'raw' in this way makes it easy to see the relationships
// that map to the actual link sets.
const MOBILE_NAV_LINK_SETS: MobileNavLinksSets = {
  [MOBILE_NAV_LINK_SET_ID.ON_ROOT_PAGE]: {
    [MOBILE_NAV_LINK_ID.TO_SERVICES]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_SERVICES,
      text: MOBILE_NAV_LINK_TEXT.TO_SERVICES,
    },
    [MOBILE_NAV_LINK_ID.TO_ABOUT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ABOUT,
      text: MOBILE_NAV_LINK_TEXT.TO_ABOUT,
    },
    [MOBILE_NAV_LINK_ID.TO_CONTACT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_CONTACT,
      text: MOBILE_NAV_LINK_TEXT.TO_CONTACT,
    },
    [MOBILE_NAV_LINK_ID.TO_MEDIA]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_MEDIA,
      text: MOBILE_NAV_LINK_TEXT.TO_MEDIA,
    },
    [MOBILE_NAV_LINK_ID.TO_LEGAL]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_LEGAL,
      text: MOBILE_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [MOBILE_NAV_LINK_SET_ID.ON_ABOUT_PAGE]: {
    [MOBILE_NAV_LINK_ID.TO_ROOT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ROOT,
      text: MOBILE_NAV_LINK_TEXT.TO_ROOT,
    },
    [MOBILE_NAV_LINK_ID.TO_SERVICES]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_SERVICES,
      text: MOBILE_NAV_LINK_TEXT.TO_SERVICES,
    },
    [MOBILE_NAV_LINK_ID.TO_CONTACT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_CONTACT,
      text: MOBILE_NAV_LINK_TEXT.TO_CONTACT,
    },
    [MOBILE_NAV_LINK_ID.TO_MEDIA]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_MEDIA,
      text: MOBILE_NAV_LINK_TEXT.TO_MEDIA,
    },
    [MOBILE_NAV_LINK_ID.TO_LEGAL]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_LEGAL,
      text: MOBILE_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [MOBILE_NAV_LINK_SET_ID.ON_CONTACT_PAGE]: {
    [MOBILE_NAV_LINK_ID.TO_ROOT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ROOT,
      text: MOBILE_NAV_LINK_TEXT.TO_ROOT,
    },
    [MOBILE_NAV_LINK_ID.TO_SERVICES]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_SERVICES,
      text: MOBILE_NAV_LINK_TEXT.TO_SERVICES,
    },
    [MOBILE_NAV_LINK_ID.TO_ABOUT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ABOUT,
      text: MOBILE_NAV_LINK_TEXT.TO_ABOUT,
    },
    [MOBILE_NAV_LINK_ID.TO_MEDIA]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_MEDIA,
      text: MOBILE_NAV_LINK_TEXT.TO_MEDIA,
    },
    [MOBILE_NAV_LINK_ID.TO_LEGAL]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_LEGAL,
      text: MOBILE_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [MOBILE_NAV_LINK_SET_ID.ON_LEGAL_PAGE]: {
    [MOBILE_NAV_LINK_ID.TO_ROOT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ROOT,
      text: MOBILE_NAV_LINK_TEXT.TO_ROOT,
    },
    [MOBILE_NAV_LINK_ID.TO_SERVICES]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_SERVICES,
      text: MOBILE_NAV_LINK_TEXT.TO_SERVICES,
    },
    [MOBILE_NAV_LINK_ID.TO_CONTACT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_CONTACT,
      text: MOBILE_NAV_LINK_TEXT.TO_CONTACT,
    },
    [MOBILE_NAV_LINK_ID.TO_ABOUT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ABOUT,
      text: MOBILE_NAV_LINK_TEXT.TO_ABOUT,
    },
    [MOBILE_NAV_LINK_ID.TO_MEDIA]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_MEDIA,
      text: MOBILE_NAV_LINK_TEXT.TO_MEDIA,
    },
  },

  [MOBILE_NAV_LINK_SET_ID.ON_MEDIA_PAGE]: {
    [MOBILE_NAV_LINK_ID.TO_ROOT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ROOT,
      text: MOBILE_NAV_LINK_TEXT.TO_ROOT,
    },
    [MOBILE_NAV_LINK_ID.TO_SERVICES]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_SERVICES,
      text: MOBILE_NAV_LINK_TEXT.TO_SERVICES,
    },
    [MOBILE_NAV_LINK_ID.TO_CONTACT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_CONTACT,
      text: MOBILE_NAV_LINK_TEXT.TO_CONTACT,
    },
    [MOBILE_NAV_LINK_ID.TO_ABOUT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ABOUT,
      text: MOBILE_NAV_LINK_TEXT.TO_ABOUT,
    },
    [MOBILE_NAV_LINK_ID.TO_LEGAL]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_LEGAL,
      text: MOBILE_NAV_LINK_TEXT.TO_LEGAL,
    },
  },

  [MOBILE_NAV_LINK_SET_ID.ON_SERVICES_PAGE]: {
    [MOBILE_NAV_LINK_ID.TO_ROOT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ROOT,
      text: MOBILE_NAV_LINK_TEXT.TO_ROOT,
    },
    [MOBILE_NAV_LINK_ID.TO_CONTACT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_CONTACT,
      text: MOBILE_NAV_LINK_TEXT.TO_CONTACT,
    },
    [MOBILE_NAV_LINK_ID.TO_ABOUT]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_ABOUT,
      text: MOBILE_NAV_LINK_TEXT.TO_ABOUT,
    },
    [MOBILE_NAV_LINK_ID.TO_MEDIA]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_MEDIA,
      text: MOBILE_NAV_LINK_TEXT.TO_MEDIA,
    },
    [MOBILE_NAV_LINK_ID.TO_LEGAL]: {
      route: MOBILE_NAV_LINK_ROUTES.TO_LEGAL,
      text: MOBILE_NAV_LINK_TEXT.TO_LEGAL,
    },
  },
} as const;

const instanceMetaData: InstanceMetaData = {
  instanceId: "MOBILE-NAV-SET-LINKS-SERVICE-DEFAULT",
} as const;

const mobileNavSetLinksService = new MobileNavSetLinksService_Impl(
  instanceMetaData,
  defaultLogger,

  mobileNavRepository,
  MOBILE_NAV_LINK_SETS,
);

export {
  mobileNavSetLinksService,
  instanceMetaData,
  MOBILE_NAV_LINK_SETS,
  MOBILE_NAV_LINK_SET_ID,
  MOBILE_NAV_LINK_ID,
  MOBILE_NAV_LINK_TEXT,
  MOBILE_NAV_LINK_ROUTES,
};
