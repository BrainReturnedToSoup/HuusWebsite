import { useSelector } from "react-redux";

import { AppStoreRootState } from "../../../state/react-redux/store";

import { MobileNavOpenCloseService_Interface } from "../../../services/mobile-nav/open-close/MobileNavOpenCloseService_Interface";

import {
  MobileNavSetLinksService_Interface,
  LinkSetId,
} from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Interface";

import { LinkSet } from "../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import xWhiteSVG from "../../../assets/x-white.svg";

interface MobileNavProps_Interface {
  mobileNavOpenCloseService: MobileNavOpenCloseService_Interface;
  mobileNavSetLinksService: MobileNavSetLinksService_Interface;
  linkSetId: LinkSetId;
}

export default function MobileNav({
  mobileNavOpenCloseService,
  mobileNavSetLinksService,
  linkSetId,
}: MobileNavProps_Interface) {
  // happens synchronously as per react component lifecycles implicitly
  mobileNavSetLinksService.applyLinkSet(linkSetId);
  mobileNavOpenCloseService.close();

  const mobileNavLinksSet: LinkSet | null = useSelector(
    (state: AppStoreRootState) => state.mobileNav.linkSet,
  );

  return (
    <div className="h-dvh bg-black p-6 sm:p-10">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="lato-bold text-4xl text-white">Navigation</h1>
        <button type="button" onClick={mobileNavOpenCloseService.close}>
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
                return <></>;
              })
            : null
        }
      </ul>
    </div>
  );
}
