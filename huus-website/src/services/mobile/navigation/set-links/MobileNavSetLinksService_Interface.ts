import { MobileNavLinksSetId } from "../../../../domain-types/navigation/mobile/links/Link_Types";

export interface MobileNavSetLinksService_Interface {
  apply(linkSetId: MobileNavLinksSetId): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
