import arrowRightBlack from "../../../../../assets/arrow-right-black.svg";

import "../../../../../App.css";

export default function Phone() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-black py-[50px]">
      <h2 className="lato-medium mb-2 text-center text-4xl text-white">
        Like what you see?
      </h2>
      <h3
        className={`lato-bold mb-4 flex items-center justify-center py-1 pl-4 pr-2 text-center text-xl text-white hover:cursor-pointer`}
      >
        Schedule a consultation today!
      </h3>
      <a
        id="call-to-action-redirect"
        className="flex h-[45px] items-center justify-center bg-white pl-4 pr-3 hover:cursor-pointer"
        href="/contact"
      >
        <label
          htmlFor="call-to-action-redirect"
          className="lato-medium mr-1 text-xl hover:cursor-pointer"
        >
          Schedule
        </label>
        <img
          alt="arrow right"
          src={arrowRightBlack}
          className="aspect-square h-[32px] hover:cursor-pointer"
        ></img>
      </a>
    </div>
  );
}
