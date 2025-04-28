import { InvocationId } from "../../logging/Logging_types";
import { FetchImage_Interface } from "./FetchImage_Interface";
import { FetchImageConfig } from "./FetchImage_Interface";

/*
    T: Type of the context that is to be re-injected each time the 
    failure handler is fired.

    General pattern is to create a new FetchImage instance, and declare handlers on such 
    using a fluent pattern. The FetchImage instance requires a certain config schema, since
    the instance will be stateful. Thus, the factory here provides an instantiatable and trackable
    instance for creating fetch instances.
*/

export interface FetchImageFactory_Interface<T> {
  newFetch(
    invocationId: InvocationId,

    config: FetchImageConfig<T>,
  ): FetchImage_Interface<T>;
}
