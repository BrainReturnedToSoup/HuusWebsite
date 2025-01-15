/*
    An ID associated with a source invocation such as an on-click callback invoking a service method, which the ID
    is reinjected to all of the dependencies which allows per-callstack tracing of state that transfers even to the backend
*/
export type InvocationId = string;

/*
    An ID associated with data instantiation, serves a similar purpose to invocation IDs, but of course for data/object instantiation if applicable.
*/
export type InstantiationId = string;
