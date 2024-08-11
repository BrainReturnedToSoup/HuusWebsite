import MIN_WIDTHS from "../../../../enums/responsiveScreenWidths";

import Regular from "./regular/Regular";
import Mobile from "./mobile/Mobile";

interface NavBarProps {
  screenWidth: number;
}

export default function NavBar({ screenWidth }: NavBarProps) {
  return <>{screenWidth >= MIN_WIDTHS.large ? <Regular /> : <Mobile />}</>;
}
