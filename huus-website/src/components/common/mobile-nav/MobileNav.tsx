import { useSelector } from "react-redux";

import { AppStoreRootState } from "../../../state/react-redux/store";

import { MobileNavOpenCloseService_Interface } from "../../../services/mobile-nav/open-close/MobileNavOpenCloseService_Interface";

import {
  MobileNavSetLinksService_Interface,
  MobileNavLinkSetId,
} from "../../../services/mobile-nav/set-links/MobileNavSetLinksService_Interface";

import { MobileNavLinkSet } from "../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import { LINK_TEXT_MAPPING } from "./LinkTextMapping_Enum";

import xWhiteSVG from "../../../assets/x-white.svg";

interface MobileNavProps_Interface {
  mobileNavOpenCloseService: MobileNavOpenCloseService_Interface;
  mobileNavSetLinksService: MobileNavSetLinksService_Interface;
  linkSetId: MobileNavLinkSetId;
}

export default function MobileNav({
  mobileNavOpenCloseService,
  mobileNavSetLinksService,
  linkSetId,
}: MobileNavProps_Interface) {
  // happens synchronously as per react component lifecycles implicitly
  mobileNavSetLinksService.applyLinkSet(linkSetId);
  mobileNavOpenCloseService.close();

  const isOpen: boolean = useSelector(
    (state: AppStoreRootState) => state.mobileNav.isOpen,
  );

  const mobileNavLinksSet: MobileNavLinkSet | null = useSelector(
    (state: AppStoreRootState) => state.mobileNav.linkSet,
  );

  return isOpen ? (
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
                return (
                  <li>
                    {
                      // local mapping from the enums module in the same namespace
                    }
                    <a href={val}>{LINK_TEXT_MAPPING[key]}</a>
                  </li>
                );
              })
            : null
        }
      </ul>
    </div>
  ) : null;
}
