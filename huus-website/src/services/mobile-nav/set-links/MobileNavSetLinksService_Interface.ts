import { LinkSet } from "../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

export type LinkSetId = string | number;

export type LinkSets = Record<LinkSetId, LinkSet>;

/*
    should be something like:

        const LinkSets = {
            [LinkSetId]: { 
                ...[LinkId]: [Link]
            }
        }


*/

export interface MobileNavSetLinksService_Interface {
  applyLinkSet(linkSetId: LinkSetId): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
