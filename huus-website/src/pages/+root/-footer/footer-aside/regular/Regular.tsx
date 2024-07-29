import SocialMediaLink from "./SocialMediaLink";

import instagramIconWhite from "../../../../../assets/instagram-white.svg";
import tiktokIconWhite from "../../../../../assets/tiktok-white.svg";
import youtubeIconWhite from "../../../../../assets/youtube-white.svg";

const socialMediaLinks = [
  { icon: instagramIconWhite, link: "" },
  { icon: tiktokIconWhite, link: "" },
  { icon: youtubeIconWhite, link: "" },
];

export default function Regular() {
  return (
    <div className="h-full w-1/3 bg-black p-8 px-12">
      <div className="flex h-[75px] w-full items-center">
        <img alt="website logo" className="text-white"></img>
      </div>
      <div className="flex h-[75px] w-full items-center">
        <h3 className="w-4/5 text-white">
          Paving the way for no BS fitness guidance and personal training
        </h3>
      </div>
      <div className="flex h-[75px] w-full items-center text-white">
        <ul className="flex w-full items-center justify-around border-t-2 border-white pt-4">
          {socialMediaLinks.map((linkObj) => {
            return (
              <li className="h-[36px] w-[36px]">
                <SocialMediaLink icon={linkObj.icon} link={linkObj.link} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
