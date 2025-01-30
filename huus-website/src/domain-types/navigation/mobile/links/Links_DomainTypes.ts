export type MobileNavLinkRoute = string;

export type MobileNavLinkText = string;

export interface MobileNavLinkData {
  route: MobileNavLinkRoute;
  text: MobileNavLinkText;
}

/*
    {
        [MobileNavLinkId]: [MobileNavLinkData]
    }
*/

export type MobileNavLinkId = string;

export interface MobileNavLinksSet {
  [linkId: MobileNavLinkId]: MobileNavLinkData;
}

/*
    [MobileNavLinksSetId]: [MobileNavLink]  
*/

export type MobileNavLinksSetId = string;

export interface MobileNavLinksSets {
  [linkSetId: MobileNavLinksSetId]: MobileNavLinksSet;
}

/*

    Should look something like this.

    {
        [linksSetsId]: {
            ...
            [linksSetId]: {
                ...
                [linkId]: { route: ..., text: ... }
            }
        }
    }

*/

// a test to ensure that the above types achieve the right typing structure
const test: MobileNavLinksSets = {
  linkSetId1: {
    linkId1: {
      route: "",
      text: "",
    },

    linkId2: {
      route: "",
      text: "",
    },
  },

  linkSetId2: {
    linkId1: {
      route: "",
      text: "",
    },

    linkId2: {
      route: "",
      text: "",
    },
  },
};
