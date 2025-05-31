import { useState } from "react";

import { PricingProps_Interface } from "./Pricing_Interface";
import { useDispatch } from "react-redux";
import { contactFormSliceActions } from "../../../../../../../../state/react-redux/slices/contact-form/contactForm";
import { useNavigate } from "react-router-dom";

function Pricing({
  offeringId,
  price,
  priceQuantifier,

  navigateToOnEnquire,
  setIsEnquireHovered,
}: PricingProps_Interface) {
  const [isEnquireHoveredLocal, setIsEnquireHoveredLocal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function enquireOnClick(e: React.SyntheticEvent) {
    e.stopPropagation();

    dispatch(contactFormSliceActions.setServiceSelection(offeringId));
    navigate(navigateToOnEnquire);
  }

  return (
    <div className="relative min-h-[150px] min-w-[350px] border-neutral-400 px-4 md:border-l-[1px]">
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex">
          <h1
            className={`default-font-bold mb-4 text-center text-6xl transition-colors duration-150 ease-in-out ${isEnquireHoveredLocal ? "text-white" : ""}`}
          >
            {price}
          </h1>
          <h2
            className={`default-font-bold pl-2 pt-1 text-sm transition-colors duration-150 ease-in-out ${isEnquireHoveredLocal ? "text-white" : ""}`}
          >
            {priceQuantifier}
          </h2>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end">
        <a
          onMouseOver={() => {
            setIsEnquireHoveredLocal(true);
            setIsEnquireHovered(true);
          }}
          onMouseLeave={() => {
            setIsEnquireHoveredLocal(false);
            setIsEnquireHovered(false);
          }}
          onClick={enquireOnClick}
          className={`default-font-bold w-fit self-end border-r-[1px] border-r-neutral-400 px-2 py-1 underline decoration-transparent transition-colors duration-150 ease-in-out hover:border-r-white hover:text-white hover:decoration-white`}
        >
          Enquire
        </a>
      </div>
    </div>
  );
}

export { Pricing };
