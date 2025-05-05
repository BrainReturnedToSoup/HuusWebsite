import { DefaultNavProps_Interface } from "./DefaultNav_Interface";

import { DefaultNavButton } from "./nav-button/DefaultNavButton_Component";

export function DefaultNav({
  navButtons: navButtonInfoList,
}: DefaultNavProps_Interface) {
  return (
    <ul className="flex h-full items-center justify-center self-end">
      {navButtonInfoList.map((navButtonInfo) => {
        return (
          <DefaultNavButton navButton={navButtonInfo} key={navButtonInfo.id} />
        );
      })}
    </ul>
  );
}
