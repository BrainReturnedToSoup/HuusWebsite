import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Link_Types";

// hard coupled to the concerns of the service, so the methods are

export interface MobileNavRepository_Interface {
  getIsOpen(): boolean;
  setIsOpen(isOpen: boolean): void;

  getIsToggleDisabled(): boolean;
  setIsToggleDisabled(isDisabled: boolean): void;

  getLinksSet(): MobileNavLinksSet | null;
  setLinksSet(linkSet: MobileNavLinksSet): void;
}
