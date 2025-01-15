import { Log_Interface, OnCommit_Lambda } from "./Log_Interface";

/*
    allows dependency injection of effectively different types of constructors while being type safe
*/

export type LogFactory_Interface = (onCommit: OnCommit_Lambda) => Log_Interface;
