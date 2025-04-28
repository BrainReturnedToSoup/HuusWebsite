import { Logger_Interface } from "../../logging/logger/Logger_Interface";
import { InstanceId } from "../../logging/Logging_types";

// config

export type StartImageFetch_LambdaInterface = () => void;
export interface StartingStrategyArgs<T> {
  logger: Logger_Interface;
  instanceId: InstanceId;

  context: T;
  start: StartImageFetch_LambdaInterface;
}
export type StartingStrategy_LambdaInterface<T> = (
  args: StartingStrategyArgs<T>,
) => void;

export interface FetchImageConfig<T> {
  startingStrategy: StartingStrategy_LambdaInterface<T>;
  context: T;
}

/*
  'FetchImageConfig' example:

  {
    startingStrategy: (
      {
        logger: [logger instance to inject];
        instanceId: [instanceId corresponding to the fetch instance],

        context: [whatever context instance that is reinjected amongst the various handlers to expose reusable instance context],
        start: [a function that allows the starting of the fetch itself in terms of networking]
      }
    ) => {
      // logic for starting the fetch, but allows pre-fetch configuration, delays, some level of behavioral configuration that you want to define.
    },

    context: [the actual context instance itself allocated, this is injected into 'startingStrategy']
  }

*/

// on success

export interface OnSuccessArgs<T> {
  logger: Logger_Interface;
  instanceId: InstanceId;

  context: T;
}
export type OnSuccessHandler_LambdaInterface<T> = (
  args: OnSuccessArgs<T>,
) => void;

/*

  'OnSuccessHandler' example:

  (
    {
        logger: [logger instance to inject];
        instanceId: [instanceId corresponding to the fetch instance],

        context: [whatever context instance that is reinjected amongst the various handlers to expose reusable instance context],
    }
  ) => {
    // logic to handle the success event
  }

*/

// on failure

export type RetryOption_LambdaInterface = () => void;
export type ExitOption_LambdaInterface = () => void;
export interface OnFailureArgs<T> {
  logger: Logger_Interface;
  instanceId: InstanceId;

  context: T;
  retry: RetryOption_LambdaInterface;
  exit: ExitOption_LambdaInterface;
}
export type OnFailureHandler_LambdaInterface<T> = (
  args: OnFailureArgs<T>,
) => void;

/*

  'OnFailureHandler' example:

  (
    {
        logger: [logger instance to inject];
        instanceId: [instanceId corresponding to the fetch instance],

        context: [whatever context instance that is reinjected amongst the various handlers to expose reusable instance context],
        retry: [a function that allows the execution to attempt a fetch retry. This allows
           lifecycles that may invoke any of the event handlers while maintaining the original context object. This allows you to implement
           retry policies on a case-by-case basis when combined with reused state within the context]
        exit: [a function that terminates any attempts at fetching]
    }
  ) => {
    // logic to handle the failure event
  }

*/

// on abort

export interface OnAbortArgs<T> {
  logger: Logger_Interface;
  instanceId: InstanceId;

  context: T;
}

/*

  'OnFailureHandler' example:

  (
    {
        logger: [logger instance to inject];
        instanceId: [instanceId corresponding to the fetch instance],

        context: [whatever context instance that is reinjected amongst the various handlers to expose reusable instance context],
    }
  ) => {
    // logic to handle the abort event
  }

*/

export type OnAbortHandler_LambdaInterface<T> = (args: OnAbortArgs<T>) => void;

/*
    General pattern is to declare your handlers in a fluent pattern, then 
    start the request. This ensures that handlers are already declared prior to any network calls
    meaning no potential handling race conditions as it pertains to potential network calls.

    The onFailure callback can potentially be called multiple times in a sort of feedback loop that depends on some 
    transient state within the specific image fetching instance. Based on whatever condition, decide to invoke the 
    'exit' or 'tryAgain' callbacks supplied as args.
*/

export interface FetchImage_Interface<T> {
  setHandlerOnSuccess(
    handler: OnSuccessHandler_LambdaInterface<T>,
  ): FetchImage_Interface<T>;

  clearHandlerOnSuccess(): FetchImage_Interface<T>;

  setHandlerOnFailure(
    handler: OnFailureHandler_LambdaInterface<T>,
  ): FetchImage_Interface<T>;

  clearHandlerOnFailure(): FetchImage_Interface<T>;

  setHandlerOnAbort(
    handler: OnAbortHandler_LambdaInterface<T>,
  ): FetchImage_Interface<T>;

  clearHandlerOnAbort(): FetchImage_Interface<T>;
}
