import { FooterNavLinksSetId } from "../../../../domain-data-types/navigation/footer/links/Links_DomainTypes";
import { InvocationId } from "../../../../logging/Logging_types";

export interface FooterNavSetLinksService_Interface {
  applyLinksSet(
    invocationId: InvocationId,

    linksSetId: FooterNavLinksSetId,
  ): void; // should be defined via schemas injected into the constructor. FUTURE ME FIGURE IT OUT
}
