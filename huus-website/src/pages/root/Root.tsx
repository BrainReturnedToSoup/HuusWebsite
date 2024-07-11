import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import Nav from "./Nav";
import Hero from "./Hero";
import MobileNav from "./MobileNav";
import Features from "./Features";

export default function Root() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  const mobileNavOpen: boolean = useSelector(
    (state: RootState) => state.mobileNav.open,
  );

  return mobileNavOpen ? (
    <MobileNav />
  ) : (
    <>
      <header className="main-backdrop-image flex h-dvh w-full flex-col bg-black">
        <div
          className={`sm:h-18 md:h-22 xl:px-20} fixed flex h-14 w-full justify-between justify-items-center bg-opacity-75 px-6 transition-colors duration-300 ease-in-out sm:px-10 lg:px-14 ${screenPosition > window.innerHeight && "bg-white"}`}
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
      <main className="h-[2000px] bg-white px-6 md:px-10 lg:px-14 xl:px-20">
        <Features />
      </main>
      <footer className="px-6 sm:px-10 lg:px-14 xl:px-20"></footer>
    </>
  );
}
