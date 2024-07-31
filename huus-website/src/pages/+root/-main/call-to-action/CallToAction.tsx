import Regular from "./regular/Regular";
import Tablet from "./tablet/Tablet";
import Phone from "./phone/Phone";

import MIN_WIDTHS from "../../../../enums/responsiveScreenWidths";

interface CallToActionProps {
  screenWidth: number;
}

export default function CallToAction({ screenWidth }: CallToActionProps) {
  return (
    <>
      {screenWidth >= MIN_WIDTHS.large && <Regular />}
      {screenWidth >= MIN_WIDTHS.medium && screenWidth < MIN_WIDTHS.large && (
        <Tablet />
      )}
      {screenWidth < MIN_WIDTHS.medium && <Phone />}
    </>
  );
}