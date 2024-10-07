import { useState } from "react";

function PricingBox({ price, quantifier, hovered }) {
  return (
    <div className="flex min-w-[350px] flex-col items-center justify-center border-l-2 border-neutral-300">
      <div className="px-4">
        <div className="flex">
          <h1 className="lato-bold mb-4 text-center text-6xl">{price}</h1>
          <h2 className="lato-bold pl-2 pt-1 text-sm">{quantifier}</h2>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({
  title,
  keywords,
  description,
  price,
  quantifier,
  redirectContact,
}) {
  const [enquireHovered, setEnquireHovered] = useState(false);

  return (
    <div className="my-8 flex py-6">
      <div className="mr-4 flex grow flex-col justify-center p-4">
        <h1 className="lato-bold mb-3 text-2xl">{title}</h1>
        <div className="mb-5 flex items-center">
          {keywords.map((word, index) => {
            let classString = "px-2 text-sm lato-bold";

            if (index !== keywords.length - 1) {
              classString += " border-r-2 border-neutral-300";
            }

            return <h2 className={classString}>{word}</h2>;
          })}
        </div>
        <p className="lato-medium mb-4 leading-relaxed">{description}</p>
        <button
          onMouseOver={() => {
            setEnquireHovered(true);
          }}
          onMouseLeave={() => {
            setEnquireHovered(false);
          }}
          onClick={redirectContact}
          className="lato-bold w-fit px-4 py-2 underline"
        >
          Enquire
        </button>
      </div>
      <PricingBox
        price={price}
        quantifier={quantifier}
        hovered={enquireHovered}
      />
    </div>
  );
}

// bundles of the above options that are cheaper, but require some commitment.
function Bundles() {
  return (
    <div className="w-full py-14">
      <h1 className="lato-bold text-center text-2xl underline">Bundles</h1>
      <ServiceRow
        title={"Random Bundle"}
        keywords={["Intermediate", "End-to-end", "Commitment"]}
        description={`Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`}
        price={"$159.99"}
        quantifier={"Per bundle"}
        redirectContact={() => {}}
      />
    </div>
  );
}

function Base() {
  return (
    <div className="w-full border-b-2 border-neutral-300 py-14">
      <h1 className="lato-bold text-center text-2xl underline">
        Base services
      </h1>
      <ServiceRow
        title={"Random Service"}
        keywords={["Beginner", "Zero-commitment"]}
        description={`Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`}
        price={"$24.99"}
        quantifier={"Per session"}
        redirectContact={() => {}}
      />
      <ServiceRow
        title={"Random Service"}
        keywords={["Beginner", "Zero-commitment"]}
        description={`Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`}
        price={"$24.99"}
        quantifier={"Per session"}
        redirectContact={() => {}}
      />
      <ServiceRow
        title={"Random Service"}
        keywords={["Beginner", "Zero-commitment"]}
        description={`Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`}
        price={"$24.99"}
        quantifier={"Per session"}
        redirectContact={() => {}}
      />
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Bundles />
      <Base />
    </>
  );
}
