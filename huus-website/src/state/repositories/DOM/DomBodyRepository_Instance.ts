import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";
import {
  DomBodyRepository_Impl,
  InstanceMetaData,
} from "./DomBodyRepository_Impl";

const instanceMetaData: InstanceMetaData = {
  instanceId: "DOM-BODY-REPOSITORY-DEFAULT",
};

const domBodyRepository = new DomBodyRepository_Impl(
  instanceMetaData,
  defaultLogger,

  document
);

export { domBodyRepository, instanceMetaData };
