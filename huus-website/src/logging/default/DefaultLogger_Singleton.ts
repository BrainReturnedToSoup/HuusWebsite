import { LogFactory_Impl } from "../LogFactory_Impl";
import { Logger_Impl } from "../Logger_Impl";
import { OnCommit_Impl } from "./DefaultOnCommit_Impl";

const defaultLogger = new Logger_Impl(LogFactory_Impl, OnCommit_Impl);

export { defaultLogger };
