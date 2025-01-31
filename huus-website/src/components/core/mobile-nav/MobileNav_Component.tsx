import { useEffect } from "react";

import { AppStoreRootState } from "../../../state/react-redux/store";

import { MobileNavProps_Interface } from "./MobileNav_Interface";
import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";
import { MobileNavLogKeys_Enum } from "./MobileNav_Enum";

import { Link } from "./Link_Component";

import {
  DomBodyOverflowX_Enum,
  DomBodyOverflowY_Enum,
} from "../../../state/repositories/DOM/DomBodyRepository_Enum";

import xWhiteSVG from "../../../assets/x-white.svg";

import "./MobileNav_Style.css";

/*

  encapsulates all of the related concerns of the mobile nav in a single prop-configurable component, which includes freezing
  the main page while the mobile nav is open, the main page being slightly blurred when the mobile nav is open, as well
  as the actual mobile nav widget transition animation being off screen to the right and into frame.

*/

export default function MobileNav({
  logger,
  createInvocationId,

  mobileNavOpenCloseService,
  mobileNavSetLinksService,
  linkSetId,

  useDomainState: useGeneralState,
  domBodyRepository: domRepository,
}: MobileNavProps_Interface) {
  // these invocations below happen synchronously as per react component lifecycles.
  // this over using useEffect, so that there isn't a window where the component is mounted
  // but the 'isOpen' state is still true.

  const invocationIdPreMount = createInvocationId();

  logger
    .createNewLog()
    .addAttribute(MobileNavLogKeys_Enum.SOURCE_COMPONENT, "MobileNav")
    .addAttribute(MobileNavLogKeys_Enum.INVOCATION_ID, invocationIdPreMount)
    .addAttribute(MobileNavLogKeys_Enum.INVOCATION_TYPE, "component-pre-mount")
    .commit();

  mobileNavSetLinksService.apply(
    invocationIdPreMount,

    linkSetId,
  );

  mobileNavOpenCloseService.close(invocationIdPreMount);

  const navIsOpen: boolean = useGeneralState(
    (state: AppStoreRootState) => state.mobileNav.isOpen,
  );

  const navLinksSet: MobileNavLinksSet | null = useGeneralState(
    (state: AppStoreRootState) => state.mobileNav.linksSet,
  );

  // to prevent scrolling in the body component, you apply 'overflow hidden' when the nav is open,
  // which you do so on the vanilla DOM API, but it still changes based on this reactive hook. This works
  // in this component, because in the end, the top level body state is global as per vanilla Web APIs, so you
  // don't need to declare it elsewhere. This also allows better encapsulation overall, as well as prevents unnecessary rerenders
  // from useEffect calls otherwise in a top level parent component.
  useEffect(() => {
    const onChangeInvocationId = createInvocationId();

    if (navIsOpen) {
      domRepository.setOverflowY(
        onChangeInvocationId,

        DomBodyOverflowY_Enum.HIDDEN,
      );

      domRepository.setOverflowX(
        onChangeInvocationId,

        DomBodyOverflowX_Enum.HIDDEN,
      );
    } else {
      domRepository.setOverflowY(
        onChangeInvocationId,

        DomBodyOverflowY_Enum.AUTO,
      );

      domRepository.setOverflowX(
        onChangeInvocationId,

        DomBodyOverflowX_Enum.AUTO,
      );
    }

    return () => {
      const onCleanupInvocationId = createInvocationId();

      domRepository.setOverflowY(
        onCleanupInvocationId,

        DomBodyOverflowY_Enum.AUTO,
      );

      domRepository.setOverflowX(
        onChangeInvocationId,

        DomBodyOverflowX_Enum.AUTO,
      );
    };
  }, [navIsOpen]);

  return navIsOpen ? (
    <div
      className="mobile-nav-backdrop-blur-transition absolute z-40 flex h-dvh w-dvw justify-end"
      onClick={() => {
        const userClickedOffInvocationId = createInvocationId();

        mobileNavOpenCloseService.close(userClickedOffInvocationId);
      }}
    >
      {
        // outermost div is a translucent layer which the mobile nav widget sits within.
      }

      <div className="mobile-nav-slide-to-left-transition relative flex h-dvh max-w-[275px] grow">
        <div
          className="h-full w-full overflow-y-scroll border-l-2 border-white bg-black p-6 pr-2"
          onClick={(event) => {
            // prevent any clicks within the actual mobile nav from closing it out, only when the user clicks off

            event.stopPropagation();
          }}
        >
          <div className="mb-12 flex items-center justify-between overflow-y-scroll">
            <h1 className="lato-bold text-3xl text-white">Navigation</h1>

            <button
              type="button"
              onClick={(event) => {
                const invocationIdOnClickClose = createInvocationId();

                logger
                  .createNewLog()
                  .addAttribute(
                    MobileNavLogKeys_Enum.INVOCATION_ID,
                    invocationIdOnClickClose,
                  )
                  .addAttribute(
                    MobileNavLogKeys_Enum.INVOCATION_TYPE,
                    "on-click-close-mobile-nav",
                  )
                  .commit();

                mobileNavOpenCloseService.close(invocationIdOnClickClose);

                event.stopPropagation(); // no need to propagate, small easy gain in resource footprint
              }}
            >
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

              navLinksSet
                ? Object.entries(navLinksSet).map(([linkId, LinkData]) => {
                    return (
                      <Link
                        key={linkId}
                        logger={logger}
                        createInvocationId={createInvocationId}
                        linkId={linkId}
                        linkData={LinkData}
                      />
                    );
                  })
                : null
            }
          </ul>
        </div>
      </div>
    </div>
  ) : null;
}
