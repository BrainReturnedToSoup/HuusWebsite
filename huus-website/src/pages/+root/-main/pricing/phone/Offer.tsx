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
    <div className="w-full p-4">
      <a
        className="aspect-square w-full"
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
    </div>
  );
}
