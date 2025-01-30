import { useState } from "react";

import hamburgerMenuWhite from "../../../../assets/hamburger-menu-white.svg";
import hamburgerMenuBlack from "../../../../assets/hamburger-menu-black.svg";

import { mobileNavOpenCloseService } from "../../../../services/mobile/navigation/open-close/MobileNavOpenCloseService_Instance";

import { NAV_BUTTONS } from "../../../../enums/default/nav";
import { createInvocationId } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";
import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";

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
      onClick={() => {
        const openMobileNavInvocationId = createInvocationId();

        defaultLogger
          .createNewLog()
          .addAttribute("log-source", "nav-menu-button")
          .addAttribute("invocation-id", openMobileNavInvocationId)
          .commit();

        mobileNavOpenCloseService.open(openMobileNavInvocationId);
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`z-20 flex aspect-square w-16 items-center justify-center transition-colors duration-150 ease-in-out hover:bg-white`}
    >
      <img
        src={isHovered ? hamburgerMenuBlack : hamburgerMenuWhite}
        className="aspect-square h-full w-full text-white"
        alt="Nav Menu Button"
      ></img>
    </button>
  );
}

interface RegularNavBarButtonProps {
  buttonInfo: (typeof NAV_BUTTONS)[0];
}

function RegularNavBarButton({ buttonInfo }: RegularNavBarButtonProps) {
  return (
    <li className="h-[55px]">
      <a
        href={buttonInfo.link}
        className="flex h-full items-center justify-center px-5 py-2 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-white hover:text-black"
      >
        {buttonInfo.text}
      </a>
    </li>
  );
}

interface NavBarProps {
  navButtons: typeof NAV_BUTTONS;
}

function RegularNav({ navButtons }: NavBarProps) {
  return (
    <ul className="flex h-full items-center justify-center self-end">
      {navButtons.map((buttonInfo, index) => {
        return <RegularNavBarButton buttonInfo={buttonInfo} key={index} />;
      })}
    </ul>
  );
}

export default function NavBar({ navButtons }: NavBarProps) {
  return (
    <div className="relative z-10 flex h-[85px] items-center justify-between bg-black bg-opacity-35 px-4 lg:px-24">
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
