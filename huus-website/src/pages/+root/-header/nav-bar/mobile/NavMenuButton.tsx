import { useState } from "react";

import hamburgerMenuWhite from "../../../../../assets/hamburger-menu-white.svg";
import hamburgerMenuBlack from "../../../../../assets/hamburger-menu-black.svg";
import mobileMenuStateActions from "../../../../../ui-effects/mobileNav";

export default function NavMenuButton() {
  const [isHovered, setHoveredState] = useState(false);

  function handleEnter() {
    setHoveredState(true);
  }

  function handleLeave() {
    setHoveredState(false);
  }

  return (
    <button
      type="button"
      onClick={mobileMenuStateActions.open}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`flex aspect-square w-16 items-center justify-center transition-colors duration-150 ease-in-out hover:bg-white`}
    >
      <img
        src={isHovered ? hamburgerMenuBlack : hamburgerMenuWhite}
        className="aspect-square h-full w-full"
      ></img>
    </button>
  );
}
