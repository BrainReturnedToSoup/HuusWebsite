import SocialMediaLink from "./SocialMediaLink";

const socialMediaLinks = [
  { icon: "", link: "" },
  { icon: "", link: "" },
  { icon: "", link: "" },
];

export default function Phone() {
  return (
    <div className="w-full bg-black p-4">
      <h3 className="mb-4 text-white">
        Paving the way for no BS fitness guidance and personal training.
      </h3>
      <ul className="flex border-t-2 border-white pt-4">
        {socialMediaLinks.map((linkObj) => {
          return (
            <li>
              <SocialMediaLink icon={linkObj.icon} link={linkObj.link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
