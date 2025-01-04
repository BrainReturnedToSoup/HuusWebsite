import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../../components/common/mobile-nav/MobileNav";

import { mobileNavOpenCloseService } from "../../../services/mobile-nav/open-close/MobileNavOpenCloseService_Singleton";
import { mobileNavSetLinksService } from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Singleton";
import { MOBILE_NAV_LINK_SET_ID } from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Enums";

export default function Services() {
  <>
    <MobileNav
      mobileNavOpenCloseService={mobileNavOpenCloseService}
      mobileNavSetLinksService={mobileNavSetLinksService}
      linkSetId={MOBILE_NAV_LINK_SET_ID.SERVICES}
    />

    <Header />
    <Main />
    <Footer />
  </>;
}
