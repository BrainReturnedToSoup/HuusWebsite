import { ServiceOfferingsSet } from "../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";
import { InvocationId } from "../../../logging/Logging_types";

export interface ServiceOfferingsRepository_Interface {
  getServiceOfferingsSets(correlationId: InvocationId): ServiceOfferingsSet[];
  setServiceOfferingsSets(
    correlationId: InvocationId,

    serviceOfferingsSet: ServiceOfferingsSet[],
  ): void;
}
