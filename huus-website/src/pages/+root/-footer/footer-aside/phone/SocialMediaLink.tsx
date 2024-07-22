interface SocialMediaLinkProps {
  icon: string;
  link: string;
}

export default function SocialMediaLink({ icon, link }: SocialMediaLinkProps) {
  return (
    <a href={link} className="w-full h-full">
      <img src={icon} className="aspect-square h-[32px]"></img>
    </a>
  );
}
