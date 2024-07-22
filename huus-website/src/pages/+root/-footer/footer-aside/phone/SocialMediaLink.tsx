interface SocialMediaLinkProps {
  icon: string;
  link: string;
}

export default function SocialMediaLink({ icon, link }: SocialMediaLinkProps) {
  return (
    <a href={link}>
      <img src={icon}></img>
    </a>
  );
}
