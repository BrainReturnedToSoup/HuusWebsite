import { LogFactory_LambdaImpl } from "../LogFactory_LambdaImpl";
import { Logger_Impl } from "../Logger_Impl";
import { OnCommit_LambdaImpl } from "./DefaultOnCommit_LambdaImpl";

const defaultLogger = new Logger_Impl(LogFactory_LambdaImpl, OnCommit_LambdaImpl);

export { defaultLogger };
