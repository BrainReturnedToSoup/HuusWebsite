import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import FooterNav from "./footer-nav/FooterNav";
import FooterAside from "./footer-aside/FooterAside";
import CopywriteSection from "./copywrite-section/CopywriteSection";

import FOOTER_NAV_COLUMNS from "../../../enums/pages/+root/-footer/footer";

export default function Footer() {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <footer className="h-[550px] w-full px-6 pt-16 sm:px-10 lg:px-14 xl:px-20">
      <div className="flex h-5/6 w-full border-t-2 border-black">
        <FooterAside screenWidth={screenWidth} />
        <FooterNav
          screenWidth={screenWidth}
          footerNavColumns={FOOTER_NAV_COLUMNS}
        />
      </div>
      <CopywriteSection screenWidth={screenWidth} />
    </footer>
  );
}
