import { useState } from "react";

import { PricingProps_Interface } from "./Pricing_Interface";

function Pricing({
  price,
  quantifier,
  setIsEnquireHovered,
  enquireOnClick,
}: PricingProps_Interface) {
  const [isLocalEnquireHovered, setIsLocalEnquireHovered] = useState(false);

  return (
    <div className="relative min-h-[150px] min-w-[350px] border-neutral-400 px-4 md:border-l-[1px]">
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex">
          <h1
            className={`default-font-bold mb-4 text-center text-6xl transition-colors duration-150 ease-in-out ${isLocalEnquireHovered ? "text-white" : ""}`}
          >
            {price}
          </h1>
          <h2
            className={`default-font-bold pl-2 pt-1 text-sm transition-colors duration-150 ease-in-out ${isLocalEnquireHovered ? "text-white" : ""}`}
          >
            {quantifier}
          </h2>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end">
        <button
          onMouseOver={() => {
            setIsLocalEnquireHovered(true);
            setIsEnquireHovered(true);
          }}
          onMouseLeave={() => {
            setIsLocalEnquireHovered(false);
            setIsEnquireHovered(false);
          }}
          onClick={enquireOnClick}
          className={`default-font-bold w-fit self-end border-x-[1px] px-2 py-1 transition-colors duration-150 ease-in-out ${isLocalEnquireHovered ? "border-white text-white" : "border-neutral-400"}`}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

export { Pricing };
