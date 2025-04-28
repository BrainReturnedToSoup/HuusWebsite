import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";
import {
  DirectUrlFetchImageFactory_Impl,
  InstanceMetaData,
} from "./DirectUrlFetchImageFactory_Impl";

const instanceMetaData: InstanceMetaData = {
  instanceId: "DIRECT-URL-FETCH-IMAGE-FACTORY-DEFAULT",
};

const directUrlFetchImageFactory = new DirectUrlFetchImageFactory_Impl(
  instanceMetaData,
  defaultLogger,
);

export { directUrlFetchImageFactory };
