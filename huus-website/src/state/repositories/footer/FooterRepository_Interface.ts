import { FooterNavLinksSet } from "../../../domain-data-types/navigation/footer/links/Links_DomainTypes";
import { InvocationId } from "../../../logging/Logging_types";

export interface FooterRepository_Interface {
  getNavLinksSet(invocationId: InvocationId): FooterNavLinksSet | null;
  setNavLinksSet(
    invocationId: InvocationId,

    linksSet: FooterNavLinksSet,
  ): void;
}
