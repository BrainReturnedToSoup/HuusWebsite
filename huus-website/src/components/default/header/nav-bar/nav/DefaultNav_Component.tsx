import { DefaultNavProps_Interface } from "./DefaultNav_Interface";

import { DefaultNavButton } from "./nav-button/DefaultNavButton_Component";

export function DefaultNav({
  navButtons: navButtonInfoList,
}: DefaultNavProps_Interface) {
  return (
    <ul className="flex h-full items-center justify-center self-end">
      {navButtonInfoList.map((navButtonInfo, index) => {
        // default is black button with white background on hover and active
        let appliedLinkStyle = `default-font-bold box-border flex h-full items-center 
        justify-center px-4 py-1 border-l-[1px] border-l-transparent text-[1.1rem] text-white transition-colors
        duration-150 ease-in-out hover:bg-white hover:text-black hover:border-x-black active:bg-white active:text-black decoration-transparent hover:decoration-black"`;

        if (index === 0) {
          // if this is the first iteration, make the button white with a black transition and full white borders all around
          appliedLinkStyle = `default-font-bold box-border flex h-full items-center justify-center border-x-[1px] border-r-black border-l-black
           px-4 py-1 text-[1.1rem] bg-white text-black transition-colors duration-150 ease-in-out hover:bg-black hover:text-white hover:border-r-white hover:decoration-white `;
        }

        return (
          <DefaultNavButton
            id={navButtonInfo.id}
            url={navButtonInfo.url}
            text={navButtonInfo.text}
            key={navButtonInfo.id}
            index={index}
          />
        );
      })}
    </ul>
  );
}
