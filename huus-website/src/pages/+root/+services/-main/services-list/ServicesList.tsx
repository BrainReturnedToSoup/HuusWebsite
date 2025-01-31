import { useState } from "react";

interface PricingBoxProps {
  price: string;
  quantifier: string;
  setEnquireHovered: (bool: boolean) => void;
  enquireRedirect: () => void;
}

function PricingBox({
  price,
  quantifier,
  setEnquireHovered,
  enquireRedirect,
}: PricingBoxProps) {
  const [localEnquireHovered, setLocalEnquireHovered] = useState(false);

  return (
    <div className="relative min-h-[150px] min-w-[350px] border-neutral-300 px-4 md:border-l-2">
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex">
          <h1
            className={`lato-bold mb-4 text-center text-6xl transition-colors duration-150 ease-in-out ${localEnquireHovered ? "text-white" : ""}`}
          >
            {price}
          </h1>
          <h2
            className={`lato-bold pl-2 pt-1 text-sm transition-colors duration-150 ease-in-out ${localEnquireHovered ? "text-white" : ""}`}
          >
            {quantifier}
          </h2>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end">
        <button
          onMouseOver={() => {
            setLocalEnquireHovered(true);
            setEnquireHovered(true);
          }}
          onMouseLeave={() => {
            setLocalEnquireHovered(false);
            setEnquireHovered(false);
          }}
          onClick={enquireRedirect}
          className={`lato-bold w-fit self-end border-b-2 border-t-2 px-2 py-1 transition-colors duration-150 ease-in-out ${localEnquireHovered ? "border-white text-white" : "border-neutral-300"}`}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

interface KeywordsProps {
  words: string[];
  enquireHovered: boolean;
}

function Keywords({ words, enquireHovered }: KeywordsProps) {
  return (
    <div className="mb-5 flex items-center">
      {words.map((word, index) => {
        let classString =
          "px-2 text-sm lato-bold transition-colors duration-150 ease-in-out";

        if (index !== words.length - 1) {
          classString += " border-r-2";

          if (enquireHovered) {
            classString += " border-white";
          } else {
            classString += " border-neutral-300";
          }
        }

        if (enquireHovered) {
          classString += " text-white";
        }

        return <h2 className={classString}>{word}</h2>;
      })}
    </div>
  );
}

interface ServiceRowProps {
  title: string;
  keywords: string[];
  description: string;
  price: string;
  quantifier: string;
  enquireRedirect: () => void;
}

function ServiceRow({
  title,
  keywords,
  description,
  price,
  quantifier,
  enquireRedirect,
}: ServiceRowProps) {
  const [enquireHovered, setEnquireHovered] = useState(false);

  return (
    <div
      className={`my-12 flex flex-col border-2 border-neutral-300 p-2 transition-colors duration-150 ease-in-out md:flex-row md:border-0 ${enquireHovered ? "bg-black" : ""}`}
    >
      <div className="mr-4 flex grow flex-col justify-center px-4 py-2">
        <h1
          className={`lato-bold mb-3 text-xl transition-colors duration-150 ease-in-out ${enquireHovered ? "text-white" : ""}`}
        >
          {title}
        </h1>
        <Keywords words={keywords} enquireHovered={enquireHovered} />
        <p
          className={`lato-medium mb-4 leading-loose transition-colors duration-150 ease-in-out ${enquireHovered ? "text-white" : ""}`}
        >
          {description}
        </p>
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

interface RowGroupProps {
  groupTitle: string;
  rows: ServiceRowProps[];
}

function RowGroup({ groupTitle, rows }: RowGroupProps) {
  return (
    <>
      <h1 className="lato-bold text-center text-4xl md:text-start md:text-3xl">
        {groupTitle}
      </h1>
      {rows.map(
        ({
          title,
          keywords,
          description,
          price,
          quantifier,
          enquireRedirect,
        }) => {
          return (
            <ServiceRow
              title={title}
              keywords={keywords}
              description={description}
              price={price}
              quantifier={quantifier}
              enquireRedirect={enquireRedirect}
            />
          );
        },
      )}
    </>
  );
}

// bundles of the above options that are cheaper, but require some commitment.
function ServiceBundles({ groupTitle, rows }: RowGroupProps) {
  return (
    <div className="w-full py-14">
      <RowGroup groupTitle={groupTitle} rows={rows} />
    </div>
  );
}

function BaseServices({ groupTitle, rows }: RowGroupProps) {
  return (
    <div className="mb-12 w-full py-14">
      <RowGroup groupTitle={groupTitle} rows={rows} />
    </div>
  );
}

const bundles = [
  {
    title: "Random Service",
    keywords: ["Intermediate", "End-to-end", "Commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per bundle",
    enquireRedirect: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Intermediate", "End-to-end", "Commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per bundle",
    enquireRedirect: () => {},
  },
];

const base = [
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireRedirect: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireRedirect: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireRedirect: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireRedirect: () => {},
  },
];

export default function ServicesList() {
  return (
    <>
      <ServiceBundles groupTitle={"Bundles"} rows={bundles} />
      <BaseServices groupTitle={"Base"} rows={base} />
    </>
  );
}
