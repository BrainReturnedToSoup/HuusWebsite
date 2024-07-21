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
  index: number;
}

export default function Offer({
  title,
  desc,
  bullets,
  price,
  redirect,
  index,
}: OfferProps) {
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
          <ul className="h-2/3 pl-4 text-xl lg:text-2xl">
            {bullets.map((bullet) => {
              return <li className="lato-medium my-2 list-disc">{bullet}</li>;
            })}
          </ul>
          <div className="flex h-1/3 w-full items-center justify-end">
            <label
              htmlFor={`pricing-mobile-container-${index}`}
              className="lato-medium text-xl underline hover:cursor-pointer lg:text-2xl"
            >
              Details
            </label>
          </div>
        </div>
      </div>
    </a>
  );
}
