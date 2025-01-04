// all relevant types bundled with the service, since services sit at the top of the module dependency tree

export type FooterNavLink = string;

export type FooterNavLinkId = string;

export type FooterNavLinkSet = Record<FooterNavLinkId, FooterNavLink>;

export type FooterNavLinkSetId = string | number;

export type FooterNavLinkSets = Record<FooterNavLinkSetId, FooterNavLinkSet>;

/*
    should be something like:

        const LinkSets = {
            [LinkSetId]: { 
                ...[LinkId]: [Link]
            }
        }


*/

export interface FooterNavSetLinksService_Interface {
  applyLinkSet(linkSetId: FooterNavLinkSetId): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
