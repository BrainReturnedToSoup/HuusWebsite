import { useState } from "react";

import Summary from "./summary/Summary";
import Selfie from "./selfie/Selfie";
import Details from "./details/Details";

export default function Main() {
  const [selfieInitialFetching, setSelfieInitialFetching] = useState(true);
  const [selfieFetchHasFailed, setSelfieFetchHasFailed] = useState(false);

  return (
    <main className="flex items-center justify-center px-4 py-4 md:py-14">
      <div className="max-w-[875px] grow px-4 py-14">
        <div className="flex flex-col items-center justify-center border-b-2 border-neutral-300 px-2 py-4 pb-14 md:flex-row">
          <Selfie
            setSelfieInitialFetching={setSelfieInitialFetching}
            setSelfieFetchHasFailed={setSelfieFetchHasFailed}
          />
          <Summary />
        </div>
        <Details />
      </div>
    </main>
  );
}
