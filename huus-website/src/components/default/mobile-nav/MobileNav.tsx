import mobileMenuStateActions from "../../../ui-effects/mobileNav";

import { NAV_BUTTONS } from "../../../enums/default/nav";

import xWhite from "../../../assets/x-white.svg";

interface MobileNavProps {
  navButtons: typeof NAV_BUTTONS;
}

export default function MobileNav({ navButtons }: MobileNavProps) {
  return (
    <div className="h-dvh bg-black p-6 sm:p-10">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="lato-bold text-4xl text-white">Navigation</h1>
        <button type="button" onClick={mobileMenuStateActions.close}>
          <img alt="Back" className="text-white max-w-[64px]" src={xWhite}></img>
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
