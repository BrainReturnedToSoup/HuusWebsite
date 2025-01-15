import { FooterNavLinksSetId } from "../../../../domain-types/navigation/footer/links/Links_DomainTypes";

export interface FooterNavSetLinksService_Interface {
  apply(linkSetId: FooterNavLinksSetId): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
