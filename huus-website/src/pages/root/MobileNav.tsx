import mobileMenuStateActions from "../../business-logic/mobileNav";
import xWhite from "../../assets/x-white.svg";
import navLinks from "../../enums/navLinks";

function MobileNav() {
  return (
    <div className="fixed z-10 h-dvh w-full bg-black">
      <div className="flex items-center justify-between p-5 pt-0">
        <h1 className="flex items-center justify-center text-4xl font-normal text-white">
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
      <div className="flex flex-col">
        {navLinks.map((buttonData) => {
          return (
            <a
              className="mb-3 text-3xl font-light text-white"
              key={buttonData.key}
              href={buttonData.route}
            >
              {buttonData.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default MobileNav;
