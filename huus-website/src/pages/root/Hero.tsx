import { useState } from "react";

import arrowRightBlack from "../../assets/arrow-right-black.svg";
import arrowRightWhite from "../../assets/arrow-right-white.svg";

function LearnMoreLink() {
  const [isHovered, setHoverState] = useState(false);

  function handleEnter() {
    setHoverState(true);
  }

  function handleLeave() {
    setHoverState(false);
  }

  return (
    <a
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mr-8 mt-4 flex w-fit items-center self-end px-4 py-1 transition-colors duration-300 ease-in-out sm:mt-0 ${isHovered ? "bg-white" : ""}`}
      href="/about "
    >
      <p className={`lg:text-xl ${isHovered ? "text-black" : "text-white"}`}>
        Learn more
      </p>
      <img
        src={isHovered ? arrowRightBlack : arrowRightWhite}
        className={`ml-1 aspect-square w-8 font-semibold lg:text-xl ${isHovered ? "text-black" : "text-white"}`}
        alt="redirect icon"
      ></img>
    </a>
  );
}

export default function Hero() {
  return (
    <div className="bg-red my-12 mt-14 flex h-full lg:px-14 xl:px-20">
      <div className="mt-5 flex h-3/4 flex-col justify-center bg-black bg-opacity-30 p-3 py-6 transition-colors duration-300 ease-in-out sm:h-3/5 md:h-4/5 lg:w-[700px] xl:bg-transparent">
        <div className="mb-6 bg-opacity-15 p-3 pl-12">
          <h2 className="mb-4 text-5xl font-light text-white md:text-7xl">
            No fads.
          </h2>
          <h1 className="mb-6 text-5xl font-light text-white md:text-7xl">
            No gimmicks.
          </h1>
          <h3 className="mt-2 text-5xl text-white md:text-7xl">Just science</h3>
        </div>
        <div className="flex flex-col bg-opacity-10 bg-opacity-15 p-3 pl-10">
          <p className="pl-2 text-white md:mb-2 md:text-xl">
            Quality personal training and fitness consultation right at your
            fingertips. Schedule your online or in-person appointment today.
          </p>
          <LearnMoreLink />
        </div>
      </div>
    </div>
  );
}
