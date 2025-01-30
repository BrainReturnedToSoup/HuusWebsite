import { LogFactory_LambdaInterface } from "./LogFactory_LambdaInterface";
import { Log_Impl } from "./Log_Impl";

import { OnCommit_LambdaInterface } from "./OnCommit_LambdaInterface";

export const LogFactory_LambdaImpl: LogFactory_LambdaInterface = (
  onCommit: OnCommit_LambdaInterface,
) => {
  return new Log_Impl(onCommit);
};
