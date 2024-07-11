import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useState } from "react";

import hamburgerMenuWhite from "../../assets/hamburger-menu-white.svg";
import hamburgerMenuBlack from "../../assets/hamburger-menu-black.svg";
import mobileMenuStateActions from "../../business-logic/mobileNav";
import navLinks from "../../enums/navLinks";

const whiteBackground = "text-black hover:bg-black hover:text-white";
const blackBackground = " text-white hover:bg-white hover:text-black";

function MobileNavMenuButton() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  const [isHovered, setHoverState] = useState(false);

  function handleEnter() {
    setHoverState(true);
  }

  function handleLeave() {
    setHoverState(false);
  }

  return (
    <button
      type="button"
      onClick={mobileMenuStateActions.open}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`flex aspect-square h-full w-20 items-center justify-center transition-colors duration-300 ease-in-out ${screenPosition < window.innerHeight ? "hover:bg-white" : "hover:bg-black"}`}
    >
      <img
        src={
          screenPosition < window.innerHeight
            ? isHovered
              ? hamburgerMenuBlack
              : hamburgerMenuWhite
            : isHovered
              ? hamburgerMenuWhite
              : hamburgerMenuBlack
        }
        className="w-14"
      ></img>
    </button>
  );
}

function RegularNav() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  return (
    <div className="flex justify-center">
      {navLinks.map((buttonData) => {
        return (
          <a
            className={`center-text flex justify-items-center px-9 text-2xl transition-colors duration-300 ease-in-out ${screenPosition > window.innerHeight ? whiteBackground : blackBackground}`}
            key={buttonData.key}
            href={buttonData.route}
          >
            {buttonData.name}
          </a>
        );
      })}
    </div>
  );
}

export default function Nav() {
  //use the responsive design max widths along with the redux store
  //that keeps track of the current screen width to display specific components
  //based on the device width. Responsive design 101

  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  //mobile menu will be for devices that have a width less than 1200px,
  //so basically, portrait tablets and below
  return (
    <nav className="flex justify-center">
      {screenWidth < 768 ? <MobileNavMenuButton /> : <RegularNav />}
    </nav>
  );
}
