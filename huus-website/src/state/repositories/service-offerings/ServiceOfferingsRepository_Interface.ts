import { ServiceOfferingsSubsections } from "../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";
import { InvocationId } from "../../../logging/Logging_types";

export interface ServiceOfferingsRepository_Interface {
  getServiceOfferingsSubsections(
    correlationId: InvocationId,
  ): ServiceOfferingsSubsections;
  setServiceOfferingsSubsections(
    correlationId: InvocationId,

    serviceOfferingsSubsections: ServiceOfferingsSubsections,
  ): void;
}
