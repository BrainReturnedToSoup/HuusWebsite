import { useSelector } from "react-redux";
import { RootState } from "../../../state/react-redux-impl/store";

import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import MobileNav from "../../../components/default/mobile-nav/MobileNav";

import mobileMenuStateActions from "../../../ui-effects/mobileNav";

import { NAV_BUTTONS } from "../../../enums/default/nav";

import "./about.css";

export default function About() {
  //this is for ensuring state is properly reset if redirecting from a
  //link in a mobile nav from a different page in this same SPA.
  mobileMenuStateActions.close();

  const mobileNavOpen: boolean = useSelector(
    (state: RootState) => state.mobileNav.open,
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
