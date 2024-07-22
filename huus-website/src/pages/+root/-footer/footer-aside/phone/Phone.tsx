import SocialMediaLink from "./SocialMediaLink";

import instagramIconWhite from "../../../../../assets/instagram-white.svg";
import tiktokIconWhite from "../../../../../assets/tiktok-white.svg";
import youtubeIconWhite from "../../../../../assets/youtube-white.svg";

const socialMediaLinks = [
  { icon: instagramIconWhite, link: "" },
  { icon: tiktokIconWhite, link: "" },
  { icon: youtubeIconWhite, link: "" },
];

export default function Phone() {
  return (
    <div className="w-full bg-black p-4">
      <h3 className="mb-4 text-white">
        Paving the way for no BS fitness guidance and personal training.
      </h3>
      <ul className="flex items-center justify-center border-t-2 border-white pt-6">
        {socialMediaLinks.map((linkObj) => {
          return (
            <li className="mx-3 h-[36px] w-[36px]">
              <SocialMediaLink icon={linkObj.icon} link={linkObj.link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
