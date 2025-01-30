import { AppStoreRootState } from "../../../state/react-redux/store";

import { MobileNavProps_Interface } from "./MobileNav_Interface";
import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";

import xWhiteSVG from "../../../assets/x-white.svg";
import { MobileNavLogKeys_Enum } from "./MobileNav_Enum";
import { Link } from "./Link_Component";
import { useEffect } from "react";
import { DomBodyOverflowY_Enum } from "../../../state/repositories/DOM/DomBodyRepository_Enum";

export default function MobileNav({
  logger,
  createInvocationId,

  mobileNavOpenCloseService,
  mobileNavSetLinksService,
  linkSetId,

  useGeneralState,
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
    } else {
      domRepository.setOverflowY(
        onChangeInvocationId,

        DomBodyOverflowY_Enum.AUTO,
      );
    }

    return () => {
      const onCleanupInvocationId = createInvocationId();

      domRepository.setOverflowY(
        onCleanupInvocationId,

        DomBodyOverflowY_Enum.AUTO,
      );
    };
  }, [navIsOpen]);

  return navIsOpen ? (
    <div
      className="absolute z-50 flex h-dvh w-dvw justify-end"
      onClick={() => {
        const userClickedOffInvocationId = createInvocationId();

        mobileNavOpenCloseService.close(userClickedOffInvocationId);
      }}
    >
      {
        // outermost div is a translucent layer which the mobile nav widget sits within.
      }

      <div
        className="h-dvh max-w-fit bg-black p-6 sm:p-10"
        onClick={(event) => {
          // prevent any clicks within the actual mobile nav from closing it out, only when the user clicks off

          event.stopPropagation();
        }}
      >
        <div className="mb-12 flex items-center justify-between overflow-y-scroll">
          <h1 className="lato-bold text-4xl text-white">Navigation</h1>

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
              className="max-w-[64px] text-white"
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
  ) : null;
}
