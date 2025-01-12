import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../components/common/mobile-nav/MobileNav_Component";

import { mobileNavSetLinksService } from "../../services/mobile/navigation/set-links/MobileNavSetLinksService_Singleton";
import { mobileNavOpenCloseService } from "../../services/mobile/navigation/open-close/MobileNavOpenCloseService_Singleton";
import { MOBILE_NAV_LINK_SET_ID } from "../../services/mobile/navigation/set-links/MobileNavSetLinksService_Enums";

export default function Root() {
  // mobile nav declared with static props here, because it otherwise encapsulates all other relevant side effects
  // when paired with any mobile nav related service singletons.

  <>
    <MobileNav
      mobileNavOpenCloseService={mobileNavOpenCloseService}
      mobileNavSetLinksService={mobileNavSetLinksService}
      linkSetId={MOBILE_NAV_LINK_SET_ID.ON_ROOT_PAGE}
    />

    <Header />
    <Main />
    <Footer />
  </>;
}

//GUTTER PADDING CLASSES TO USE FOR CONSISTENCY
//px-6 sm:px-10 lg:px-14 xl:px-20
