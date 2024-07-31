import { useState } from "react";

import "../../../../../App.css";

export default function Regular() {
  const [isHovered, setHoveredState] = useState(false);

  function handleMouseEnter() {
    setHoveredState(true);
  }

  function handleMouseLeave() {
    setHoveredState(false);
  }

  return (
    <div className="flex w-full items-center justify-center bg-black py-16">
      <div className="flex h-full max-w-[650px] flex-col items-center justify-center px-2">
        <h2 className="lato-medium mb-4 text-5xl text-white">
          Like what you see?
        </h2>
        <a
          className={`lato-medium mb-6 flex items-center justify-center px-4 py-1 text-xl underline transition-colors duration-150 hover:cursor-pointer ${isHovered ? "text-black" : "text-white"} ${isHovered ? "bg-white" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Schedule a consultation today!
        </a>
        <p className="lato-medium text-center leading-8 text-white">
          Random description here Random description here Random description
          here Random description here Random description here Random
          description here Random description here Random description here
          Random description here Random description here
        </p>
      </div>
    </div>
  );
}
