import { useState } from "react";

import hamburgerMenuWhite from "../../../../assets/hamburger-menu-white.svg";
import hamburgerMenuBlack from "../../../../assets/hamburger-menu-black.svg";
import mobileMenuStateActions from "../../../../ui-effects/mobileNav";

import { NAV_BUTTONS } from "../../../../enums/default/nav";

function NavMenuButton() {
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
        className="aspect-square h-full w-full text-white"
        alt="Nav Menu Button"
      ></img>
    </button>
  );
}

interface NavBarProps {
  navButtons: typeof NAV_BUTTONS;
}

function RegularNav({ navButtons }: NavBarProps) {
  return (
    <ul className="flex h-full items-center justify-center">
      {navButtons.map((button) => {
        return (
          <li className="h-[50px]">
            <a
              href={button.link}
              className="flex h-full items-center justify-center px-5 py-2 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-white hover:text-black"
            >
              {button.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function NavBar({ navButtons }: NavBarProps) {
  return (
    <div className="flex h-[70px] items-center justify-between bg-black bg-opacity-65 px-4 lg:px-24">
      <div className="flex h-full items-center justify-center">
        <img alt="site logo" className="text-white"></img>
      </div>

      <div className="hidden h-full lg:block">
        <RegularNav navButtons={navButtons} />
      </div>

      <div className="h-full lg:hidden">
        <NavMenuButton />
      </div>
    </div>
  );
}
