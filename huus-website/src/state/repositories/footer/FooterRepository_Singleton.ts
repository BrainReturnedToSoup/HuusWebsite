import { FooterRepository_Impl } from "./FooterRepository_Impl";

import { appStore } from "../../react-redux/store";

import {
  footerSliceActions,
  footerSliceSelectors,
} from "../../react-redux/slices/footer";

const footerRepository = new FooterRepository_Impl(
  appStore,
  footerSliceSelectors,
  footerSliceActions,
);

export { footerRepository };
