/*
  NOT TO BE CONFUSED WITH THE TERM 'service' AS IT APPLIES TO AN ONION ARCHITECTURE.
  These types represent the types for services offered by the personal trainer.
*/

export type PtServiceId = string;

export type PtServiceTitle = string;

export type PtServiceKeyword = string;

export type PtServiceKeywords = PtServiceKeyword[];

export type PtServiceDescription = string;

// should include the symbol and formatting already
export type PtServicePrice = string;

// for instance, 'per bundle' within '$24.99 per bundle'
export type PtServicePriceQuantifier = string;

export interface PtServiceInstance {
  id: PtServiceId;
  title: PtServiceTitle;
  keywords: PtServiceKeywords;
  description: PtServiceDescription;
  price: PtServicePrice;
  priceQuantifier: PtServicePriceQuantifier;
}

export interface PtServiceInstances {
  [id: PtServiceId]: PtServiceInstance;
}
