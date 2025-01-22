import { Logger_Interface } from "./Logger_Interface";
import { Log_Interface } from "./Log_Interface";
import { LogFactory_Interface } from "./LogFactory_Interface";
import { OnCommit_LambdaInterface } from "./OnCommit_LambdaInterface";

// allows a single impl instance to create multiple new logs at the same time, because log
// instances maintain their own context but share an onCommit lambda that handles their commits in a FP type of way.

export class Logger_Impl implements Logger_Interface {
  #logFactory: LogFactory_Interface;
  #onCommit: OnCommit_LambdaInterface;

  constructor(
    logFactory: LogFactory_Interface,
    onCommit: OnCommit_LambdaInterface,
  ) {
    this.#logFactory = logFactory;
    this.#onCommit = onCommit;
  }

  // creates a new log that can be fluent chained and commited because
  createNewLog(): Log_Interface {
    const newLog = this.#logFactory(this.#onCommit);

    return newLog; // returns the log instance which can now be fluent chained from there and committed.
  }
}
