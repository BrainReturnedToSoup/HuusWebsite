import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import {
  FEATURE_LIST,
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../enums/features";

import "../../../App.css";

interface FeatureProps {
  title: string;
  desc: string;
  backgroundImageProp: string;
  icon: string;
  index: number;
  redirect: {
    route: string;
    positionY: number;
  };
}

//switch from the large mobile to small mobile grid setup based on device width
//the difference in this case is how the mobile display looks on tablets compared to phones

function Feature({
  title,
  desc,
  backgroundImageProp,
  icon,
  index,
  redirect,
}: FeatureProps) {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <a
      className={`my-6 w-full flex-col hover:cursor-pointer ${screenWidth >= 640 ? "feature-mobile-container-sm-grid grid h-[300px] gap-x-4" : ""}`}
      id={`feature-mobile-redirect-${index}`}
      href={redirect.route}
    >
      {screenWidth > 640 ? (
        <>
          <div
            className="feature-mobile-container-sm-image-cell aspect-square h-full w-full"
            style={{
              backgroundImage: `url(${backgroundImageProp})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="feature-mobile-container-sm-heading-cell flex h-full w-full items-center p-3">
            <img src={icon}></img>
            <h2 className="text-4xl text-white">{title}</h2>
          </div>
        </>
      ) : (
        <div
          className="mb-4 aspect-square w-full"
          style={{
            backgroundImage: `url(${backgroundImageProp})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex h-14 w-full items-center justify-center bg-black bg-opacity-85">
            <h2 className="text-3xl text-white">{title}</h2>
          </div>
        </div>
      )}

      <div
        className={`mb-3 sm:p-3 ${screenWidth >= 640 ? "feature-mobile-container-sm-desc-cell h-full w-full" : ""}`}
      >
        <p className="text-white sm:text-xl">{desc}</p>
      </div>
      <div
        className={`flex items-center justify-end pr-6 ${screenWidth >= 640 ? "feature-mobile-container-sm-redirect-cell h-full w-full" : ""}`}
      >
        <label
          htmlFor={`feature-mobile-redirect-${index}`}
          className="text-white underline sm:text-xl"
        >
          Details
        </label>
      </div>
    </a>
  );
}

export default function FeaturesMobile() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="mb-6 flex flex-col items-center justify-center px-4 sm:px-12">
        <h2 className="lato-bold mb-2">Features</h2>
        <h3 className="lato-medium mb-6 text-center text-4xl">
          {SECTION_TITLE}
        </h3>
        <p className="lato-medium mb-4 w-full text-center leading-loose sm:text-xl">
          {SECTION_DESC}
        </p>
      </div>
      <div className="flex w-full flex-col items-center bg-black px-4 py-2">
        {FEATURE_LIST.map((feature, index) => {
          return (
            <Feature
              title={feature.title}
              desc={feature.desc}
              backgroundImageProp={feature.backgroundImageProp}
              icon={feature.icon}
              redirect={feature.redirect}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

//starting at sm, the feature boxes with have individual rows