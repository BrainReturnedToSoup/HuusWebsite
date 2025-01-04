import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../../components/common/mobile-nav/MobileNav";

import { MOBILE_NAV_LINK_SET_ID } from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Enums";
import { mobileNavOpenCloseService } from "../../../services/mobile-nav/open-close/MobileNavOpenCloseService_Singleton";
import { mobileNavSetLinksService } from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Singleton";

import "./about.css";

export default function About() {
  <>
    <MobileNav
      mobileNavOpenCloseService={mobileNavOpenCloseService}
      mobileNavSetLinksService={mobileNavSetLinksService}
      linkSetId={MOBILE_NAV_LINK_SET_ID.ABOUT}
    />

    <Header />
    <Main />
    <Footer />
  </>;
}
