import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import servicesSlice from "../../../../../state/slices/services";

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
      className={`h-full w-full border-white px-2 pt-4 transition-colors duration-300 hover:cursor-pointer ${index !== 0 && index !== listLength - 1 ? "border-l-2 border-r-2" : ""} ${isBoxComponentHovered ? "bg-white" : ""}`}
      onClick={handle.redirect}
      onMouseEnter={handle.boxComponentMouseEnter}
      onMouseLeave={handle.boxComponentMouseLeave}
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
