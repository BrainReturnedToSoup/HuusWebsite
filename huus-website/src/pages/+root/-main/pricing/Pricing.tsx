import Regular from "./regular/Regular";
import Phone from "./phone/Phone";
import Tablet from "./tablet/Tablet";

import MIN_WIDTHS from "../../../../enums/responsiveScreenWidths";

import {
  OFFER_LIST,
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../../enums/pages/+root/-main/pricing";

interface PricingProps {
  screenWidth: number;
}

export default function Pricing({ screenWidth }: PricingProps) {
  return (
    <div className="flex flex-col items-center pb-20">
      <div className="mdExpanded:w-[840px] mb-8 flex flex-col items-center p-4 pt-40 md:px-10 xl:px-20">
        <h2 className="lato-bold mb-4 w-full text-center text-xl">Features</h2>
        <h3 className="lato-medium mb-10 w-full text-center text-5xl">
          {SECTION_TITLE}
        </h3>
        <p className="lato-medium mb-4 w-full text-center text-xl leading-loose">
          {SECTION_DESC}
        </p>
      </div>
      {screenWidth >= MIN_WIDTHS.large && <Regular offerList={OFFER_LIST} />}
      {screenWidth >= MIN_WIDTHS.medium && screenWidth < MIN_WIDTHS.large && (
        <Tablet offerList={OFFER_LIST} />
      )}
      {screenWidth < MIN_WIDTHS.medium && <Phone offerList={OFFER_LIST} />}
    </div>
  );
}
