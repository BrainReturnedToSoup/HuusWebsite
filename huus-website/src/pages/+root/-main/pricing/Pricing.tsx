import Regular from "./regular/Regular";
import Phone from "./phone/Phone";
import Tablet from "./tablet/Tablet";

import MIN_WIDTHS from "../../../../enums/responsiveScreenWidths";

import {
  OFFER_LIST,
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../../enums/pricing";

interface PricingProps {
  screenWidth: number;
}

export default function Pricing({ screenWidth }: PricingProps) {
  return (
    <div className="flex flex-col items-center pb-20">
      <div className="mb-8 flex flex-col items-center px-6 py-4 pt-40 md:px-10 lg:w-[850px] lg:px-14">
        <h2 className="lato-bold mb-4 text-xl">Features</h2>
        <h3 className="lato-medium mb-10 text-6xl">{SECTION_TITLE}</h3>
        <p className="lato-medium mb-4 w-full text-center text-xl leading-loose">
          {SECTION_DESC}
        </p>
      </div>
      <div className="flex h-[500px] w-full items-center justify-center py-4 lg:px-10">
        <div
          className={`grid h-full grid-rows-1 md:w-[1024px] grid-cols-${OFFER_LIST.length} gap-2`}
        >
          {screenWidth >= MIN_WIDTHS.expanded && (
            <Regular offerList={OFFER_LIST} />
          )}
          {screenWidth >= MIN_WIDTHS.medium &&
            screenWidth < MIN_WIDTHS.expanded && (
              <Tablet offerList={OFFER_LIST} />
            )}
          {screenWidth < MIN_WIDTHS.medium && <Phone offerList={OFFER_LIST} />}
        </div>
      </div>
    </div>
  );
}
