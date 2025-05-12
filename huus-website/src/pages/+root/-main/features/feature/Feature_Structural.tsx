import { useState } from "react";

import { FeatureProps_Interface } from "./Feature_Interface";

import { FeatureImage } from "./feature-image/FeatureImage_Structural";

function Feature({ feature }: FeatureProps_Interface) {
  const [isFeatureHovered, setIsFeatureHovered] = useState<boolean>(false);
  const [isRedirectButtonHovered, setIsRedirectButtonHovered] =
    useState<boolean>(false);

  // const [isActivelySelected, setActivelySelected] = useState<boolean>(false);

  return (
    <div>
      <a
        href={feature.redirect.route}
        onMouseEnter={() => {
          setIsFeatureHovered(true);
        }}
        onMouseLeave={() => {
          setIsFeatureHovered(false);
        }}
        className={`mx-1 my-1 flex flex-col items-center justify-between px-4 py-3 transition-colors duration-300 ease-in-out active:bg-white lg:my-0 lg:h-full lg:max-w-[350px] ${isFeatureHovered && !isRedirectButtonHovered ? "bg-white" : ""}`}
      >
        {/*
            switches between vertical cards for smartphones, to horizontal cards for tablet-sized screens, and then back to vertical cards for normal desktop
          */}
        <div className="block sm:flex sm:flex-row lg:block">
          <FeatureImage
            title={feature.title}
            backgroundImage={feature.backgroundImage}
            imageAlt={"feature image"}
          />
          <div className="flex flex-col justify-between">
            <p
              className={`default-font-bold mb-4 p-2 text-xl leading-relaxed transition-colors duration-300 ease-in-out active:text-black sm:ml-4 md:p-4 lg:ml-0 lg:p-0 lg:text-base ${isFeatureHovered && !isRedirectButtonHovered ? "text-black" : "text-white"}`}
            >
              {feature.desc}
            </p>

            {/*
              the redirect button for mobile devices. Exists apart of the description container
              to utilize the parent container 
            */}
            <div className="hidden items-end justify-end p-2 sm:flex lg:hidden">
              <button
                onMouseEnter={() => {
                  setIsRedirectButtonHovered(true);
                }}
                onMouseLeave={() => {
                  setIsRedirectButtonHovered(false);
                }}
                className={`default-font-bold border-r-[1px] px-2 py-1 text-xl transition-colors duration-300 ease-in-out active:bg-white active:text-black ${isFeatureHovered ? "border-black" : "border-white"} ${isFeatureHovered || isRedirectButtonHovered ? "bg-white text-black" : "text-white"}`}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/*
            the redirect button for desktop views. Exists as a separate component utilizing CSS breakpoints in tandem with the button above
          */}
        <div className="w-full items-end justify-end p-2 sm:hidden lg:flex">
          <button
            onMouseEnter={() => {
              setIsRedirectButtonHovered(true);
            }}
            onMouseLeave={() => {
              setIsRedirectButtonHovered(false);
            }}
            className={`default-font-bold border-r-[1px] px-2 py-1 text-xl underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-black active:text-black lg:text-base ${isFeatureHovered ? "border-black" : "border-white"} ${isFeatureHovered || isRedirectButtonHovered ? "text-black" : "text-white"} ${isRedirectButtonHovered ? "bg-white" : ""}`}
          >
            Learn more
          </button>
        </div>
      </a>
    </div>
  );
}

export { Feature };
