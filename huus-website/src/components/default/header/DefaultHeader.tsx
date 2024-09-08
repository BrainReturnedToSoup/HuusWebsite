import { useState } from "react";

import NavBar from "./nav-bar/NavBar";
import SmartImage from "../../common/SmartImage";

import { NAV_BUTTONS } from "../../../enums/default/nav";

function FailedToLoadImage() {
  return <div>
    
  </div>;
}

function LoadingImage() {
  return <div>

  </div>;
}

interface HeaderProps {
  backdropImageClass: string;
  navButtons: typeof NAV_BUTTONS;
}

export default function DefaultHeader({
  backdropImageClass,
  navButtons,
}: HeaderProps) {
  const [initialImageFetching, setInitialFetching] = useState(true);
  const [imageFetchFailed, setHasFailed] = useState(false);

  return (
    <header className={`${backdropImageClass} h-[765px] bg-black`}>
      <NavBar navButtons={navButtons} />
      <SmartImage
        url={""}
        alt={""}
        classString={""}
        timeoutDelay={3000}
        intervalDelay={5000}
        setInitialFetching={setInitialFetching}
        setHasFailed={setHasFailed}
      />

      {initialImageFetching ? <LoadingImage /> : null}
      {!initialImageFetching && imageFetchFailed ? <FailedToLoadImage /> : null}
    </header>
  );
}
