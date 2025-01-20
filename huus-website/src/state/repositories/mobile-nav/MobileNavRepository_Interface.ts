import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";
import { InvocationId } from "../../../logging/Logging_types";

// hard coupled to the concerns of the service, so the methods are

export interface MobileNavRepository_Interface {
  getIsOpen(invocationId: InvocationId): boolean;
  setIsOpen(
    invocationId: InvocationId,

    isOpen: boolean,
  ): void;

  getIsToggleDisabled(invocationId: InvocationId): boolean;
  setIsToggleDisabled(
    invocationId: InvocationId,

    isToggleDisabled: boolean,
  ): void;

  getLinksSet(invocationId: InvocationId): MobileNavLinksSet | null;
  setLinksSet(
    invocationId: InvocationId,

    linksSet: MobileNavLinksSet,
  ): void;
}
