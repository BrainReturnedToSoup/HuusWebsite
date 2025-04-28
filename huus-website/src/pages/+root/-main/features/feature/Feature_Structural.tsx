import { useState } from "react";

import { FeatureProps_Interface } from "./Feature_Interface";

import { FeatureImage } from "./feature-image/FeatureImage_Structural";

function Feature({ feature }: FeatureProps_Interface) {
  const [sectionHovered, setSectionHoveredState] = useState(false);
  const [redirectButtonHovered, setRedirectButtonHoveredState] =
    useState(false);

  return (
    <div>
      <a
        href={feature.redirect.route}
        onMouseEnter={() => {
          setSectionHoveredState(true);
        }}
        onMouseLeave={() => {
          setSectionHoveredState(false);
        }}
        className={`mx-1 my-1 flex flex-col items-center justify-between px-4 py-3 transition-colors duration-300 ease-in-out lg:my-0 lg:h-full lg:max-w-[350px] ${sectionHovered && !redirectButtonHovered ? "bg-white" : ""}`}
      >
        <div className="flex flex-col sm:flex-row lg:block">
          <FeatureImage
            title={feature.title}
            backgroundImage={feature.backgroundImage}
            imageAlt={"feature image"}
          />
          <div className="flex flex-col justify-between">
            <p
              className={`mb-2 p-2 text-xl leading-relaxed transition-colors duration-300 ease-in-out sm:ml-4 md:p-4 lg:ml-0 lg:p-0 lg:text-base ${sectionHovered && !redirectButtonHovered ? "text-black" : "text-white"}`}
            >
              {feature.desc}
            </p>

            <div className="hidden items-end justify-end p-2 sm:flex lg:hidden">
              <button
                onMouseEnter={() => {
                  setRedirectButtonHoveredState(true);
                }}
                onMouseLeave={() => {
                  setRedirectButtonHoveredState(false);
                }}
                className={`p-2 text-xl underline transition-colors duration-300 ease-in-out ${sectionHovered || redirectButtonHovered ? "bg-white text-black" : "text-white"}`}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="w-full items-end justify-end p-2 sm:hidden lg:flex">
          <button
            onMouseEnter={() => {
              setRedirectButtonHoveredState(true);
            }}
            onMouseLeave={() => {
              setRedirectButtonHoveredState(false);
            }}
            className={`px-3 py-2 text-xl underline transition-colors duration-300 ease-in-out lg:text-base ${sectionHovered || redirectButtonHovered ? "text-black" : "text-white"} ${redirectButtonHovered ? "bg-white" : ""}`}
          >
            Learn more
          </button>
        </div>
      </a>
    </div>
  );
}

export { Feature };
