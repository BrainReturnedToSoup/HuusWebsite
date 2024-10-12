import { useState } from "react";

function PricingBox({ price, quantifier, setEnquireHovered, enquireRedirect }) {
  return (
    <div className="relative min-w-[350px] border-l-2 border-neutral-300 px-4">
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex">
          <h1 className="lato-bold mb-4 text-center text-6xl">{price}</h1>
          <h2 className="lato-bold pl-2 pt-1 text-sm">{quantifier}</h2>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end ">
        <button
          onMouseOver={() => {
            setEnquireHovered(true);
          }}
          onMouseLeave={() => {
            setEnquireHovered(false);
          }}
          onClick={enquireRedirect}
          className="lato-bold w-fit self-end px-2 py-1 border-t-2 border-b-2 border-neutral-300"
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

function Keywords({ words, enquireHovered }) {
  return (
    <div className="mb-5 flex items-center">
      {words.map((word, index) => {
        let classString = "px-2 text-sm lato-bold";

        if (index !== words.length - 1) {
          classString += " border-r-2 border-neutral-300";
        }

        return <h2 className={classString}>{word}</h2>;
      })}
    </div>
  );
}

function ServiceRow({
  title,
  keywords,
  description,
  price,
  quantifier,
  enquireRedirect,
}) {
  const [enquireHovered, setEnquireHovered] = useState(false);

  return (
    <div className="my-14 flex px-2">
      <div className="mr-4 flex grow flex-col justify-center px-4 py-2">
        <h1 className="lato-bold mb-3 text-xl">{title}</h1>
        <Keywords words={keywords} enquireHovered={enquireHovered} />
        <p className="lato-medium mb-4 leading-relaxed">{description}</p>
      </div>
      <PricingBox
        price={price}
        quantifier={quantifier}
        setEnquireHovered={setEnquireHovered}
        enquireRedirect={enquireRedirect}
      />
    </div>
  );
}

// bundles of the above options that are cheaper, but require some commitment.
function Bundles() {
  return (
    <div className="w-full py-14">
      <h1 className="lato-bold text-3xl">Bundles</h1>
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
        enquireRedirect={() => {}}
      />
    </div>
  );
}

function Base() {
  return (
    <div className="w-full border-b-2 border-neutral-300 py-14">
      <h1 className="lato-bold text-3xl">Base services</h1>
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
        enquireRedirect={() => {}}
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
        enquireRedirect={() => {}}
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
        enquireRedirect={() => {}}
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
