import { DefaultNavProps_Interface } from "./DefaultNav_Interface";

import { DefaultNavButton } from "./nav-button/DefaultNavButton_Component";

export function DefaultNav({
  navButtons: navButtonInfoList,
}: DefaultNavProps_Interface) {
  return (
    <ul className="flex h-full items-center justify-center self-end">
      {navButtonInfoList.map((navButtonInfo) => {
        return (
          <DefaultNavButton
            id={navButtonInfo.id}
            url={navButtonInfo.url}
            text={navButtonInfo.text}
            key={navButtonInfo.id}
            index={navButtonInfo.index}
          />
        );
      })}
    </ul>
  );
}
