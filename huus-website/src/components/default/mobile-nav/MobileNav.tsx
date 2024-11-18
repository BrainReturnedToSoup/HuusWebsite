import { MobileNavOpenCloseServiceInterface } from "../../../services/mobile-nav/mobileNavOpenCloseInterface";

import { NAV_BUTTONS } from "../../../enums/default/nav";

import xWhiteSVG from "../../../assets/x-white.svg";

interface MobileNavProps {
  navButtons: typeof NAV_BUTTONS;
  mobileNavOpenCloseService: MobileNavOpenCloseServiceInterface;
}

export default function MobileNav({
  navButtons,
  mobileNavOpenCloseService,
}: MobileNavProps) {
  return (
    <div className="h-dvh bg-black p-6 sm:p-10">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="lato-bold text-4xl text-white">Navigation</h1>
        <button type="button" onClick={mobileNavOpenCloseService.close}>
          <img
            alt="Back"
            className="max-w-[64px] text-white"
            src={xWhiteSVG}
          ></img>
        </button>
      </div>
      <ul className="text-2xl text-white">
        {navButtons.map((button) => {
          return (
            <li className="mb-6 ml-3">
              <a href={button.link}>{button.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
