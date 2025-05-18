import { ServiceOfferingsRepository_Impl } from "./ServiceOfferingsRepository_Impl";

import { appStore } from "../../react-redux/store";

import {
  serviceOfferingsSliceSelectors,
  serviceOfferingsSliceActions,
} from "../../react-redux/slices/service-offerings/serviceOfferings";

import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";

import { InstanceMetaData } from "./ServiceOfferingsRepository_Impl";

const instanceMetaData: InstanceMetaData = {
  instanceId: "SERVICE-OFFERINGS-REPOSITORY-DEFAULT",
};

const serviceOfferingsRepository = new ServiceOfferingsRepository_Impl(
  instanceMetaData,
  defaultLogger,

  appStore,
  serviceOfferingsSliceSelectors,
  serviceOfferingsSliceActions,
);

export { serviceOfferingsRepository, instanceMetaData };
