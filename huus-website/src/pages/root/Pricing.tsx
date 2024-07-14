import { useState } from "react";

import "../../App.css";

interface OfferProps {
  title: string;
  desc: string;
  bullets: Array<string>;
  price: number;
  styling: { heightRatio: string; marginBottom: string };
}

const offers = [
  {
    title: "Example 1",
    desc: "Description 1",
    bullets: ["bullet 1", " bullet 2", "bullet 3"],
    price: 3.99,
    styling: { heightRatio: "full", marginBottom: "4" },
  },
  {
    title: "Example 2",
    desc: "Description 2",
    bullets: ["bullet 1", " bullet 2", "bullet 3"],
    price: 17.99,
    styling: { heightRatio: "full", marginBottom: "0" },
  },
  {
    title: "Example 3",
    desc: "Description 3",
    bullets: ["bullet 1", " bullet 2", "bullet 3"],
    price: 24.99,
    styling: { heightRatio: "full", marginBottom: "4" },
  },
];

function Offer({ title, desc, bullets, price, styling }: OfferProps) {
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
        className={`w-full h-${styling.heightRatio} mb-${styling.marginBottom} pricing-offer-content-grid-rows grid border-x-2 border-black`}
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
          href="/services"
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
    <div className="flex h-[1050px] flex-col items-center">
      <div className="mb-8 flex flex-col items-center px-6 py-4 pt-40 md:px-10 lg:w-[850px] lg:px-14">
        <h2 className="lato-bold mb-4 text-xl">Features</h2>
        <h3 className="lato-medium mb-10 text-6xl">Get Fit with Confidence!</h3>
        <p className="lato-medium mb-4 w-full text-center text-xl leading-loose">
          We've all been there-feeling lost, unsure of technique, worried about
          being judged, and having trouble actually 'sticking with it'. But what
          if getting fit could be fun, supportive, and guaranteed to bring
          results? Well you're in luck, that's exactly what we offer!
        </p>
      </div>
      <div className="flex h-[500px] w-full items-center justify-center py-4 lg:px-10">
        <div
          className={`grid h-full grid-rows-1 md:w-[1024px] grid-cols-${offers.length} gap-2`}
        >
          {offers.map((offer, index) => {
            return (
              <Offer
                title={offer.title}
                desc={offer.desc}
                bullets={offer.bullets}
                price={offer.price}
                styling={offer.styling}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
