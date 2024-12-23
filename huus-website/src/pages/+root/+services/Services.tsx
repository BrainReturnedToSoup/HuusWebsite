import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../state/react-redux/store";

import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../../components/common/mobile-nav/MobileNav";

import mobileMenuStateActions from "../../../ui-effects/mobileNav";

import { NAV_BUTTONS } from "../../../enums/default/nav";

export default function Services() {
  // this is for ensuring state is properly reset if redirecting from a
  // link in a mobile nav from a different page in this same SPA.
  // You do this prior to any state binding to prevent rerender stutters
  // on redirect.
  mobileMenuStateActions.close();

  const mobileNavOpen: boolean = useSelector(
    (state: AppStoreRootState) => state.mobileNav.open,
  );

  return mobileNavOpen ? (
    <MobileNav navButtons={NAV_BUTTONS} />
  ) : (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
