import blackArrowRight from "../../../../../assets/arrow-right-black.svg";

import "../../../../../App.css";

export default function Tablet() {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center bg-black px-14 pb-16 xl:px-20">
      <h2 className="mb-6 text-center text-6xl text-white">
        Like what you see?
      </h2>
      <a
        id="call-to-action-redirect"
        className={`mb-6 flex items-center justify-center bg-white py-2 pl-4 pr-2 text-center hover:cursor-pointer`}
        href="/contact"
      >
        <label
          htmlFor="call-to-action-redirect"
          className="mr-1 text-2xl hover:cursor-pointer"
        >
          Schedule a consultation today!
        </label>
        <img
          src={blackArrowRight}
          className="aspect-square h-[36px] hover:cursor-pointer"
        ></img>
      </a>
      <p className="w-[675px] text-center text-xl leading-8 text-white">
        Random description here Random description here Random description here
        Random description here Random description here Random description here
        Random description here Random description here Random description here
        Random description here
      </p>
    </div>
  );
}
