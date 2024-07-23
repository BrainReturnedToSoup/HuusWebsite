import SocialMediaLink from "./SocialMediaLink";

import instagramIconWhite from "../../../../../assets/instagram-white.svg";
import tiktokIconWhite from "../../../../../assets/tiktok-white.svg";
import youtubeIconWhite from "../../../../../assets/youtube-white.svg";

const socialMediaLinks = [
  { icon: instagramIconWhite, link: "" },
  { icon: tiktokIconWhite, link: "" },
  { icon: youtubeIconWhite, link: "" },
];

export default function Tablet() {
  return (
    <div className="flex h-full w-1/3 flex-col bg-black p-4">
      <div className="mb-6 flex w-full items-center">
        <img alt="website logo" className="text-white"></img>
      </div>
      <div className="mb-6 flex w-full items-center justify-center">
        <h3 className=" text-white ">
          Paving the way for no BS fitness guidance and personal training
        </h3>
      </div>
      <div className="w-full">
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
