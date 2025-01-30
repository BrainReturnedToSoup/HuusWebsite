import { useState } from "react";

import NavBar from "./nav-bar/NavBar";
import SmartImage from "../../util/SmartImage";

import { NAV_BUTTONS } from "../../../enums/default/nav";

function FailedToLoadImage() {
  return (
    <div>
      <p>failed to load image</p>
    </div>
  );
}

function LoadingImage() {
  return (
    <div>
      <p>loading</p>
    </div>
  );
}

interface HeaderProps {
  imageSrc: string;
  imageAlt: string;
  navButtons: typeof NAV_BUTTONS;
}

export default function DefaultHeader({
  imageSrc,
  imageAlt,
  navButtons,
}: HeaderProps) {
  const [initialImageFetching, setInitialFetching] = useState(true);
  const [imageFetchFailed, setHasFailed] = useState(false);

  return (
    <header className={`h-[765px] bg-black`}>
      {/*
      the entirety of the elements in the header have to be positioned either using relative or absolute properties
      to achieve proper layering behaviors when trying to stretch the image to be the same size as the header element itself. Hence, its why there
      is an immediate wrapper div within header, but not directly on the header itself.
    */}
      <div className="relative h-full w-full">
        <NavBar navButtons={navButtons} />
        <div className="absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center">
          <SmartImage
            src={imageSrc} //source to image
            alt={imageAlt}
            classString={"h-full w-full object-cover z-10"} //will be injected 'as is'
            timeoutDelay={3000}
            intervalDelay={5000}
            setInitialFetching={setInitialFetching}
            setHasFailed={setHasFailed}
          />
        </div>

        {initialImageFetching ? <LoadingImage /> : null}
        {!initialImageFetching && imageFetchFailed ? (
          <FailedToLoadImage />
        ) : null}
      </div>
    </header>
  );
}
