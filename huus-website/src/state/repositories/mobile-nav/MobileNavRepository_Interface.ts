export type Link = string;

export type LinkId = string;

export type LinkSet = Record<LinkId, Link>;

export interface MobileNavRepository_Interface {
  getIsOpen(): boolean;
  setIsOpen(isOpen: boolean): void;

  getIsToggleDisabled(): boolean;
  setIsToggleDisabled(isDisabled: boolean): void;

  getLinkSet(): LinkSet | null;
  setLinkSet(linkSet: LinkSet): void;
}
