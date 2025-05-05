import { useState } from "react";

import InstagramIconWhite from "../../../../assets/images/instagram-white.svg";
import TikTokIconWhite from "../../../../assets/images/tiktok-white.svg";

import "./SocialMediaLinks_Style.css";

function TikTokLink() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex aspect-square h-[5rem] items-center justify-center">
      <a
        href="/"
        onMouseEnter={(event) => {
          event.stopPropagation();

          setIsHovered(true);
        }}
        onMouseLeave={(event) => {
          event.stopPropagation();

          setIsHovered(false);
        }}
        className="mx-2 p-1"
      >
        <img
          className={`aspect-square h-[3rem] ${isHovered ? "social-media-link-size-increase-transition" : ""}`}
          src={TikTokIconWhite}
        ></img>
      </a>
    </div>
  );
}

function InstagramLink() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex aspect-square h-[5rem] items-center justify-center">
      <a
        href="/"
        onMouseEnter={(event) => {
          event.stopPropagation();

          setIsHovered(true);
        }}
        onMouseLeave={(event) => {
          event.stopPropagation();

          setIsHovered(false);
        }}
        className="mx-2 p-1"
      >
        <img
          className={`aspect-square h-[3rem] ${isHovered ? "social-media-link-size-increase-transition" : ""}`}
          src={InstagramIconWhite}
        ></img>
      </a>
    </div>
  );
}

export function SocialMediaLinks() {
  return (
    <div className="flex items-center justify-center">
      <InstagramLink />
      <TikTokLink />
    </div>
  );
}
