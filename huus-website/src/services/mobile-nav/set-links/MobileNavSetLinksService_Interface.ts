// have all of the relevant types in the service interface, which APIs and repositories then import
// and use for typing. This keeps the services at the top of the dependency tree

export type MobileNavLink = string;

export type MobileNavLinkId = string;

export type MobileNavLinkSet = Record<MobileNavLinkId, MobileNavLink>;

export type MobileNavLinkSetId = string | number;

export type MobileNavLinkSets = Record<MobileNavLinkSetId, MobileNavLinkSet>;

/*
    should be something like:

        const LinkSets = {
            [LinkSetId]: { 
                ...[LinkId]: [Link]
            }
        }


*/

export interface MobileNavSetLinksService_Interface {
  applyLinkSet(linkSetId: MobileNavLinkSetId): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
