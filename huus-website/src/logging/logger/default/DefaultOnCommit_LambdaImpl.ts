import { LogAttributes_Interface } from "../Log_Interface";
import { OnCommit_LambdaInterface } from "../OnCommit_LambdaInterface";

const OnCommit_LambdaImpl: OnCommit_LambdaInterface = (
  log: LogAttributes_Interface,
) => {
  // each log that is created is handled here, you can add anything you want to this part though pretty much.
  // this piece is meant to be unstable, which allows the fluent pattern of the logger to be really stable. This also means you can
  // inject a method reference of a class instance, and have a full post-processing class instance for
  // logs (filtering, sending off to an observability pipeline, even implementing web workers here, etc.)

  console.log(log);
};

export { OnCommit_LambdaImpl };
