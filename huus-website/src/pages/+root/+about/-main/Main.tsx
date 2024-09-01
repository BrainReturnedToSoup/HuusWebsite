import { useState } from "react";

import Summary from "./summary/Summary";
import Selfie from "./selfie/Selfie";
import Details from "./details/Details";

export default function Main() {
  const [selfieLoaded, setSelfieLoaded] = useState(false);

  return (
    <main className="flex items-center justify-center px-4">
      <div className="max-w-[875px] grow px-10 py-14">
        <div className="space-around flex items-center justify-center border-b-2 border-neutral-300 pb-14">
          <Selfie setSelfieLoaded={setSelfieLoaded} />
          <Summary />
        </div>
        <Details />
      </div>
    </main>
  );
}
