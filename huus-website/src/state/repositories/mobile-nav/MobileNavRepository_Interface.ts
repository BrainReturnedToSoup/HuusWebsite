import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";

// hard coupled to the concerns of the service, so the methods are

export interface MobileNavRepository_Interface {
  getIsOpen(): boolean;
  setIsOpen(isOpen: boolean): void;

  getIsToggleDisabled(): boolean;
  setIsToggleDisabled(isDisabled: boolean): void;

  getLinksSet(): MobileNavLinksSet | null;
  setLinksSet(linksSet: MobileNavLinksSet): void;
}


