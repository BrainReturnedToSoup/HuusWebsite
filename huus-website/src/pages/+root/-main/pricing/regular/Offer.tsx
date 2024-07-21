import { useState } from "react";

import "../../../../../App.css";

interface OfferProps {
  title: string;
  desc: string;
  bullets: Array<string>;
  price: number;
  redirect: {
    route: string;
    positionY: number;
  };
}

export default function Offer({
  title,
  desc,
  bullets,
  price,
  redirect,
}: OfferProps) {
  const [isHovered, setHoveredState] = useState(false);

  function handleMouseEnter() {
    setHoveredState(true);
  }

  function handleMouseLeave() {
    setHoveredState(false);
  }

  return (
    <div className="flex h-full w-full items-end justify-center">
      <div
        className={`pricing-offer-content-grid-rows grid h-full w-full border-x-2 border-black`}
      >
        <div className="flex items-center justify-start bg-black px-10">
          <h2 className={`lato-bold text-xl text-white`}>{title}</h2>
        </div>
        <div className="px-10 pb-2 pt-3">
          <p className="lato-medium text-sm">{desc}</p>
        </div>
        <div className="flex items-center justify-start px-10 py-2">
          <h3 className="lato-bold text-5xl">${price}</h3>
        </div>
        <div className="px-10 py-4">
          <ul className="list-disc px-4">
            {bullets.map((bullet) => {
              return <li className="lato-medium mb-2">{bullet}</li>;
            })}
          </ul>
        </div>
        <a
          className={`flex items-center justify-end px-10 py-2 transition-colors duration-300 hover:cursor-pointer ${isHovered && "bg-black"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={redirect.route}
        >
          <div className="flex hover:cursor-pointer">
            <label
              className={`lato-medium underline transition-colors duration-300 hover:cursor-pointer ${isHovered && "text-white"}`}
            >
              Details
            </label>
          </div>
        </a>
      </div>
    </div>
  );
}
