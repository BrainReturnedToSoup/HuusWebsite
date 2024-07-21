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
    <div className="flex flex-col items-center">
      <div className="mb-8 flex w-[850px] flex-col items-center p-4 px-14 pt-40 md:px-10 xl:px-20">
        <h2 className="lato-bold mb-4 text-xl">Features</h2>
        <h3 className="lato-medium mb-10 text-6xl">{SECTION_TITLE}</h3>
        <p className="lato-medium mb-4 w-full text-center text-xl leading-loose">
          {SECTION_DESC}
        </p>
      </div>
      <div className="flex w-full items-center justify-center bg-black px-6 py-4 md:px-10 lg:px-14 xl:px-20">
        <div className="grid h-full grid-cols-3 lg:w-[1150px]">
          {screenWidth >= MIN_WIDTHS.expanded && (
            <Regular featureList={FEATURE_LIST} />
          )}
          {screenWidth >= MIN_WIDTHS.medium &&
            screenWidth < MIN_WIDTHS.expanded && (
              <Tablet featureList={FEATURE_LIST} />
            )}
          {screenWidth < MIN_WIDTHS.medium && (
            <Phone featureList={FEATURE_LIST} />
          )}
        </div>
      </div>
    </div>
  );
}
