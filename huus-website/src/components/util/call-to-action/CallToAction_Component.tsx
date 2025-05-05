import { useState } from "react";

import { CallToActionProps_Interface } from "./CallToAction_Interface";

function CallToAction({
  title,
  desc,
  redirectCallback,
  redirectButtonText,
}: CallToActionProps_Interface) {
  const [redirectHovered, setRedirectHovered] = useState(false);

  return (
    <div className="flex items-center justify-center py-14 lg:py-20">
      <div className="flex h-full max-w-[760px] flex-col items-center justify-center px-4">
        <h1 className="default-font-bold  mb-6 text-pretty text-center text-4xl">
          {title}
        </h1>
        <p className="default-font-regular mb-12 text-pretty text-center text-xl leading-relaxed">
          {desc}
        </p>
        <button
          onClick={redirectCallback}
          onMouseOver={() => {
            setRedirectHovered(true);
          }}
          onMouseLeave={() => {
            setRedirectHovered(false);
          }}
          className={`default-font-bold border-y-[1px] px-3 py-2 text-2xl transition-colors duration-150 ease-in-out ${redirectHovered ? "border-white bg-black text-white" : "border-neutral-400"}`}
        >
          {redirectButtonText}
        </button>
      </div>
    </div>
  );
}

export { CallToAction };
