import { Log_Interface } from "../../../logging/logger/Log_Interface";
import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { InstanceId, InvocationId } from "../../../logging/Logging_types";

import {
  DomBodyOverflowX_Enum,
  DomBodyOverflowY_Enum,
  DomBodyRepositoryLogKeys_Enum,
} from "./DomBodyRepository_Enum";
import { DomBodyRepository_Interface } from "./DomBodyRepository_Interface";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

export class DomBodyRepository_Impl implements DomBodyRepository_Interface {
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  #document: Document;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    document: Document,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#document = document;
  }

  #loggingHelperForGetters(
    invocationId: InvocationId,

    methodName: string,
    observedValue: any,
    returnedValue: any,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        DomBodyRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(DomBodyRepositoryLogKeys_Enum.INVOCATION_ID, invocationId)
      .addAttribute(DomBodyRepositoryLogKeys_Enum.INVOKED_GETTER, methodName)
      .addAttribute(DomBodyRepositoryLogKeys_Enum.OBSERVED_VALUE, observedValue)
      .addAttribute(
        DomBodyRepositoryLogKeys_Enum.RETURNED_VALUE,
        returnedValue,
      );
  }

  #loggingHelperForSetters(
    invocationId: InvocationId,

    methodName: string,
    receivedArgs: string,
    setValue: any,
  ): Log_Interface {
    return this.#logger
      .createNewLog()
      .addAttribute(
        DomBodyRepositoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(DomBodyRepositoryLogKeys_Enum.INVOCATION_ID, invocationId)
      .addAttribute(DomBodyRepositoryLogKeys_Enum.INVOKED_SETTER, methodName)
      .addAttribute(DomBodyRepositoryLogKeys_Enum.RECEIVED_ARGS, receivedArgs)
      .addAttribute(DomBodyRepositoryLogKeys_Enum.SET_VALUE, setValue);
  }

  getOverflowY(invocationId: InvocationId): DomBodyOverflowY_Enum {
    const currState = this.#document.body.style.overflowY;

    if (!(currState in DomBodyOverflowY_Enum)) {
      // throw error here
      throw Error();
    }

    this.#loggingHelperForGetters(
      invocationId,

      "getOverflowY",
      currState,
      currState,
    ).commit();

    return currState as DomBodyOverflowY_Enum;
  }

  setOverflowY(
    invocationId: InvocationId,

    property: DomBodyOverflowY_Enum,
  ): void {
    this.#document.body.style.overflowY = property;

    this.#loggingHelperForSetters(
      invocationId,

      "setOverflowY",
      `property:${property}`,
      property,
    );
  }

  getOverflowX(invocationId: InvocationId): DomBodyOverflowX_Enum {
    const currState = this.#document.body.style.overflowX;

    if (!(currState in DomBodyOverflowX_Enum)) {
      // throw error here
      throw Error();
    }

    this.#loggingHelperForGetters(
      invocationId,

      "getOverflowX",
      currState,
      currState,
    ).commit();

    return currState as DomBodyOverflowX_Enum;
  }

  setOverflowX(
    invocationId: InvocationId,

    property: DomBodyOverflowX_Enum,
  ): void {
    this.#document.body.style.overflowX = property;

    this.#loggingHelperForSetters(
      invocationId,

      "setOverflowX",
      `property:${property}`,
      property,
    );
  }
}
