import { Log_Interface } from "./Log_Interface";
import { OnCommit_LambdaInterface } from "./OnCommit_LambdaInterface";

/*
    allows dependency injection of effectively different types of constructors while being type safe
*/

export type LogFactory_LambdaInterface = (
  onCommit: OnCommit_LambdaInterface,
) => Log_Interface;
