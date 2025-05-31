import { useEffect, useState } from "react";

import { MobileNavProps_Interface } from "./MobileNav_Interface";

import {
  DomBodyOverflowX_Enum,
  DomBodyOverflowY_Enum,
} from "../../../state/repositories/DOM/DomBodyRepository_Enum";

import { MobileNavMenu } from "./mobile-nav-menu/MobileNavMenu_Component";

import "./MobileNav_Style.css";

/*

  encapsulates all of the related concerns of the mobile nav in a single prop-configurable component, which includes freezing
  the main page while the mobile nav is open, the main page being slightly blurred when the mobile nav is open, as well
  as the actual mobile nav widget transition animation being off screen to the right and into frame.

*/

function MobileNav({
  logger,
  createInvocationId,
  componentUsageSource,

  domBodyRepository,
  viewPortWidth,
  viewPortWidthLimit,

  mobileNavButtons,
}: MobileNavProps_Interface) {
  // these invocations below happen synchronously as per react component lifecycles.
  // this over using useEffect, so that there isn't a window where the component is mounted
  // but the 'isOpen' state is still true.

  const [mobileNavIsPriority, setMobileNavIsPriority] =
    useState<Boolean>(false);
  const [navIsOpen, setNavIsOpen] = useState<Boolean>(false);

  // to prevent scrolling in the body component, you apply 'overflow hidden' when the nav is open,
  // which you do so on the vanilla DOM API, but it still changes based on this reactive hook. This works
  // in this component, because in the end, the top level body state is global as per vanilla Web APIs, so you
  // don't need to declare it elsewhere. This also allows better encapsulation overall, as well as prevents unnecessary rerenders
  // from useEffect calls otherwise in a top level parent component.

  useEffect(() => {
    const isPriority = viewPortWidth <= viewPortWidthLimit;

    if (isPriority !== mobileNavIsPriority) {
      if (isPriority) {
        setMobileNavIsPriority(true);
      } else {
        setMobileNavIsPriority(false);
      }
    }
  });

  useEffect(() => {
    const componentLifecycleId = createInvocationId();

    if (navIsOpen && mobileNavIsPriority) {
      domBodyRepository.setOverflowY(
        componentLifecycleId,

        DomBodyOverflowY_Enum.HIDDEN,
      );

      domBodyRepository.setOverflowX(
        componentLifecycleId,

        DomBodyOverflowX_Enum.HIDDEN,
      );
    } else {
      domBodyRepository.setOverflowY(
        componentLifecycleId,

        DomBodyOverflowY_Enum.AUTO,
      );

      domBodyRepository.setOverflowX(
        componentLifecycleId,

        DomBodyOverflowX_Enum.AUTO,
      );
    }

    return () => {
      domBodyRepository.setOverflowY(
        componentLifecycleId,

        DomBodyOverflowY_Enum.AUTO,
      );

      domBodyRepository.setOverflowX(
        componentLifecycleId,

        DomBodyOverflowX_Enum.AUTO,
      );
    };
  }, [navIsOpen, mobileNavIsPriority]);

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();

          const openMobileNavInvocationId = createInvocationId();

          logger
            .createNewLog()
            .addAttribute("log-source", "mobile-nav-menu-button")
            .addAttribute("invocation-id", openMobileNavInvocationId)
            .commit();

          setNavIsOpen(true);
        }}
        className={`hamburger-menu-image z-20 flex aspect-square w-16 items-center justify-center border-r-[1px] border-white bg-black p-2 text-sm text-white transition-colors duration-150 ease-in-out hover:border-black hover:bg-white hover:text-black active:border-black active:bg-white active:text-black`}
        aria-label="Nav menu button"
      ></button>

      <div
        className={`${navIsOpen && mobileNavIsPriority ? "block" : "hidden"}`}
      >
        <MobileNavMenu
          logger={logger}
          createInvocationId={createInvocationId}
          componentUsageSource={componentUsageSource}
          mobileNavButtons={mobileNavButtons}
          closeMobileNav={() => {
            setNavIsOpen(false);
          }}
        />
      </div>
    </>
  );
}

export { MobileNav };
