import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../../components/common/mobile-nav/MobileNav_Component";

import { MOBILE_NAV_LINK_SET_ID } from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Enums";
import { mobileNavSetLinksService } from "../../../services/mobile/navigation/set-links/MobileNavSetLinksService_Singleton";
import { mobileNavOpenCloseService } from "../../../services/mobile/open-close/MobileNavOpenCloseService_Singleton";

export default function Contact() {
  <>
    <MobileNav
      mobileNavOpenCloseService={mobileNavOpenCloseService}
      mobileNavSetLinksService={mobileNavSetLinksService}
      linkSetId={MOBILE_NAV_LINK_SET_ID.ON_CONTACT_PAGE}
    />

    <Header />
    <Main />
    <Footer />
  </>;
}
