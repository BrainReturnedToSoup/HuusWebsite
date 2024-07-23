interface SocialMediaLinkProps {
  icon: string;
  link: string;
}

export default function SocialMediaLink({ icon, link }: SocialMediaLinkProps) {
  return (
    <a href={link} className="h-full w-full hover:cursor-pointer">
      <img src={icon} className="aspect-square h-[32px]"></img>
    </a>
  );
}
