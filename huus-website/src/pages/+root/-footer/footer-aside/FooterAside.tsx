import { FOOTER_SOCIAL_MEDIA_LINKS } from "../../../../enums/pages/+root/-footer/footer";

interface SocialMediaLinkProps {
  linkInfo: (typeof FOOTER_SOCIAL_MEDIA_LINKS)[0];
}

function SocialMediaLink({ linkInfo }: SocialMediaLinkProps) {
  return (
    <a
      className="mx-2 flex aspect-square h-[48px] items-center justify-center text-neutral-700 sm:mx-1"
      href={linkInfo.link}
    >
      <img
        className="lato-medium aspect-square h-[40px] md:h-[36px]"
        alt={linkInfo.alt}
        src={linkInfo.icon}
      ></img>
    </a>
  );
}

export default function FooterAside() {
  return (
    <div className="flex min-h-[65px] w-full flex-wrap items-center justify-between border-b-2 border-neutral-300 px-4 py-2 sm:px-10">
      <div>
        <img alt="logo" className="text-neutral-700"></img>
      </div>
      <ul className="flex items-center justify-center text-gray-400">
        {FOOTER_SOCIAL_MEDIA_LINKS.map((linkInfo, index) => (
          <SocialMediaLink linkInfo={linkInfo} key={index} />
        ))}
      </ul>
    </div>
  );
}
