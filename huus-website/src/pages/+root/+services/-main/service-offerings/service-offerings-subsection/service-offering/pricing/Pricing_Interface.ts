import {
  ServiceOfferingId,
  ServiceOfferingPrice,
  ServiceOfferingPriceQuantifier,
} from "../../../../../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

export interface PricingProps_Interface {
  offeringId: ServiceOfferingId;
  price: ServiceOfferingPrice;
  priceQuantifier: ServiceOfferingPriceQuantifier;

  navigateToOnEnquire: string;
  setIsEnquireHovered: (bool: boolean) => void;
}
