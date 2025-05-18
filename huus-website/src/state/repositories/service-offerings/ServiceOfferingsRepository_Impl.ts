import { AppStore } from "../../react-redux/store";

import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

import { ServiceOfferingsSet } from "../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";
import { InvocationId } from "../../../logging/Logging_types";

import {
  ServiceOfferingsSetsSliceActions,
  ServiceOfferingsSetsSliceSelectors,
} from "../../react-redux/slices/service-offerings/serviceOfferings";

import { ServiceOfferingsRepository_Interface } from "./ServiceOfferingsRepository_Interface";

import { ServiceOfferingsRepositoryLogKeys_Enum } from "./ServiceOfferingsRepository_Enum";

export interface InstanceMetaData {
  instanceId: string;
}

class ServiceOfferingsRepository_Impl
  implements ServiceOfferingsRepository_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #store: AppStore;
  #selectors: ServiceOfferingsSetsSliceSelectors;
  #actions: ServiceOfferingsSetsSliceActions;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    store: AppStore,
    selectors: ServiceOfferingsSetsSliceSelectors,
    actions: ServiceOfferingsSetsSliceActions,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  getServiceOfferingsSets(correlationId: InvocationId): ServiceOfferingsSet[] {
    const sets: ServiceOfferingsSet[] = this.#selectors.getServiceOfferingsSets(
      this.#store,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData,
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.CORRELATION_ID,
        correlationId,
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.INVOKED_GETTER,
        "getServiceOfferingsSets",
      )
      .addAttribute(ServiceOfferingsRepositoryLogKeys_Enum.OBSERVED_VALUE, sets)
      .addAttribute(ServiceOfferingsRepositoryLogKeys_Enum.RETURNED_VALUE, sets)
      .commit();

    return sets;
  }

  setServiceOfferingsSets(
    correlationId: InvocationId,

    serviceOfferingsSets: ServiceOfferingsSet[],
  ): void {
    this.#store.dispatch(
      this.#actions.setServiceOfferingsSets(serviceOfferingsSets),
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.CORRELATION_ID,
        correlationId,
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.INVOKED_SETTER,
        "setServiceOfferingsSets()",
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `serviceOfferingsSets=${serviceOfferingsSets}`,
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.SET_VALUE,
        serviceOfferingsSets,
      )
      .commit();
  }
}

export { ServiceOfferingsRepository_Impl };
