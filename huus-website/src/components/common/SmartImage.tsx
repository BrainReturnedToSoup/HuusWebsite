import { useState, useEffect } from "react";

import loadImage from "../../lib/loadImage";

interface SmartImageProps {
  src: string;
  alt: string;
  classString: string;
  timeoutDelay: number;
  intervalDelay: number;
  setInitialFetching: (state: boolean) => void;
  setHasFailed: (state: boolean) => void;
}

//the idea behind this component is to handle all of the complexities of image load failures, and to retry in the background.
//this component expects apis to alter the state of its parent component, and thus the parent component can decide what to render
//if for instance the image failed to load. Thus, even if the loading looks to be a complete failure, the background retries may eventually
//fix such, and the parent will then render the image that has then arrives instead of fallbacks.

//Basically the state transitions as follows:
// step 1   : initial promise for fetching the image is sent, as well as initializing the initial timeout to execute based on the supplied delay
// step 2 a : if the initial promise resolves, then the returned image source is supplied to the imageSrc state for display, as well as context
//            memorization across component refreshes. Any timeouts or intervals creates are cleared and set to undefined.
// step 2 b : if either the initial promise instantly rejects, or if the timeout executes while the initial promise is still pending, this
//            sets up the interval that will essentially 'poll' to see if it needs to create another retry promise or not.
// step 3   : The polling thus creates retry promises, and does so without making redundant promises, all until the image fetch resolves.

//the point of the setters as props is to manipulate the necessary state of the parent so that the parent will deal with things like 'loading'
//or 'failed to load image'

export default function SmartImage({
  src,
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
        if (fetchPromise) return; //don't create a new promise until the old one is completed in some way

        const loadImagePromise = loadImage(src)
          .then((src) => {
            //The only thing left at this point is the retry interval, which if this executes, means the retry was a success.
            clearInterval(retryInterval);
            setHasFailed(false);
            setImageSrc(src);
            retryInterval = undefined; // prevent mem leak after clear
          })
          .catch((code) =>
            console.error(`Failed to load image ${src} : code ${code}`),
          )
          .finally(() => {
            setFetchPromise(null);
          });

        setFetchPromise(loadImagePromise);
      }, intervalDelay);
    }

    //timeout that represents the 'loading' interval, which will be either early cleared if the image loads within
    //the timeout delay span, or it will be executed in order to allocate the retry interval that will continue to create
    //image fetch promises.
    initialTimeout = setTimeout(() => {
      //at this point, it means the original promise has not resolved nor rejected, but regardless, define the retry interval in the meantime.
      //The retry interval will take note of the pending original promise, and decide to create a new 'retry' request if such rejects.
      setInitialFetching(false);
      setHasFailed(true);

      createRetryInterval();

      initialTimeout = undefined;
      // ^^^ necessary because the return of a timeout creation is a simple number representing the timeout ID. undefined is the only
      //other valid argument you can supply to clearTimeout
    }, timeoutDelay);

    //the first initial attempt at loading the image, which is saved to the fetch promise store in order to
    //prevent the interval from making redundant fetch requests when an existing request is pending potentially.
    const loadImageInitial = loadImage(src)
      .then((src) => {
        //vvv IDEMPOTENT
        clearTimeout(initialTimeout); //in the case the original promise resolves, but after the setTimeout has executed.
        clearInterval(retryInterval); //in the case the original promise resolves, but after the retry interval was declared

        retryInterval = undefined; // prevent mem leak after clear just in case

        setImageSrc(src);
      })
      .catch((code) => {
        console.error(`Failed to load image ${src} : code ${code}`);

        if (!initialTimeout) return; //means the timeout already executed, so there isn't a need to do anything else.

        //at this point, it means the fetch failed before the timeout executed, which
        //means switching directly to the interval rather than waiting for the timeout to fire.
        clearTimeout(initialTimeout);

        setHasFailed(true);

        createRetryInterval();
      })
      .finally(() => {
        setInitialFetching(false);

        setFetchPromise(null);

        initialTimeout = undefined; // prevent mem leak after clear
      });

    //needs to be set as the original promise so the interval does not create redundant promises
    //if the first promise has not resolves by the time the interval fires.
    setFetchPromise(loadImageInitial);

    //clean up any existing timeouts or intervals when unmounting this component
    return () => {
      //vvv IDEMPOTENT
      clearTimeout(initialTimeout);
      clearInterval(retryInterval);

      initialTimeout = undefined;
      retryInterval = undefined;
    };
  }, []);

  return imageSrc ? (
    <img className={classString} src={imageSrc} alt={alt} />
  ) : (
    <></>
  );
}
