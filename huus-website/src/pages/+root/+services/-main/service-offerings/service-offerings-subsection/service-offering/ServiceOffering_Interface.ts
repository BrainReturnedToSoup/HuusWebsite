import {
  ServiceOfferingDescription,
  ServiceOfferingEnquireOnClick,
  ServiceOfferingKeywords,
  ServiceOfferingPrice,
  ServiceOfferingPriceQuantifier,
  ServiceOfferingTitle,
} from "../../../../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

export interface ServiceOfferingProps_Interface {
  title: ServiceOfferingTitle;
  keywords: ServiceOfferingKeywords;
  description: ServiceOfferingDescription;
  price: ServiceOfferingPrice;
  priceQuantifier: ServiceOfferingPriceQuantifier;
  enquireOnClick: ServiceOfferingEnquireOnClick;
}
