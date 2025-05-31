import {
  ServiceOfferingId,
  ServiceOfferingDescription,
  ServiceOfferingKeywords,
  ServiceOfferingPrice,
  ServiceOfferingPriceQuantifier,
  ServiceOfferingTitle,
  ServiceOfferingNavigateToOnEnquire,
} from "../../../../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

export interface ServiceOfferingProps_Interface {
  id: ServiceOfferingId;
  title: ServiceOfferingTitle;
  keywords: ServiceOfferingKeywords;
  description: ServiceOfferingDescription;
  price: ServiceOfferingPrice;
  priceQuantifier: ServiceOfferingPriceQuantifier;
  navigateToOnEnquire: ServiceOfferingNavigateToOnEnquire;
}
