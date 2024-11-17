export interface MobileNavRepositoryInterface {
  getIsOpen(): boolean;
  setIsOpen(isOpen: boolean): void;

  getIsToggleDisabled(): boolean;
  setIsToggleDisabled(isDisabled: boolean): void;
}
