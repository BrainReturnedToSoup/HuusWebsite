import mobileMenuStateActions from "../../../ui-effects/mobileNav";

import { NAV_BUTTONS } from "../../../enums/default/nav";

interface MobileNavProps {
  navButtons: typeof NAV_BUTTONS;
}

export default function MobileNav({ navButtons }: MobileNavProps) {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between">
        <h1 className="text-white">Navigation</h1>
        <button type="button" onClick={mobileMenuStateActions.close}>
          <img alt="Back" className="text-white"></img>
        </button>
      </div>
      <ul className="text-white">
        {navButtons.map((button) => {
          return (
            <li className="mb-2">
              <a href={button.link}>{button.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
