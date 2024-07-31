import Regular from "./regular/Regular";
import Tablet from "./tablet/Tablet";
import Phone from "./phone/Phone";

import {
  FEATURE_LIST,
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../../enums/pages/+root/-main/features";

import MIN_WIDTHS from "../../../../enums/responsiveScreenWidths";

import "../../../../App.css";

interface FeaturesProps {
  screenWidth: number;
}

export default function Features({ screenWidth }: FeaturesProps) {
  return (
    <div className="mb-8 flex flex-col items-center pt-6">
      <div className="mb-8 flex max-w-[760px] flex-col items-center px-8 py-4">
        <h2 className="lato-bold mb-3 w-full text-center text-xl">Features</h2>
        <h3 className="lato-medium mb-6 w-full text-center text-5xl">
          {SECTION_TITLE}
        </h3>
        <p className="lato-medium w-full text-center text-xl leading-loose">
          {SECTION_DESC}
        </p>
      </div>
      {screenWidth >= MIN_WIDTHS.large && (
        <Regular featureList={FEATURE_LIST} />
      )}
      {screenWidth >= MIN_WIDTHS.medium && screenWidth < MIN_WIDTHS.large && (
        <Tablet featureList={FEATURE_LIST} />
      )}
      {screenWidth < MIN_WIDTHS.medium && <Phone featureList={FEATURE_LIST} />}
    </div>
  );
}
