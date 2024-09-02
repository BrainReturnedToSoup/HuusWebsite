import { useState, useEffect } from "react";

import loadImage from "../../../lib/loadImage";

import NavBar from "./nav-bar/NavBar";

import { NAV_BUTTONS } from "../../../enums/default/nav";

function FailedToLoadImage() {
  return <></>;
}

function LoadingImage() {
  return <></>;
}

interface HeaderProps {
  backdropImageClass: string;
  navButtons: typeof NAV_BUTTONS;
}

const fetchingImageDelayMs = 3000;
const pollingImageFetchDelayMs = 5000;

export default function DefaultHeader({
  backdropImageClass,
  navButtons,
}: HeaderProps) {
  const [fetchingImage, setFetchingImage] = useState(true);
  const [imageFetched, setImageFetched] = useState(false);
  const [imageFetchPromise, setImageFetchPromise] = useState(null);

  useEffect(() => {
    setFetchingImage(
      loadImage(``)
        .then(() => {
          
        })
        .catch(() => {

        }),
    );

    let imageFetchPolling: null | number = null; //the interval instance is a number ID representing the interval

    const imageFetchTimeout = setTimeout(() => {
      //basically if this executes, then the application assumes the image couldn't be fetched,
      //and thus it will keep trying to poll in the background without displaying the loading screen

      setFetchingImage(false);

      imageFetchPolling = setInterval(() => {
        //logic for continuous attempts at creating image objects that will try to resolve, which such only creates
        //new image objects for the fetch if the previous pending image fails.
      }, pollingImageFetchDelayMs);
    }, fetchingImageDelayMs);

    return () => {
      if (imageFetchTimeout) clearTimeout(imageFetchTimeout);
      if (imageFetchPolling) clearInterval(imageFetchPolling);
    };
  }, []);

  return (
    <header className={`${backdropImageClass} h-[765px] bg-black`}>
      <NavBar navButtons={navButtons} />
    </header>
  );
}
