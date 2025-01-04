import { MobileNavLinkSet } from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Interface";

export interface MobileNavRepository_Interface {
  getIsOpen(): boolean;
  setIsOpen(isOpen: boolean): void;

  getIsToggleDisabled(): boolean;
  setIsToggleDisabled(isDisabled: boolean): void;

  getLinkSet(): MobileNavLinkSet | null;
  setLinkSet(linkSet: MobileNavLinkSet): void;
}
