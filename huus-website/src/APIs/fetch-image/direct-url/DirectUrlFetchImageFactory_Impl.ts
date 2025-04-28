import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { InstanceId, InvocationId } from "../../../logging/Logging_types";
import { FetchImage_Interface } from "../FetchImage_Interface";

import { FetchImageFactory_Interface } from "../FetchImageFactory_Interface";

import { DirectUrlFetchImage_Impl } from "./DirectUrlFetchImage_Impl";
import { DirectUrlFetchImageFactoryLogKeys_Enum } from "./DirectUrlFetchImageFactory_Enum";

import {
  DirectUrlFetchImageConfig,
  DirectUrlContext,
} from "./DirectUrlFetchImage_Interface";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

export class DirectUrlFetchImageFactory_Impl
  implements FetchImageFactory_Interface<DirectUrlContext>
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  constructor(instanceMetaData: InstanceMetaData, logger: Logger_Interface) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;
  }

  newFetch(
    invocationId: InvocationId,

    config: DirectUrlFetchImageConfig,
  ): FetchImage_Interface<DirectUrlContext> {
    // define the instance ID of the image fetching instance based on the initial invocation ID supplied to
    // 'newFetch'. This associates fetch instances with fetch factory instances.
    const fetchImageInstanceId = `DIRECT-URL-FETCH-IMAGE:${invocationId}`,
      fetchImageInstanceMetaData = { instanceId: fetchImageInstanceId };

    const fetchImageInstance = new DirectUrlFetchImage_Impl(
      fetchImageInstanceMetaData,
      this.#logger,

      config,
    );

    this.#logger
      .createNewLog()
      .addAttribute(
        DirectUrlFetchImageFactoryLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        DirectUrlFetchImageFactoryLogKeys_Enum.INVOCATION_ID,
        invocationId,
      )
      .addAttribute(
        DirectUrlFetchImageFactoryLogKeys_Enum.CREATED_IMAGE_FETCH_INSTANCE,
        fetchImageInstanceId,
      )
      .commit();

    return fetchImageInstance;
  }
}
