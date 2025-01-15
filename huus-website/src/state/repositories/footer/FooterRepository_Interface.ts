import { FooterNavLinksSet } from "../../../domain-types/navigation/footer/links/Links_DomainTypes";

export interface FooterRepository_Interface {
  getNavLinksSet(): FooterNavLinksSet | null;
  setNavLinksSet(linksSet: FooterNavLinksSet): void;
}
