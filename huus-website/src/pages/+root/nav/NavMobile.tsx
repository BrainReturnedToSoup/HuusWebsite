import mobileMenuStateActions from "../../../business-logic/mobileNav";
import xWhite from "../../../assets/x-white.svg"
import NAV_LINKS from "../../../enums/nav";

import "../../../App.css";

function NavMobile() {
  return (
    <div className="fixed z-10 h-dvh w-full bg-black">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <h1 className="lato-medium flex items-center justify-center text-4xl text-white md:text-6xl lg:text-7xl">
          Navigation
        </h1>
        <button
          className="flex aspect-square w-20 items-center justify-center"
          id="mobile-nav-exit"
          onClick={mobileMenuStateActions.close}
        >
          <img
            className="aspect-square w-14 text-white md:w-28 lg:w-32"
            alt="Close menu"
            src={xWhite}
          ></img>
        </button>
      </div>
      <div className="flex flex-col p-5 pl-10">
        {NAV_LINKS.map((linkData) => {
          return (
            <a
              className="lato-light mb-8 h-10 text-3xl text-white md:mb-16 md:text-5xl lg:text-6xl"
              key={linkData.key}
              href={linkData.route}
            >
              {linkData.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NavMobile;
