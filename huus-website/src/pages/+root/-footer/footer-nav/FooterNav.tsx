import Regular from "./regular/Regular";
import Tablet from "./tablet/Tablet";
import Phone from "./phone/Phone";

import MIN_WIDTHS from "../../../../enums/responsiveScreenWidths";
import FOOTER_NAV_COLUMNS from "../../../../enums/pages/+root/-footer/footer";

interface FooterNavProps {
  screenWidth: number;
  footerNavColumns: typeof FOOTER_NAV_COLUMNS;
}

export default function FooterNav({
  screenWidth,
  footerNavColumns,
}: FooterNavProps) {
  return (
    <>
      {screenWidth >= MIN_WIDTHS.large && (
        <Regular footerNavColumns={footerNavColumns} />
      )}
      {screenWidth >= MIN_WIDTHS.medium && screenWidth < MIN_WIDTHS.large && (
        <Tablet footerNavColumns={footerNavColumns} />
      )}
      {screenWidth < MIN_WIDTHS.medium && (
        <Phone footerNavColumns={footerNavColumns} />
      )}
    </>
  );
}
