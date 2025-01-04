import { FooterNavLinkSet } from "../../../services/footer/nav/set-links/FooterNavSetLinksService_Interface";

export interface FooterRepository_Interface {
  getNavLinkSet(): FooterNavLinkSet | null;
  setNavLinkSet(linkSet: FooterNavLinkSet): void;
}
