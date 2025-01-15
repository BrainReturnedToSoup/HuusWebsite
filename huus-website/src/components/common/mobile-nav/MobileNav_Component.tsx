import { useSelector } from "react-redux";

import { AppStoreRootState } from "../../../state/react-redux/store";

import { MobileNavProps_Interface } from "./MobileNav_Interface";
import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";

import xWhiteSVG from "../../../assets/x-white.svg";

export default function MobileNav({
  mobileNavOpenCloseService,
  mobileNavSetLinksService,

  linkSetId,
  // add logger as prop eventually
}: MobileNavProps_Interface) {
  // these invocations below happen synchronously as per react component lifecycles.
  // this over using useEffect, so that there isn't a window where the component is mounted
  // but the 'isOpen' state is still true.

  const preComponentMount_invocationId = crypto.randomUUID();

  // add logging here that includes the above id

  mobileNavSetLinksService.apply(linkSetId);
  mobileNavOpenCloseService.close(preComponentMount_invocationId);

  const isOpen: boolean = useSelector(
    (state: AppStoreRootState) => state.mobileNav.isOpen,
  );

  const mobileNavLinksSet: MobileNavLinksSet | null = useSelector(
    (state: AppStoreRootState) => state.mobileNav.linksSet,
  );

  return isOpen ? (
    <div className="h-dvh bg-black p-6 sm:p-10">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="lato-bold text-4xl text-white">Navigation</h1>

        <button
          type="button"
          onClick={() => {
            const onClickClose_invocationId = crypto.randomUUID();

            // add logging here that includes the above id

            mobileNavOpenCloseService.close(onClickClose_invocationId);
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

          mobileNavLinksSet
            ? Object.entries(mobileNavLinksSet).map(([key, val]) => {
                // local mapping from the enums module in the same namespace
                return (
                  // add logic for mapping the link set to actual links here
                );
              })
            : null
        }
      </ul>
    </div>
  ) : null;
}
