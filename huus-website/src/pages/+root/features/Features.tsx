import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FEATURE_LIST,
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../enums/features";

import servicesSlice from "../../../state/slices/services";

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


function Feature({
  title,
  desc,
  backgroundImageProp,
  icon,
  index,
  redirect,
}: FeatureProps) {
  const [isBoxComponentHovered, setBoxComponentHoveredState] = useState(false);
  const [isRedirectLinkHovered, setRedirectLinkHoveredState] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function redirectToPage(route: string, positionY: number): void {
    //sets the position to move to on the page being routed to. This is for
    //the 'learn more' links, which may point to a subsection of an existing page
    //for more information.

    dispatch(servicesSlice.actions.setPositionY(positionY));
    navigate(route);
  }

  //the goal of these handlers is to provide the necessary flags for interactivity
  //of the feature boxes themselves, as well as the redirect link individually.
  const handle = {
    redirect: (event: React.SyntheticEvent<HTMLElement>): void => {
      event.stopPropagation();

      redirectToPage(redirect.route, redirect.positionY);
    },

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
    <div
      className={`h-full w-full border-white px-2 pt-4 transition-colors duration-300 hover:cursor-pointer ${index !== 0 && index !== FEATURE_LIST.length - 1 ? "border-l-2 border-r-2" : ""} ${isBoxComponentHovered ? "bg-white" : ""}`}
      onClick={handle.redirect}
      onMouseEnter={handle.boxComponentMouseEnter}
      onMouseLeave={handle.boxComponentMouseLeave}
    >
      <div className="feature-container-grid-rows grid h-full w-full">
        <div className="flex px-2 pt-2 hover:cursor-pointer">
          <img className="hover:cursor-pointer" src={icon}></img>
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
          <a
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
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
    </div>
  );
}
