import {
  ServiceOfferingEnquireOnClick,
  ServiceOfferingPrice,
  ServiceOfferingPriceQuantifier,
} from "../../../../../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

export interface PricingProps_Interface {
  price: ServiceOfferingPrice;
  priceQuantifier: ServiceOfferingPriceQuantifier;
  enquireOnClick: ServiceOfferingEnquireOnClick;
  setIsEnquireHovered: (bool: boolean) => void;
}
