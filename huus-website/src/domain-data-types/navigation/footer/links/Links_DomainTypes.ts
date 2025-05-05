export type FooterNavLinkRoute = string;

export type FooterNavLinkText = string;

export interface FooterNavLinkData {
  route: FooterNavLinkRoute;
  text: FooterNavLinkText;
}

export type FooterNavLinkId = string;

/*
    {
        [MobileNavLinkId]: [MobileNavLinkData]
    }
*/

export interface FooterNavLinksSet {
  [linkId: FooterNavLinkId]: FooterNavLinkData;
}

export type FooterNavLinksSetId = string;

/*
    [MobileNavLinksSetId]: [MobileNavLink]  
*/

export interface FooterNavLinksSets {
  [linkSetId: FooterNavLinksSetId]: FooterNavLinksSet;
}

/*

    Should look something like this.

    {
        [linkSetsId]: {
            ...
            [linkSetId]: {
                ...
                [linkId]: [FooterNavLinkData]
            }
        }
    }

*/

// // a test to ensure that the above types achieve the right typing structure
// const test: FooterNavLinksSets = {
//   linkSetId1: {
//     linkId1: {
//       route: "",
//       text: "",
//     },

//     linkId2: {
//       route: "",
//       text: "",
//     },
//   },

//   linkSetId2: {
//     linkId1: {
//       route: "",
//       text: "",
//     },

//     linkId2: {
//       route: "",
//       text: "",
//     },
//   },
// };
