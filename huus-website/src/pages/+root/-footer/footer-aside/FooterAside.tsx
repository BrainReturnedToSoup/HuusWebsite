import Regular from "./regular/Regular";
import Tablet from "./tablet/Tablet";
import Phone from "./phone/Phone";

import MIN_WIDTHS from "../../../../enums/responsiveScreenWidths";

interface FooterAsideProps {
  screenWidth: number;
}

export default function FooterAside({ screenWidth }: FooterAsideProps) {
  return (
    <>
      {screenWidth >= MIN_WIDTHS.expanded && <Regular />}
      {screenWidth >= MIN_WIDTHS.medium &&
        screenWidth < MIN_WIDTHS.expanded && <Tablet />}
      {screenWidth < MIN_WIDTHS.medium && <Phone />}
    </>
  );
}
