import { useState } from "react";

import arrowRightBlack from "../../../assets/arrow-right-black.svg";
import arrowRightWhite from "../../../assets/arrow-right-white.svg";

import "../../../App.css";

function LearnMoreLink() {
  const [isHovered, setHoveredState] = useState(false);

  function handleMouseEnter() {
    setHoveredState(true);
  }

  function handleMouseLeave() {
    setHoveredState(false);
  }

  return (
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`mr-8 mt-4 flex w-fit items-center justify-center self-end px-4 py-1 transition-colors duration-300 ease-in-out sm:mt-0 ${isHovered ? "bg-white" : ""}`}
      href="/about"
    >
      <p
        className={`lato-bold md:text-xl ${isHovered ? "text-black" : "text-white"}`}
      >
        Learn more
      </p>
      <img
        src={isHovered ? arrowRightBlack : arrowRightWhite}
        className={`ml-1 aspect-square w-8 font-semibold lg:w-10 lg:text-3xl ${isHovered ? "text-black" : "text-white"}`}
        alt="redirect icon"
      ></img>
    </a>
  );
}

export default function Hero() {
  return (
    <div className="mt-14 flex h-full lg:px-14 xl:px-20">
      <div className="mt-5 flex h-4/5 flex-col justify-center bg-black bg-opacity-20 py-6 transition-colors duration-300 ease-in-out md:p-3 lg:w-[635px] xl:bg-transparent">
        <div className="mb-6 bg-opacity-15 p-3 pl-12">
          <h1 className="lato-light mb-4 text-5xl text-white md:text-7xl lg:text-8xl">
            No fads.
          </h1>
          <h2 className="lato-light mb-4 text-5xl text-white md:text-7xl lg:text-8xl">
            No gimmicks.
          </h2>
          <h3 className="lato-medium text-5xl text-white md:text-7xl lg:text-8xl">
            Just science
          </h3>
        </div>
        <div className="flex flex-col p-3 pl-10">
          <p className="mb-2 pl-2 leading-relaxed text-white md:mb-6 md:text-xl">
            Quality 1-on-1 personal training, fitness mentorship, and nutrition
            consultation right at your fingertips. Schedule your online or
            in-person appointment today.
          </p>
          <LearnMoreLink />
        </div>
      </div>
    </div>
  );
}
