import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../state/react-redux/store";

import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../components/common/mobile-nav/MobileNav";

import { mobileNavSetLinksService } from "../../services/mobile-nav/set-links/MobileNavSetLinksService_Singleton";
import { mobileNavOpenCloseService } from "../../services/mobile-nav/open-close/MobileNavOpenCloseService_Singleton";
import { LINK_SET_ID } from "../../services/mobile-nav/set-links/MobileNavSetLinksService_Enums";

export default function Root() {
  //this is for ensuring state is properly reset if redirecting from a
  //link in a mobile nav from a different page in this same SPA.

  const mobileNavOpen: boolean = useSelector(
    (state: AppStoreRootState) => state.mobileNav.isOpen,
  );

  return mobileNavOpen ? (
    <MobileNav
      mobileNavSetLinksService={mobileNavSetLinksService}
      mobileNavOpenCloseService={mobileNavOpenCloseService}
      linkSetId={LINK_SET_ID.ROOT} // if on the 'root' page
    />
  ) : (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

//GUTTER PADDING CLASSES TO USE FOR CONSISTENCY
//px-6 sm:px-10 lg:px-14 xl:px-20
