export type LogAttributeKey = string;
export type LogAttributeVal = any;
export interface LogAttributes_Interface {
  [key: LogAttributeKey]: LogAttributeVal;
}

// scope that handles logs in a functional-programming type of way, and thus is to be reused across logs that
// go through a particular logger instance.
export type OnCommit_Lambda = (log: LogAttributes_Interface) => void;

/*
    should follow a fluent-builder pattern because logs will be defined as key-value pairs essentially
*/

export interface Log_Interface {
  // undecided on the arg types as of now, but i know its a key-value fluent builder pattern.
  addAttribute(key: LogAttributeKey, val: LogAttributeVal): this;

  commit(): void;
}
