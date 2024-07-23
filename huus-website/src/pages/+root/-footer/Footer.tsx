import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import FooterNav from "./footer-nav/FooterNav";
import FooterAside from "./footer-aside/FooterAside";
import CopywriteSection from "./copywrite-section/CopywriteSection";

import FOOTER_NAV_COLUMNS from "../../../enums/pages/+root/-footer/footer";
import MIN_WIDTHS from "../../../enums/responsiveScreenWidths";

interface FooterSubtypeProps {
  screenWidth: number;
}

function FooterRegular({ screenWidth }: FooterSubtypeProps) {
  return (
    <footer className="flex h-[550px] w-full items-center justify-center px-14 pt-16">
      <div className="h-full w-[1024px]">
        <div className="flex h-5/6 w-full border-t-2 border-black">
          <FooterAside screenWidth={screenWidth} />
          <FooterNav
            screenWidth={screenWidth}
            footerNavColumns={FOOTER_NAV_COLUMNS}
          />
        </div>
        <CopywriteSection screenWidth={screenWidth} />
      </div>
    </footer>
  );
}

function FooterTablet({ screenWidth }: FooterSubtypeProps) {
  return (
    <footer className="h-[550px] w-full px-4 pt-16">
      <div className="flex h-5/6 w-full border-y-2 border-black">
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

function FooterPhone({ screenWidth }: FooterSubtypeProps) {
  return (
    <footer className="w-full px-4 pt-12">
      <FooterAside screenWidth={screenWidth} />
      <FooterNav
        screenWidth={screenWidth}
        footerNavColumns={FOOTER_NAV_COLUMNS}
      />
      <CopywriteSection screenWidth={screenWidth} />
    </footer>
  );
}

export default function Footer() {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <>
      {screenWidth >= MIN_WIDTHS.large && (
        <FooterRegular screenWidth={screenWidth} />
      )}
      {screenWidth >= MIN_WIDTHS.medium && screenWidth < MIN_WIDTHS.large && (
        <FooterTablet screenWidth={screenWidth} />
      )}
      {screenWidth < MIN_WIDTHS.medium && (
        <FooterPhone screenWidth={screenWidth} />
      )}
    </>
  );
}
