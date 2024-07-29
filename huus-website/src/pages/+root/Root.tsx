import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import Header from "./-header/Header";
import Main from "./-main/Main";
import Footer from "./-footer/Footer";
import Nav from "./-header/nav-bar/mobile/Nav";

import "../../App.css";

export default function Root() {
  const mobileNavOpen: boolean = useSelector(
    (state: RootState) => state.mobileNav.open,
  );

  return mobileNavOpen ? (
    <Nav />
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
