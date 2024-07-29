import { useState } from "react";

import "../../../../../App.css";

interface FeatureProps {
  title: string;
  desc: string;
  backgroundImageProp: string;
  redirect: {
    route: string;
    positionY: number;
  };
  index: number;
  listLength: number;
}

export default function Feature({
  title,
  desc,
  backgroundImageProp,
  redirect,
  index,
  listLength,
}: FeatureProps) {
  const [isBoxComponentHovered, setBoxComponentHoveredState] = useState(false);
  const [isRedirectLinkHovered, setRedirectLinkHoveredState] = useState(false);

  //the goal of these handlers is to provide the necessary flags for interactivity
  //of the feature boxes themselves, as well as the redirect link individually.
  const handle = {
    boxComponentMouseEnter: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(true);
    },

    boxComponentMouseLeave: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(false);
      setRedirectLinkHoveredState(false);
    },

    redirectLinkMouseEnter: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(false);
      setRedirectLinkHoveredState(true);
    },

    redirectLinkMouseLeave: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(true);
      setRedirectLinkHoveredState(false);
    },
  };

  return (
    <a
      className={`h-full w-full border-white px-2 pt-4 transition-colors duration-300 hover:cursor-pointer ${index !== 0 && index !== listLength - 1 ? "border-l-2 border-r-2" : ""} ${isBoxComponentHovered ? "bg-white" : ""}`}
      onMouseEnter={handle.boxComponentMouseEnter}
      onMouseLeave={handle.boxComponentMouseLeave}
      href={redirect.route}
    >
      <div className="feature-container-grid-rows grid h-full w-full">
        <div className="flex px-2 pt-2 hover:cursor-pointer">
          <h3
            className={`lato-medium text-2xl transition-colors duration-300 hover:cursor-pointer ${isBoxComponentHovered ? "text-black" : "text-white"}`}
          >
            {title}
          </h3>
        </div>
        <div
          style={{
            backgroundImage: `url(${backgroundImageProp})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className={`h-full w-full p-4 transition-colors duration-300 ${isBoxComponentHovered ? "bg-black bg-opacity-75" : ""}`}
          >
            <p
              className={`lato-medium transition-colors duration-300 hover:cursor-pointer ${isBoxComponentHovered ? "text-white" : "text-transparent"}`}
            >
              {desc}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-end p-2">
          <button
            id={`feature-${index}-redirect`}
            onMouseEnter={handle.redirectLinkMouseEnter}
            onMouseLeave={handle.redirectLinkMouseLeave}
            className={`flex items-center justify-center px-3 py-1 transition-colors duration-300 hover:cursor-pointer ${isRedirectLinkHovered ? "bg-white" : ""}`}
          >
            <label
              htmlFor={`feature-${index}-redirect`}
              className={`lato-medium underline transition-colors duration-300 hover:cursor-pointer ${isBoxComponentHovered || isRedirectLinkHovered ? "text-black" : "text-white"}`}
            >
              Details
            </label>
          </button>
        </div>
      </div>
    </a>
  );
}
