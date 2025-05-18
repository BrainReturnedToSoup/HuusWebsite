import { AppStore } from "../../react-redux/store";

import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

import { ServiceOfferingsSubsections } from "../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";
import { InvocationId } from "../../../logging/Logging_types";

import {
  ServiceOfferingsSliceActions,
  ServiceOfferingsSliceSelectors,
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
  #selectors: ServiceOfferingsSliceSelectors;
  #actions: ServiceOfferingsSliceActions;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    store: AppStore,
    selectors: ServiceOfferingsSliceSelectors,
    actions: ServiceOfferingsSliceActions,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#store = store;
    this.#selectors = selectors;
    this.#actions = actions;
  }

  getServiceOfferingsSubsections(
    correlationId: InvocationId,
  ): ServiceOfferingsSubsections {
    const subsections: ServiceOfferingsSubsections =
      this.#selectors.getServiceOfferingsSubsections(this.#store);

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
        "getServiceOfferings",
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.OBSERVED_VALUE,
        subsections,
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.RETURNED_VALUE,
        subsections,
      )
      .commit();

    return subsections;
  }

  setServiceOfferingsSubsections(
    correlationId: InvocationId,

    serviceOfferingsSubsections: ServiceOfferingsSubsections,
  ): void {
    this.#store.dispatch(
      this.#actions.setServiceOfferingsSubsections(serviceOfferingsSubsections),
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
        "setServiceOfferings()",
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.RECEIVED_ARGS,
        `serviceOfferingsSubsections=${serviceOfferingsSubsections}`,
      )
      .addAttribute(
        ServiceOfferingsRepositoryLogKeys_Enum.SET_VALUE,
        serviceOfferingsSubsections,
      )
      .commit();
  }
}

export { ServiceOfferingsRepository_Impl };
