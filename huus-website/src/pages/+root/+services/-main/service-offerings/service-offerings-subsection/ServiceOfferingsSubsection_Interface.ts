import { ServiceOffering, ServiceOfferingsSubsectionTitle } from "../../../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

export interface ServiceOfferingsSubsectionProps_Interface {
  subsectionTitle: ServiceOfferingsSubsectionTitle;
  serviceOfferings: ServiceOffering[];
}
