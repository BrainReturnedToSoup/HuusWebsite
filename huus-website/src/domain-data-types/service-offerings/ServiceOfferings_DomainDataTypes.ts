/*
  NOT TO BE CONFUSED WITH THE TERM 'service' AS IT APPLIES TO THE SOA ARCHITECTURE.
  These types represent the types for services offered by the personal trainer.
*/

export type ServiceOfferingId = string;

export type ServiceOfferingTitle = string;

export type ServiceOfferingKeyword = string;

export type ServiceOfferingKeywords = ServiceOfferingKeyword[];

export type ServiceOfferingDescription = string;

// should include the symbol and formatting already
export type ServiceOfferingPrice = string;

// for instance, 'per bundle' within '$24.99 per bundle'
export type ServiceOfferingPriceQuantifier = string;

export interface ServiceOffering {
  id: ServiceOfferingId;
  title: ServiceOfferingTitle;
  keywords: ServiceOfferingKeywords;
  description: ServiceOfferingDescription;
  price: ServiceOfferingPrice;
  priceQuantifier: ServiceOfferingPriceQuantifier;
}

export interface ServiceOfferings {
  [id: ServiceOfferingId]: ServiceOffering;
}

export type ServiceOfferingsSetLabel = string;

export interface ServiceOfferingsSet {
  [label: ServiceOfferingsSetLabel]: ServiceOfferings;
}
