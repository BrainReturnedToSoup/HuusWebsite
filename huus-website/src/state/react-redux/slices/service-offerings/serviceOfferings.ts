import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../../store";

import { ServiceOfferingsSubsections } from "../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

const staticConfig: ServiceOfferingsSubsections = [
  {
    title: "Base",
    serviceOfferings: [
      {
        id: "0",
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        priceQuantifier: "Per session",
        navigateToOnEnquire: "/contact",
      },
      {
        id: "1",
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        priceQuantifier: "Per session",
        navigateToOnEnquire: "/contact",
      },
      {
        id: "2",
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        priceQuantifier: "Per session",
        navigateToOnEnquire: "/contact",
      },
      {
        id: "3",
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        priceQuantifier: "Per session",
        navigateToOnEnquire: "/contact",
      },
    ],
  },
  {
    title: "Bundles",
    serviceOfferings: [
      {
        id: "4",
        title: "Random Service",
        keywords: ["Intermediate", "End-to-end", "Commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        priceQuantifier: "Per bundle",
        navigateToOnEnquire: "/contact",
      },
      {
        id: "5",
        title: "Random Service",
        keywords: ["Intermediate", "End-to-end", "Commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        priceQuantifier: "Per bundle",
        navigateToOnEnquire: "/contact",
      },
    ],
  },
];

const serviceOfferingsSlice = createSlice({
  name: "serviceOfferings",

  initialState: {
    serviceOfferingsSubsections: staticConfig as ServiceOfferingsSubsections,
  },

  reducers: {
    setServiceOfferingsSubsections: (state, action): void => {
      state.serviceOfferingsSubsections = action.payload;
    },
  },
});

const selectors = {
  getServiceOfferingsSubsections: (
    store: AppStore,
  ): ServiceOfferingsSubsections => {
    return store.getState().serviceOfferingsSlice.serviceOfferingsSubsections;
  },
};

const serviceOfferingsSliceActions = serviceOfferingsSlice.actions;
const serviceOfferingsSliceSelectors = selectors;

export type ServiceOfferingsSlice = typeof serviceOfferingsSlice;
export type ServiceOfferingsSliceActions = typeof serviceOfferingsSliceActions;
export type ServiceOfferingsSliceSelectors =
  typeof serviceOfferingsSliceSelectors;

export {
  serviceOfferingsSlice,
  serviceOfferingsSliceActions,
  serviceOfferingsSliceSelectors,
};
