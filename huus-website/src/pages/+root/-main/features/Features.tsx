import { useState } from "react";

import {
  FEATURE_LIST,
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../../enums/pages/+root/-main/features";

import "../../../../App.css";

interface FeatureProps {
  feature: (typeof FEATURE_LIST)[0];
}

function Feature({ feature }: FeatureProps) {
  const [sectionHovered, setSectionHoveredState] = useState(false);
  const [redirectButtonHovered, setRedirectButtonHoveredState] =
    useState(false);

  function handleSectionMouseEnter() {
    setSectionHoveredState(true);
  }

  function handleSectionMouseLeave() {
    setSectionHoveredState(false);
  }

  function handleRedirectButtonMouseEnter() {
    setRedirectButtonHoveredState(true);
  }

  function handleRedirectButtonMouseLeave() {
    setRedirectButtonHoveredState(false);
  }

  return (
    <a
      href={feature.redirect.route}
      className={`mx-1 my-1 flex flex-col justify-between p-4 transition-colors duration-300 ease-in-out md:my-3 lg:my-0 lg:h-full lg:max-w-[350px] ${sectionHovered && !redirectButtonHovered ? "bg-white" : ""}`}
      onMouseEnter={handleSectionMouseEnter}
      onMouseLeave={handleSectionMouseLeave}
    >
      <div className="flex flex-col sm:flex-row lg:block">
        <div
          className="mb-2 flex aspect-square min-w-[275px] flex-col bg-red-500 lg:min-w-fit"
          style={{
            backgroundImage: `url(${feature.backgroundImageProp})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="flex w-full items-center justify-center bg-black bg-opacity-75 p-2 text-3xl text-white sm:text-2xl">
            {feature.title}
          </h1>
        </div>
        <div className="flex flex-col justify-between">
          <p
            className={`mb-2 p-2 text-xl leading-relaxed transition-colors duration-300 ease-in-out sm:ml-4 md:p-4 lg:ml-0 lg:p-0 lg:text-base ${sectionHovered && !redirectButtonHovered ? "text-black" : "text-white"}`}
          >
            {feature.desc}
          </p>

          <div className="hidden items-end justify-end p-2 sm:flex lg:hidden">
            <button
              onMouseEnter={handleRedirectButtonMouseEnter}
              onMouseLeave={handleRedirectButtonMouseLeave}
              className={`p-2 text-xl underline transition-colors duration-300 ease-in-out ${sectionHovered || redirectButtonHovered ? "bg-white text-black" : "text-white"}`}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="flex grow items-end justify-end p-2 sm:hidden lg:flex">
        <button
          onMouseEnter={handleRedirectButtonMouseEnter}
          onMouseLeave={handleRedirectButtonMouseLeave}
          className={`px-2 py-1 text-xl underline transition-colors duration-300 ease-in-out lg:text-base ${sectionHovered || redirectButtonHovered ? "text-black" : "text-white"} ${redirectButtonHovered ? "bg-white" : ""}`}
        >
          Learn more
        </button>
      </div>
    </a>
  );
}

export default function Features() {
  return (
    <div className="mb-8 flex flex-col items-center py-4">
      <div className="flex max-w-[760px] flex-col items-center px-4 py-8">
        <h3 className="lato-medium mb-6 w-full text-center text-4xl">
          {SECTION_TITLE}
        </h3>
        <p className="lato-medium w-full text-center text-xl leading-loose">
          {SECTION_DESC}
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-black px-1 py-1 lg:flex-row lg:items-start lg:px-4 lg:py-2">
        {FEATURE_LIST.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
}
