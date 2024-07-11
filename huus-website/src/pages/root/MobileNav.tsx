import mobileMenuStateActions from "../../business-logic/mobileNav";
import xWhite from "../../assets/x-white.svg";
import navLinks from "../../enums/navLinks";

import "../../App.css";

function MobileNav() {
  return (
    <div className="fixed z-10 h-dvh w-full bg-black">
      <div className="flex items-center justify-between p-5 pl-10 pt-0">
        <h1 className="lato-medium flex items-center justify-center text-4xl text-white">
          Navigation
        </h1>
        <button
          className="flex aspect-square w-20 items-center justify-center"
          id="mobile-nav-exit"
          onClick={mobileMenuStateActions.close}
        >
          <img
            className="aspect-square w-14 text-white"
            alt="Close menu"
            src={xWhite}
          ></img>
        </button>
      </div>
      <div className="flex flex-col p-5 pl-10">
        {navLinks.map((linkData) => {
          return (
            <a
              className="lato-light mb-8 h-10 text-3xl text-white"
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

export default MobileNav;
