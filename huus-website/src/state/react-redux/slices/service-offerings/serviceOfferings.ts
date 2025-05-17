import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../../store";

import { ServiceOfferingsSet } from "../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

const serviceOfferingsSetsSlice = createSlice({
  name: "serviceOfferingsSets",

  initialState: {
    serviceOfferingsSets: [] as ServiceOfferingsSet[],
  },

  reducers: {
    setServiceOfferingsSets: (state, action): void => {
      state.serviceOfferingsSets = action.payload;
    },
  },
});

const selectors = {
  getServiceOfferingsSets: (store: AppStore): ServiceOfferingsSet[] => {
    return store.getState().serviceOfferingsSetsSlice.serviceOfferingsSets;
  },
};

const serviceOfferingsSetsSliceActions = serviceOfferingsSetsSlice.actions;
const serviceOfferingsSetsSliceSelectors = selectors;

export type ServiceOfferingsSetsSlice = typeof serviceOfferingsSetsSlice;
export type ServiceOfferingsSetsSliceActions =
  typeof serviceOfferingsSetsSliceActions;
export type ServiceOfferingsSetsSliceSelectors =
  typeof serviceOfferingsSetsSliceSelectors;

export {
  serviceOfferingsSetsSlice,
  serviceOfferingsSetsSliceActions,
  serviceOfferingsSetsSliceSelectors,
};
