// import { useState } from "react";

import { FeatureImageProps_Interface } from "./FeatureImage_Interface";

function FeatureImage({
  title,
  backgroundImage,
  imageAlt,
}: FeatureImageProps_Interface) {
  // const [initialFetching, setInitialFetching] = useState(true);
  // const [hasFailed, setHasFailed] = useState(false);

  return (
    <div className="relative mb-2 flex aspect-square flex-col sm:min-w-[275px] lg:min-w-[330px]">
      <h1 className="default-font-bold z-10 flex w-full items-center justify-center bg-black bg-opacity-90 p-4 text-3xl text-white sm:p-2 sm:text-2xl">
        {title}
      </h1>

      {/* {initialFetching ? (
        <div className="text-white underline">fetching</div>
      ) : null}

      {!initialFetching && hasFailed ? (
        <div className="text-white underline">failed</div>
      ) : null} */}

      {
        // TODO: the smart image component below stays mounted regardless of success or failure, but will
        // return an empty fragment if either of the states above are valid.
      }

      <div className="absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center">
        <img
          src={backgroundImage}
          className="default-font-regular z-10 h-full w-full object-cover"
          alt={imageAlt}
        ></img>
      </div>
    </div>
  );
}

export { FeatureImage };
