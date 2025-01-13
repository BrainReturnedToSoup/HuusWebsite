import { FooterNavLinksSet } from "../../../domain-types/navigation/footer/links/Link_DomainTypes";

export interface FooterRepository_Interface {
  getNavLinkSet(): FooterNavLinksSet | null;
  setNavLinkSet(linkSet: FooterNavLinksSet): void;
}
