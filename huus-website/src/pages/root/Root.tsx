import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import Hero from "./Hero";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

import Features from "./Features";
import FeaturesMobile from "./FeaturesMobile";

import Pricing from "./Pricing";
import PricingMobile from "./PricingMobile";

import Faq from "./Faq";
import FaqMobile from "./FaqMobile";

import CallToAction from "./CallToAction";
import CallToActionMobile from "./CallToActionMobile";

export default function Root() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  const mobileNavOpen: boolean = useSelector(
    (state: RootState) => state.mobileNav.open,
  );

  return mobileNavOpen ? (
    <NavMobile />
  ) : (
    <>
      <header className="main-backdrop-image flex h-dvh w-full flex-col bg-black">
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
        <Hero />
      </header>
      <main className="bg-white">
        {screenWidth <= 1024 ? (
          <>
            <FeaturesMobile />
            <PricingMobile />
            <FaqMobile />
            <CallToActionMobile />
          </>
        ) : (
          <>
            <Features />
            <Pricing />
            <Faq />
            <CallToAction />
          </>
        )}
      </main>
      <footer className="px-6 sm:px-10 lg:px-14 xl:px-20"></footer>
    </>
  );
}
