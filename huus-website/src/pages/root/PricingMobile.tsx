import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import "../../App.css";

interface OfferMobileProps {
  title: string;
  desc: string;
  bullets: Array<string>;
  price: number;
  redirect: {
    route: string;
    positionY: number;
  };
  index: number;
}

const offers = [
  {
    title: "Example 1",
    desc: "Description 1",
    bullets: ["bullet 1", " bullet 2", "bullet 3"],
    price: 3.99,
    redirect: {
      route: "/about",
      positionY: 0,
    },
  },
  {
    title: "Example 2",
    desc: "Description 2",
    bullets: ["bullet 1", " bullet 2", "bullet 3"],
    price: 17.99,
    redirect: {
      route: "/about",
      positionY: 0,
    },
  },
  {
    title: "Example 3",
    desc: "Description 3",
    bullets: ["bullet 1", " bullet 2", "bullet 3"],
    price: 24.99,
    redirect: {
      route: "/about",
      positionY: 0,
    },
  },
];

function OfferTablet({
  title,
  desc,
  bullets,
  price,
  redirect,
  index,
}: OfferMobileProps) {
  return (
    <a
      href={redirect.route}
      id={`pricing-mobile-container-${index}`}
      className="my-2 w-full"
    >
      <div className="pricing-mobile-tablet-container-grid grid h-full border-b-2 border-t-2 border-black">
        <div className="pricing-mobile-tablet-black-subcontainer-grid grid aspect-square bg-black p-4">
          <h2 className="lato-medium flex items-center justify-center text-3xl text-white lg:text-4xl">
            {title}
          </h2>
          <h3 className="lato-bold flex items-center justify-center text-6xl text-white lg:text-7xl">
            ${price}
          </h3>
          <p className="lato-medium p-2 text-center text-xl text-white lg:text-2xl">
            {desc}
          </p>
        </div>
        <div className="px-10 py-4">
          <ul className="h-5/6 pl-4 text-xl lg:text-2xl">
            {bullets.map((bullet) => {
              return <li className="lato-medium my-2 list-disc">{bullet}</li>;
            })}
          </ul>
          <div className="flex h-1/6 w-full items-center justify-end">
            <label
              htmlFor={`pricing-mobile-container-${index}`}
              className="lato-medium text-xl underline lg:text-2xl"
            >
              Details
            </label>
          </div>
        </div>
      </div>
    </a>
  );
}

function OfferPhone({
  title,
  desc,
  bullets,
  price,
  redirect,
  index,
}: OfferMobileProps) {
  return (
    <a
      className="my-4 aspect-square w-full"
      id={`pricing-mobile-container-${index}`}
      href={redirect.route}
    >
      <div className="pricing-mobile-phone-container-grid grid h-full border-2 border-black">
        <div className="flex items-center justify-start bg-black px-8 py-2">
          <h2 className="lato-medium text-3xl text-white">{title}</h2>
        </div>
        <div className="px-8 py-4">
          <p className="lato-medium">{desc}</p>
        </div>
        <div className="flex items-center justify-start px-8 py-2">
          <h3 className="lato-bold text-6xl">${price}</h3>
        </div>
        <div className="pb-2 pl-12 pr-4 pt-4">
          <ul className="lato-medium list-disc text-xl">
            {bullets.map((bullet) => {
              return <li className="m-2">{bullet}</li>;
            })}
          </ul>
        </div>
        <div className="flex items-center justify-end py-4 pr-6">
          <label
            className="lato-medium text-xl underline hover:cursor-pointer"
            htmlFor={`pricing-mobile-container-${index}`}
          >
            Details
          </label>
        </div>
      </div>
    </a>
  );
}

function Offer({
  title,
  desc,
  bullets,
  price,
  redirect,
  index,
}: OfferMobileProps) {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <>
      {screenWidth >= 640 ? (
        <OfferTablet
          title={title}
          desc={desc}
          bullets={bullets}
          price={price}
          redirect={redirect}
          index={index}
        />
      ) : (
        <OfferPhone
          title={title}
          desc={desc}
          bullets={bullets}
          price={price}
          redirect={redirect}
          index={index}
        />
      )}
    </>
  );
}

export default function PricingMobile() {
  return (
    <div className="mt-20">
      <div className="mb-6 flex flex-col items-center justify-center px-4 sm:px-12">
        <h2 className="lato-bold mb-2">Features</h2>
        <h3 className="lato-medium mb-6 text-center text-4xl">
          Get Fit with Confidence!
        </h3>
        <p className="lato-medium mb-4 w-full text-center leading-loose sm:text-xl">
          We've all been there-feeling lost, unsure of technique, worried about
          being judged, and having trouble actually 'sticking with it'. But what
          if getting fit could be fun, supportive, and guaranteed to bring
          results? Well you're in luck, that's exactly what we offer!
        </p>
      </div>
      <div className={`flex w-full flex-col items-center py-2`}>
        {offers.map((offer, index) => {
          return (
            <Offer
              title={offer.title}
              desc={offer.desc}
              bullets={offer.bullets}
              price={offer.price}
              redirect={offer.redirect}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
