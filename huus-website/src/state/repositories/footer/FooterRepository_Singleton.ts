import {
  FooterRepository_Impl,
  InstanceMetaData,
} from "./FooterRepository_Impl";

import { appStore } from "../../react-redux/store";

import {
  footerSliceActions,
  footerSliceSelectors,
} from "../../react-redux/slices/footer";

import { defaultLogger } from "../../../logging/default/DefaultLogger_Singleton";

const instanceMetaData: InstanceMetaData = {
  instanceId: "FOOTER-REPOSITORY-DEFAULT",
};

const footerRepository = new FooterRepository_Impl(
  instanceMetaData,
  defaultLogger,

  appStore,
  footerSliceSelectors,
  footerSliceActions,
);

export { footerRepository, instanceMetaData };
