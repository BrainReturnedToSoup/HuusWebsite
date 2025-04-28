import { useEffect, useRef } from "react";

import { MobileNavMenuProps_Interface } from "./MobileNavMenu_Interface";
import { MobileNavLogKeys_Enum } from "../MobileNav_Enum";

import xWhiteSVG from "../../../../assets/x-white.svg";
import { MobileNavButton } from "./mobile-nav-buttons/MobileNavButton_Component";

import "./MobileNavMenu_Style.css";

function MobileNavMenu({
  logger,
  createInvocationId,
  componentUsageSource,

  mobileNavButtons,
  closeMobileNav,
}: MobileNavMenuProps_Interface) {
  const mobileNavMenuRef = useRef(null);
  const focusableElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const currFocusPos = useRef<number | null>(null);

  useEffect(() => {
    if (mobileNavMenuRef.current) {
      const divElement = mobileNavMenuRef.current as HTMLElement;

      focusableElementsRef.current = divElement.querySelectorAll("button, a");
    }

    return () => {
      focusableElementsRef.current = null;
    };
  }, []);

  function handleTabTrap(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault(); // to prevent default tab focusing behavior
      event.stopPropagation();

      if (!focusableElementsRef.current) return;

      if (currFocusPos.current === null) {
        const startingPos = 0;

        currFocusPos.current = startingPos;

        const elementToFocus = focusableElementsRef.current.item(startingPos);

        elementToFocus.focus();

        return;
      }

      let newFocusPos = null;

      if (event.shiftKey) {
        // for moving backwards in focus

        if (currFocusPos.current === 0) {
          // if current focus position exists means something in the mobile nav was already
          // focused, so focus on the next item in the list.

          newFocusPos = focusableElementsRef.current.length - 1;
        } else {
          newFocusPos = currFocusPos.current - 1;
        }
      } else {
        // for moving forward in focus

        if (currFocusPos.current !== focusableElementsRef.current.length - 1) {
          // if current focus position exists means something in the mobile nav was already
          // focused, so focus on the next item in the list.

          newFocusPos = currFocusPos.current + 1;
        } else {
          newFocusPos = 0;
        }
      }

      // the default position is going to be 0 on either 'tab' or 'shift+tab', the conditions above
      // accounting for the modular nature of focus traversal. Not using modulo is a micro-op.

      currFocusPos.current = newFocusPos;

      const newElementToFocus = focusableElementsRef.current.item(newFocusPos);

      newElementToFocus.focus();
    }
  }

  function handleClickedOff(event: React.MouseEvent) {
    event.stopPropagation(); // no need to propagate, small easy gain in resource footprint

    const userClickedOffInvocationId = createInvocationId();

    logger
      .createNewLog()
      .addAttribute(
        MobileNavLogKeys_Enum.INVOCATION_ID,
        userClickedOffInvocationId,
      )
      .addAttribute(
        MobileNavLogKeys_Enum.INVOCATION_TYPE,
        "closed-mobile-nav-clicked-off",
      )
      .addAttribute(
        MobileNavLogKeys_Enum.COMPONENT_USAGE_SOURCE,
        componentUsageSource,
      )
      .commit();

    closeMobileNav();
  }

  function handleClickedExitButton(event: React.MouseEvent) {
    event.stopPropagation(); // no need to propagate, small easy gain in resource footprint

    const invocationIdOnClickClose = createInvocationId();

    logger
      .createNewLog()
      .addAttribute(
        MobileNavLogKeys_Enum.INVOCATION_ID,
        invocationIdOnClickClose,
      )
      .addAttribute(
        MobileNavLogKeys_Enum.INVOCATION_TYPE,
        "closed-mobile-nav-closing-button",
      )
      .addAttribute(
        MobileNavLogKeys_Enum.COMPONENT_USAGE_SOURCE,
        componentUsageSource,
      )
      .commit();

    currFocusPos.current = null; // clearing any focus position state prior to mobile nav close

    closeMobileNav();
  }

  return (
    <div
      className="mobile-nav-backdrop-blur fixed left-0 top-[-11px] z-50 flex h-dvh w-dvw justify-end"
      ref={mobileNavMenuRef}
      onClick={handleClickedOff}
    >
      {
        // outermost div above is a translucent layer which the mobile nav widget sits within.
      }

      <div className="mobile-nav-menu-slide-to-left flex h-dvh max-w-[250px] grow">
        <div
          className="h-full w-full overflow-y-scroll border-l-[1px] border-white bg-black p-6 pr-2"
          onKeyDown={handleTabTrap}
          onClick={(event) => {
            event.stopPropagation(); // prevent any clicks within the actual mobile nav from closing it out, only when the user clicks off
          }}
        >
          <div className="mb-12 flex items-center justify-between overflow-y-scroll">
            <h1 className="lato-bold text-3xl text-white">Navigation</h1>

            <button type="button" onClick={handleClickedExitButton}>
              <img
                alt="Back"
                className="aspect-square max-w-[52px] text-white"
                src={xWhiteSVG}
              ></img>
            </button>
          </div>
          <ul className="text-2xl text-white">
            {
              // the key should be per button, but not to be used for each button text itself.
              // create a module 'LinkTextMapping' that maps link IDs to text to display within the buttons

              mobileNavButtons.map((navButtonInfo) => {
                return (
                  <MobileNavButton
                    key={navButtonInfo.id}
                    logger={logger}
                    createInvocationId={createInvocationId}
                    navButton={navButtonInfo}
                  />
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export { MobileNavMenu };
