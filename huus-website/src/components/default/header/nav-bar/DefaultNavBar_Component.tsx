import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../state/react-redux/store";

import "./DefaultNavBar_Style.css";

import { MobileNav } from "../../../util/mobile-nav/MobileNav_Component";
import { DefaultNav } from "./nav/DefaultNav_Component";

import { NavBarProps_Interface } from "./DefaultNavBar_Interface";

const mobileNavMaxVPWidthLimit: number = 1024; // 1024px, the max limit width for the mobile nav to be presented

const navTransitionFollowLimit: number = 128; // 128px, this value should match the transform starting positions in the corresponding CSS stylesheet "DefaultNavBar_Style.css"
const navTransitionReturnLimit: number = 64; // 64px, which should equal the throttling interval for the view port position Y listener setting into redux. This value should also match the

export function NavBar({
  logger,
  createInvocationId,

  navButtons,
  domBodyRepository,

  componentUsageSource,
}: NavBarProps_Interface) {
  // for calculating whether the current view port width should display a mobile nav
  // or the default nav (the buttons mainly).
  // decoupling the redux state from being applied directly in the JSX prevents unnecessary rerenders.
  const viewPortWidth: number = useSelector(
    (state: AppStoreRootState) => state.appWindow.viewPortWidth,
  );

  const [mobileNavIsPriority, setMobileNavIsPriority] =
    useState<boolean>(false);
  useEffect(() => {
    const isPriority = viewPortWidth < mobileNavMaxVPWidthLimit;

    if (isPriority !== mobileNavIsPriority) setMobileNavIsPriority(isPriority);
  }, [viewPortWidth]);

  // for calculating whether the current view port position Y (the scroll position basically) necessitates a follow animation.
  // decoupling the redux state from being applied directly in the JSX prevents unnecessary rerenders.
  const viewPortPositionY: number = useSelector(
    (state: AppStoreRootState) => state.appWindow.viewPortPositionY,
  );

  // used to calculate whether the nav should follow and stick to the top of the screen based on position Y thresholds.
  // DO NOT USE 'useRef' HERE. 'useState' MAY CAUSE RERENDERS, BUT THE STATE LIFECYCLES ARE SERIALIZED AND PREDICTABLE THIS WAY.
  // MAKES IT PREDICTABLE GIVEN THE STATE MACHINE BEING APPLIED HERE.
  const [navFollows, setNavFollows] = useState<boolean>(false);
  const [componentRenderCounter, setComponentRenderCounter] =
    useState<number>(0);

  useEffect(() => {
    if (componentRenderCounter == 2) {
      const shouldFollow = viewPortPositionY > navTransitionFollowLimit;

      if (shouldFollow !== navFollows) setNavFollows(shouldFollow);
    } else {
      setComponentRenderCounter((prev) => prev + 1);
    }

    // used to determine when the nav bar should return back to the top of the screen
    // after following the user using a pseudo-sticky behavior (couldn't use regular sticky here, scrollable parent scoping wasn't ideal)
    const navShouldReturn = viewPortPositionY < navTransitionReturnLimit;

    if (navShouldReturn && navFollows) {
      setNavFollows(false);
    }
  }, [viewPortPositionY]);

  // applies a simple state machine to prevent the 'return' animation from applying on initial page
  // load (top of screen initial render, the nav container will appear to transition upwards).
  // it does this by having a simple incrementer that stores information of the number of renders.
  // 0 is the base state, 1 means useEffect fired once for the initial page render, and 2 means the useEffect fired due to
  // changes in 'navFollows' and thus user input involving scrolling.

  // DO NOT USE 'useRef' HERE. 'useState' MAY CAUSE RERENDERS, BUT THE STATE LIFECYCLES ARE SERIALIZED AND PREDICTABLE THIS WAY.
  // MAKES IT PREDICTABLE GIVEN THE STATE MACHINE BEING APPLIED HERE.
  const [noReturnAnimationRenderCounter, setNoReturnAnimationRenderCounter] =
    useState<number>(0);
  const [navContainerStyleClasses, setNavContainerStyleClasses] =
    useState<string>("absolute");

  useEffect(() => {
    if (noReturnAnimationRenderCounter < 2)
      setNoReturnAnimationRenderCounter(noReturnAnimationRenderCounter + 1);

    if (navFollows) {
      setNavContainerStyleClasses("nav-bar-follow fixed");
    } else if (noReturnAnimationRenderCounter === 2) {
      setNavContainerStyleClasses("nav-bar-return absolute");
    }
  }, [navFollows]);

  return (
    <div className="relative z-50 flex h-[85px] items-center justify-between px-4 lg:px-24">
      <div className="flex h-full items-center justify-center">
        <img alt="site logo" className="text-white"></img>
      </div>

      <div
        className={`left-0 flex w-dvw grow items-center justify-end px-4 lg:px-24 ${navContainerStyleClasses}`}
      >
        <div className="hidden border-r-[1px] border-white bg-black lg:block">
          <DefaultNav navButtons={navButtons} />
        </div>

        <div
          className={`flex items-center justify-center bg-black lg:hidden ${mobileNavIsPriority ? "block" : "hidden"}`}
        >
          <MobileNav
            logger={logger}
            createInvocationId={createInvocationId}
            componentUsageSource={componentUsageSource}
            domBodyRepository={domBodyRepository}
            viewPortWidth={viewPortWidth}
            viewPortWidthLimit={1024} // should match the breakpoint for 'lg:hidden' in the parent container
            mobileNavButtons={navButtons}
          />
        </div>
      </div>
    </div>
  );
}
