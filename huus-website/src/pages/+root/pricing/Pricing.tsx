import { useState } from "react";

import { OFFER_LIST, SECTION_TITLE, SECTION_DESC } from "../../../enums/pricing";

import "../../../App.css";

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

function Offer({ title, desc, bullets, price, redirect }: OfferProps) {
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

export default function Pricing() {
  return (
    <div className="flex flex-col items-center pb-20">
      <div className="mb-8 flex flex-col items-center px-6 py-4 pt-40 md:px-10 lg:w-[850px] lg:px-14">
        <h2 className="lato-bold mb-4 text-xl">Features</h2>
        <h3 className="lato-medium mb-10 text-6xl">{SECTION_TITLE}</h3>
        <p className="lato-medium mb-4 w-full text-center text-xl leading-loose">
          {SECTION_DESC}
        </p>
      </div>
      <div className="flex h-[500px] w-full items-center justify-center py-4 lg:px-10">
        <div
          className={`grid h-full grid-rows-1 md:w-[1024px] grid-cols-${OFFER_LIST.length} gap-2`}
        >
          {OFFER_LIST.map((offer, index) => {
            return (
              <Offer
                title={offer.title}
                desc={offer.desc}
                bullets={offer.bullets}
                price={offer.price}
                redirect={offer.redirect}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
