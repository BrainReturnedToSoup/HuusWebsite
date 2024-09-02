import { useState, useEffect } from "react";

import loadImage from "../../lib/loadImage";

interface SmartImageProps {
  url: string;
  alt: string;
  classString: string;
  timeoutDelay: number;
  intervalDelay: number;
  setInitialFetching: (flag: boolean) => void;
  setHasFailed: (flag: boolean) => void;
}

//the idea behind this component is to handle all of the complexities of image load failures, and to retry in the background.
//this component expects apis to alter the state of its parent component, and thus the parent component can decide what to render
//if for instance the image failed to load. Thus, even if the loading looks to be a complete failure, the background retries may eventually
//fix such, and the parent will then render the image that has then arrives instead of fallbacks.

export default function SmartImage({
  url,
  alt,
  classString,
  timeoutDelay,
  intervalDelay,
  setInitialFetching, //for setting a flag in a parent component for conditional rendering
  setHasFailed, //for setting a flag in a parent component for conditional rendering
}: SmartImageProps) {
  const [fetchPromise, setFetchPromise] = useState<Promise<void> | null>(null); //the promise representing the current fetching attempt from 'loadImage'
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    let retryInterval: ReturnType<typeof setInterval> | undefined;
    let initialTimeout: ReturnType<typeof setTimeout> | undefined;

    function createRetryInterval() {
      retryInterval = setInterval(() => {
        if (fetchPromise) return;

        const loadImagePromiseInterval = loadImage(url)
          .then((src) => {
            //The only thing left at this point is the retry interval, which if this executes, means the retry was a success.
            clearInterval(retryInterval);
            setHasFailed(false);
            setImageSrc(src);
          })
          .catch((code) =>
            console.error(`Failed to load image ${url} : code ${code}`),
          )
          .finally(() => {
            setFetchPromise(null);
          });

        setFetchPromise(loadImagePromiseInterval);
      }, intervalDelay);
    }

    //timeout that represents the 'loading' interval, which will be either early cleared if the image loads within
    //the timeout delay span, or it will be executed in order to allocate the retry interval that will continue to create
    //image fetch promises.
    initialTimeout = setTimeout(() => {
      //at this point, it means the original promise has not resolved nor rejected, but regardless, define the retry interval in the meantime.
      //The retry interval will take note of the pending original promise, and decide to create a new 'retry' request if such rejects.
      setInitialFetching(false);
      createRetryInterval();

      //necessary because the return of a timeout creation is a simple number representing the timeout ID. undefined is the only
      //other valid argument you can supply to clearTimeout
      initialTimeout = undefined;
    }, timeoutDelay);

    //the first initial attempt at loading the image, which is saved to the fetch promise store in order to
    //prevent the interval from making redundant fetch requests when an existing request is pending potentially.
    const loadImageInitial = loadImage(url)
      .then((src) => {
        //vvv IDEMPOTENT
        clearTimeout(initialTimeout); //in the case the original promise resolves, but after the setTimeout has executed.
        clearInterval(retryInterval); //in the case the original promise resolves, but after the retry interval was declared

        setInitialFetching(false); //relevant largely to the first promise only, since this is a flag for rendering things like loading.
        setImageSrc(src);
      })
      .catch((code) => {
        console.error(`Failed to load image ${url} : code ${code}`);

        if (!initialTimeout) return; //means the timeout already executed, so there isn't a need to do anything else.

        //at this point, it means the fetch failed before the timeout executed, which means switching directly to the interval rather than
        //waiting for the timeout to fire.
        clearTimeout(initialTimeout);
        setInitialFetching(false);
        setHasFailed(true);
        createRetryInterval();
      })
      .finally(() => {
        setFetchPromise(null);
      });

    //needs to be set as the original promise so the interval does not create redundant promises
    //if the first promise has not resolves by the time the interval fires.
    setFetchPromise(loadImageInitial);

    //clean up any existing timeouts or intervals when unmounting this component
    return () => {
      //vvv IDEMPOTENT
      clearTimeout(initialTimeout);
      clearInterval(retryInterval);
    };
  }, []);

  return imageSrc ? (
    <img className={classString} src={imageSrc} alt={alt} />
  ) : (
    <></>
  );
}
