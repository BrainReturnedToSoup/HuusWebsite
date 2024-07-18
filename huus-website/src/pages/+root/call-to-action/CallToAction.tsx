import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useState } from "react";

import CallToActionMobile from "./CallToActionMobile";

import MIN_WIDTHS from "../../../enums/responsiveScreenWidths";

function ConsultationRedirect() {
  const [isHovered, setHoveredState] = useState(false);

  function handleMouseEnter() {
    setHoveredState(true);
  }

  function handleMouseLeave() {
    setHoveredState(false);
  }

  return (
    <a
      id="call-to-action-reg-link"
      className={`mb-6 flex items-center justify-center py-1 pl-4 pr-2 transition-colors duration-300 hover:cursor-pointer ${isHovered ? "bg-white" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label
        htmlFor="call-to-action-reg-link"
        className={`mr-1 text-2xl underline transition-colors duration-300 hover:cursor-pointer ${isHovered ? "text-black" : "text-white"}`}
      >
        Schedule a consultation today!
      </label>
    </a>
  );
}

function CallToActionRegular() {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center bg-black px-14 pb-16 xl:px-20">
      <h2 className="mb-3 text-6xl text-white">Like what you see?</h2>
      <ConsultationRedirect />
      <p className="w-[675px] text-center leading-7 text-white">
        Random description here Random description here Random description here
        Random description here Random description here Random description here
        Random description here Random description here Random description here
        Random description here
      </p>
    </div>
  );
}

export default function CallToAction() {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <div>
      {screenWidth <= MIN_WIDTHS.desktop ? (
        <CallToActionMobile />
      ) : (
        <CallToActionRegular />
      )}
    </div>
  );
}
