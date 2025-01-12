import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../../components/common/mobile-nav/MobileNav_Component";

import { mobileNavOpenCloseService } from "../../../services/mobile/navigation/open-close/MobileNavOpenCloseService_Singleton";
import { mobileNavSetLinksService } from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Singleton";
import { MOBILE_NAV_LINK_SET_ID } from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Enums";

export default function Services() {
  <>
    <MobileNav
      mobileNavOpenCloseService={mobileNavOpenCloseService}
      mobileNavSetLinksService={mobileNavSetLinksService}
      linkSetId={MOBILE_NAV_LINK_SET_ID.ON_SERVICES_PAGE}
    />

    <Header />
    <Main />
    <Footer />
  </>;
}
