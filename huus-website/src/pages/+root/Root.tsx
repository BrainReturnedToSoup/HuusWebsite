import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import minWidths from "../../enums/responsiveScreenWidths";

import Hero from "./hero/Hero";

import Nav from "./nav/Nav";
import NavMobile from "./nav/NavMobile";

import Features from "./features/Features";
import FeaturesMobile from "./features/FeaturesMobile";

import Pricing from "./pricing/Pricing";
import PricingMobile from "./pricing/PricingMobile";

import Faq from "./faq/Faq";
import FaqMobile from "./faq/FaqMobile";

import CallToAction from "./call-to-action/CallToAction";
import CallToActionMobile from "./call-to-action/CallToActionMobile";

function NavBar() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  return (
    <div
      className={`sm:h-18 fixed flex h-14 w-full justify-between justify-items-center bg-opacity-75 px-6 transition-colors duration-300 ease-in-out sm:px-10 md:h-16 lg:px-14 xl:px-20 ${screenPosition > window.innerHeight && "bg-white"}`}
    >
      <div className="flex justify-items-center">
        <img
          className={`justify-self-center ${screenPosition > window.innerHeight ? "text-black" : "text-white"}`}
          alt="site logo"
        ></img>
      </div>
      <Nav />
    </div>
  );
}

function ContentMobile() {
  return (
    <>
      <FeaturesMobile />
      <PricingMobile />
      <FaqMobile />
      <CallToActionMobile />
    </>
  );
}

function ContentRegular() {
  return (
    <>
      <Features />
      <Pricing />
      <Faq />
      <CallToAction />
    </>
  );
}

function RootPage() {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <>
      <header className="header-backdrop-image flex h-dvh w-full flex-col bg-black">
        <NavBar />
        <Hero />
      </header>
      <main>
        {screenWidth <= minWidths.desktop ? (
          <ContentMobile />
        ) : (
          <ContentRegular />
        )}
      </main>
      <footer className="px-6 sm:px-10 lg:px-14 xl:px-20"></footer>
    </>
  );
}

export default function Root() {
  const mobileNavOpen: boolean = useSelector(
    (state: RootState) => state.mobileNav.open,
  );

  return mobileNavOpen ? <NavMobile /> : <RootPage />;
}

//GUTTER PADDING CLASSES TO USE FOR CONSISTENCY
//px-6 sm:px-10 lg:px-14 xl:px-20
