import {
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../../enums/pages/+root/-main/features";

export default function Preface() {
  return (
    <div className="flex max-w-[760px] flex-col items-center px-4 py-14 lg:py-20">
      <h3 className="lato-medium mb-6 w-full text-center text-4xl lg:text-5xl">
        {SECTION_TITLE}
      </h3>
      <p className="lato-medium w-full text-center text-xl leading-loose">
        {SECTION_DESC}
      </p>
    </div>
  );
}
