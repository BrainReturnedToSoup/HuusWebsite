import { LogFactory_Interface } from "./LogFactory_Interface";
import { Log_Impl } from "./Log_Impl";
import { OnCommit_Lambda } from "./Log_Interface";

export const LogFactory_Impl: LogFactory_Interface = (
  onCommit: OnCommit_Lambda,
) => {
  return new Log_Impl(onCommit);
};
