import { MobileNavLinksSetId } from "../../../../domain-types/navigation/mobile/links/Links_DomainTypes";
import { InvocationId } from "../../../../logging/Logging_types";

export interface MobileNavSetLinksService_Interface {
  apply(
    invocationId: InvocationId,

    linkSetId: MobileNavLinksSetId,
  ): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
