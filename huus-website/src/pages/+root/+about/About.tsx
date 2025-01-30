import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../../components/core/mobile-nav/MobileNav_Component";

import { MOBILE_NAV_LINK_SET_ID } from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Instance";
import { mobileNavOpenCloseService } from "../../../services/mobile/navigation/open-close/MobileNavOpenCloseService_Instance";
import { mobileNavSetLinksService } from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Instance";

import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";
import { createInvocationId } from "../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";

import { useSelector } from "react-redux";

import "./about.css";
import { domBodyRepository } from "../../../state/repositories/DOM/DomBodyRepository_Instance";

export default function About() {
  return (
    <>
      <MobileNav
        logger={defaultLogger}
        createInvocationId={createInvocationId}
        mobileNavOpenCloseService={mobileNavOpenCloseService}
        mobileNavSetLinksService={mobileNavSetLinksService}
        linkSetId={MOBILE_NAV_LINK_SET_ID.ON_ABOUT_PAGE}
        useGeneralState={useSelector}
        domBodyRepository={domBodyRepository}
      />

      <Header />
      <Main />
      <Footer />
    </>
  );
}
