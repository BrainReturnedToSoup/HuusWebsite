import { LogFactory_Interface } from "./LogFactory_Interface";
import { Log_Impl } from "./Log_Impl";

import { OnCommit_LambdaInterface } from "./OnCommit_LambdaInterface";

export const LogFactory_Impl: LogFactory_Interface = (
  onCommit: OnCommit_LambdaInterface,
) => {
  return new Log_Impl(onCommit);
};
