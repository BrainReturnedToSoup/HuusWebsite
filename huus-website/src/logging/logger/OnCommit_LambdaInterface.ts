// scope that handles logs in a functional-programming type of way, and thus is to be reused across logs that
// go through a particular logger instance.
import { LogAttributes_Interface } from "./Log_Interface";

export type OnCommit_LambdaInterface = (log: LogAttributes_Interface) => void;
