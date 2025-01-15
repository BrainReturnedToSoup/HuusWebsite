import { useState } from "react";

interface DefaultCallToActionProps {
  title: string;
  desc: string;
  redirectCallback: () => void;
  redirectButtonText: string;
}

export default function DefaultCallToAction({
  title,
  desc,
  redirectCallback,
  redirectButtonText,
}: DefaultCallToActionProps) {
  const [redirectHovered, setRedirectHovered] = useState(false);

  return (
    <div className="flex items-center justify-center py-14 lg:py-20">
      <div className="flex h-full max-w-[760px] flex-col items-center justify-center px-4">
        <h1 className="lato-bold mb-6 text-pretty text-center text-4xl">
          {title}
        </h1>
        <p className="lato-medium mb-12 text-pretty text-center text-xl leading-loose">
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
          className={`lato-medium border-y-2 px-2 py-1 text-2xl transition-colors duration-150 ease-in-out ${redirectHovered ? "border-white bg-black text-white" : "border-neutral-300"}`}
        >
          {redirectButtonText}
        </button>
      </div>
    </div>
  );
}
