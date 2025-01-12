// all relevant types bundled with the service, since services sit at the top of the module dependency tree

export type FooterNavLinkRoute = string;

export type FooterNavLinkText = string;

export interface FooterNavLinkObj {
  route: FooterNavLinkRoute;
  text: FooterNavLinkText;
}

export type FooterNavLinkId = string;

export type FooterNavLinkSet = Record<FooterNavLinkId, FooterNavLinkObj>;

export type FooterNavLinkSetId = string | number;

export type FooterNavLinkSets = Record<FooterNavLinkSetId, FooterNavLinkSet>;

/*
    should be something like:

        const LinkSets = {
            [LinkSetId]: { 
                ...[LinkId]: {
                    route: [LinkRoute],
                    text: [LinkText]
                }
            }
        }

*/

// the entire link set should ideally be within the instance of the service

export interface FooterNavSetLinksService_Interface {
  applyLinkSet(linkSetId: FooterNavLinkSetId): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
