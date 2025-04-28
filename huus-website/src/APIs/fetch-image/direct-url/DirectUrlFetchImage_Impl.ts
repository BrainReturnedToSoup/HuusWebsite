import { Logger_Interface } from "../../../logging/logger/Logger_Interface";
import { InstanceId } from "../../../logging/Logging_types";

import {
  OnSuccessHandler_LambdaInterface,
  FetchImage_Interface,
  OnFailureHandler_LambdaInterface,
  OnAbortHandler_LambdaInterface,
  StartingStrategy_LambdaInterface,
} from "../FetchImage_Interface";

import { DirectUrlFetchImageLogKeys_Enum } from "./DirectUrlFetchImage_Enum";

import {
  DirectUrlContext,
  DirectUrlFetchImageConfig,
  ImageConstructor,
} from "./DirectUrlFetchImage_Interface";

export interface InstanceMetaData {
  instanceId: InstanceId;
}

export class DirectUrlFetchImage_Impl
  implements FetchImage_Interface<DirectUrlContext>
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface;

  // fetching using the direct URL utilizes the DOM's img element and the
  // existing event handlers it has available. Thus, the image instance is constructed
  // and appended to like a regular DOM element.
  #imageConstructor: ImageConstructor;
  #imageElement: HTMLImageElement | null;
  #imageSrc: string;
  #imageHeight: number;
  #imageWidth: number;

  #context: DirectUrlContext; // transient state reinjected into handlers as an arg
  #startingStrategy: StartingStrategy_LambdaInterface<DirectUrlContext>; // function to execute

  // vvvvvvv handlers
  #onSuccess: OnSuccessHandler_LambdaInterface<DirectUrlContext> | null;
  #onFailure: OnFailureHandler_LambdaInterface<DirectUrlContext> | null;
  #onAbort: OnAbortHandler_LambdaInterface<DirectUrlContext> | null;

  // vvvvvvv important event flags
  #loaded: boolean;
  #loadError: boolean;
  #loadAborted: boolean;
  #hasExited: boolean;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface,

    config: DirectUrlFetchImageConfig,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#imageConstructor = config.imageConstructor;
    this.#imageElement = null;
    this.#imageSrc = config.imageSrc;
    this.#imageHeight = config.imageHeight;
    this.#imageWidth = config.imageWidth;

    // vvvvvvv re-injectable state container for on failure handling
    this.#context = config.context;
    this.#startingStrategy = config.startingStrategy;

    // vvvvvvv handlers
    this.#onSuccess = null;
    this.#onFailure = null;
    this.#onAbort = null;

    // vvvvvvv important event flags
    this.#loaded = false;
    this.#loadError = false;
    this.#loadAborted = false;
    this.#hasExited = false;

    // after all initializations, execute the supplied starting strategy
    // to begin fetching of the image. This supplied strategy will invoke
    // 'start()' within itself to actually start the fetch.
    const classInstanceScope = this;
    this.#startingStrategy({
      logger: this.#logger,
      instanceId: this.#instanceMetaData.instanceId,

      context: this.#context,
      start: this.#startImageFetch.bind(classInstanceScope), // bind to the surrounding class scope
    });
  }

  #startImageFetch(): void {
    if (this.#imageElement !== null) {
      // clean up to prevent memory leaks potentially just in case if
      // a retry is attempted and a new image element is initialized for the fetching.
      // This is important because the callbacks may contain references to the surrounding class context
      // so this is to be defensive of memory leaks.

      this.#imageElement.onload = null;
      this.#imageElement.onerror = null;
      this.#imageElement.onabort = null;
    }

    // injected image constructor reference, which allows mocking
    // with a humble object within this class instance.
    this.#imageElement = new this.#imageConstructor(
      this.#imageHeight,
      this.#imageWidth,
    );

    this.#imageElement.onload = () => {
      this.#loaded = true;

      this.#logger
        .createNewLog()
        .addAttribute(
          DirectUrlFetchImageLogKeys_Enum.INSTANCE_ID,
          this.#instanceMetaData.instanceId,
        )
        .addAttribute(
          DirectUrlFetchImageLogKeys_Enum.IMG_ELEMENT_EVENT,
          "onload",
        )
        .addAttribute(DirectUrlFetchImageLogKeys_Enum.IMAGE_SRC, this.#imageSrc)
        .commit();

      if (this.#onSuccess) {
        this.#onSuccess({
          logger: this.#logger,
          instanceId: this.#instanceMetaData.instanceId,

          context: this.#context,
        });
      }
    };

    this.#imageElement.onerror = () => {
      this.#loadError = true;

      this.#logger
        .createNewLog()
        .addAttribute(
          DirectUrlFetchImageLogKeys_Enum.INSTANCE_ID,
          this.#instanceMetaData.instanceId,
        )
        .addAttribute(
          DirectUrlFetchImageLogKeys_Enum.IMG_ELEMENT_EVENT,
          "onerror",
        )
        .addAttribute(DirectUrlFetchImageLogKeys_Enum.IMAGE_SRC, this.#imageSrc)
        .commit();

      if (this.#onFailure) {
        this.#onFailure({
          logger: this.#logger,
          instanceId: this.#instanceMetaData.instanceId,

          context: this.#context,
          retry: this.#retry,
          exit: this.#exit,
        });
      }
    };

    this.#imageElement.onabort = () => {
      this.#loadAborted = true;

      this.#logger
        .createNewLog()
        .addAttribute(
          DirectUrlFetchImageLogKeys_Enum.INSTANCE_ID,
          this.#instanceMetaData.instanceId,
        )
        .addAttribute(
          DirectUrlFetchImageLogKeys_Enum.IMG_ELEMENT_EVENT,
          "onabort",
        )
        .addAttribute(DirectUrlFetchImageLogKeys_Enum.IMAGE_SRC, this.#imageSrc)
        .commit();

      if (this.#onAbort) {
        this.#onAbort({
          logger: this.#logger,
          instanceId: this.#instanceMetaData.instanceId,

          context: this.#context,
        });
      }
    };

    this.#imageElement.src = this.#imageSrc;
  }

  #retry(): void {
    if (this.#hasExited) {
      throw new Error("already-exited"); // placeholder for now
    }

    this.#startImageFetch();
  }

  #exit(): void {
    if (this.#hasExited) {
      throw new Error("already-exited"); // placeholder for now
    }

    this.#hasExited = true;
  }

  setHandlerOnSuccess(
    handler: OnSuccessHandler_LambdaInterface<DirectUrlContext>,
  ): FetchImage_Interface<DirectUrlContext> {
    this.#onSuccess = handler;

    if (this.#loaded) {
      this.#onSuccess({
        logger: this.#logger,
        instanceId: this.#instanceMetaData.instanceId,

        context: this.#context,
      });
    }

    return this;
  }

  clearHandlerOnSuccess(): FetchImage_Interface<DirectUrlContext> {
    this.#onSuccess = null;

    return this;
  }

  setHandlerOnFailure(
    handler: OnFailureHandler_LambdaInterface<DirectUrlContext>,
  ): FetchImage_Interface<DirectUrlContext> {
    this.#onFailure = handler;

    const classInstanceContext = this;

    if (this.#loadError) {
      this.#onFailure({
        logger: this.#logger,
        instanceId: this.#instanceMetaData.instanceId,

        context: this.#context,
        retry: this.#retry.bind(classInstanceContext),
        exit: this.#exit.bind(classInstanceContext),
      });
    }

    return this;
  }

  clearHandlerOnFailure(): FetchImage_Interface<DirectUrlContext> {
    this.#onFailure = null;

    return this;
  }

  setHandlerOnAbort(
    handler: OnAbortHandler_LambdaInterface<DirectUrlContext>,
  ): FetchImage_Interface<DirectUrlContext> {
    this.#onAbort = handler;

    if (this.#loadAborted) {
      this.#onAbort({
        logger: this.#logger,
        instanceId: this.#instanceMetaData.instanceId,

        context: this.#context,
      });
    }

    return this;
  }

  clearHandlerOnAbort(): FetchImage_Interface<DirectUrlContext> {
    this.#onAbort = null;

    return this;
  }
}
