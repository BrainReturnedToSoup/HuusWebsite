import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import MIN_WIDTHS from "../../enums/responsiveScreenWidths";

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

type Link = { text: string; redirect: { route: string; positionY: number } };

interface FooterNavColumnProps {
  title: string;
  links: Array<Link>;
}

const footerNavColumns = [
  { title: "Services", links: [] },
  { title: "Contact", links: [] },
  { title: "About", links: [] },
  { title: "Legal", links: [] },
];

function FooterNavColumn({ title, links }: FooterNavColumnProps) {
  return (
    <div className="w-1/4">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.redirect.route}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainPage() {
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
        {screenWidth <= MIN_WIDTHS.desktop ? (
          <ContentMobile />
        ) : (
          <ContentRegular />
        )}
      </main>
      <footer className="h-[550px] w-full px-6 pt-16 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex h-5/6 w-full border-t-2 border-black">
          <div className="h-full w-1/3 bg-black p-8 px-12">
            <div className="flex h-[75px] w-full items-center">
              <img alt="website logo" className="text-white"></img>
            </div>
            <div className="flex h-[75px] w-full items-center">
              <h3 className="w-4/5 text-white">
                Paving the way for no BS fitness guidance and personal training
              </h3>
            </div>
            <div className="flex h-[75px] w-full items-center text-white">
              (social media links go here)
            </div>
          </div>
          <div className="flex h-full w-2/3 grow bg-blue-500 p-8 px-12">
            {footerNavColumns.map((column) => {
              return (
                <FooterNavColumn title={column.title} links={column.links} />
              );
            })}
          </div>
        </div>
        <div className="flex h-1/6 w-full items-center justify-start border-t-2 border-black">
          <h3>
            <span className="mr-1">&#169;</span>2024 Huus Fitness & Personal
            Training, Inc. All rights reserved.
          </h3>
        </div>
      </footer>
    </>
  );
}

export default function Root() {
  const mobileNavOpen: boolean = useSelector(
    (state: RootState) => state.mobileNav.open,
  );

  return mobileNavOpen ? <NavMobile /> : <MainPage />;
}

//GUTTER PADDING CLASSES TO USE FOR CONSISTENCY
//px-6 sm:px-10 lg:px-14 xl:px-20
