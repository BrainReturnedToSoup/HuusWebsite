import { useState } from "react";

import { ServiceRowProps_Interface } from "./ServiceRow_Interface";

import { Keywords } from "./keywords/Keywords_Structural";
import { Pricing } from "./pricing/Pricing_Structural";

function ServiceRow({
  title,
  keywords,
  description,
  price,
  quantifier,
  enquireOnClick,
}: ServiceRowProps_Interface) {
  const [isEnquireHovered, setIsEnquireHovered] = useState(false);

  return (
    <div
      className={`my-12 flex flex-col border-[1px] border-neutral-400 p-2 transition-colors duration-150 ease-in-out md:flex-row md:border-0 ${isEnquireHovered ? "bg-black" : ""}`}
    >
      <div className="mr-4 flex grow flex-col justify-center px-4 py-2">
        <h1
          className={`default-font-bold mb-3 text-xl transition-colors duration-150 ease-in-out ${isEnquireHovered ? "text-white" : ""}`}
        >
          {title}
        </h1>
        <Keywords words={keywords} isEnquireHovered={isEnquireHovered} />
        <p
          className={`default-font-regular mb-4 leading-loose transition-colors duration-150 ease-in-out ${isEnquireHovered ? "text-white" : ""}`}
        >
          {description}
        </p>
      </div>

      <Pricing
        price={price}
        quantifier={quantifier}
        setIsEnquireHovered={setIsEnquireHovered}
        enquireOnClick={enquireOnClick}
      />
    </div>
  );
}

export { ServiceRow };
