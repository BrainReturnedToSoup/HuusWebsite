import "../../../../../App.css";

type Link = { text: string; redirect: { route: string; positionY: number } };

interface FooterNavLinkProps {
  link: Link;
}

function NavLink({ link }: FooterNavLinkProps) {
  return (
    <li className="mb-5">
      <a href={link.redirect.route} className={`lato-medium hover:underline`}>
        {link.text}
      </a>
    </li>
  );
}

interface NavColumnProps {
  title: string;
  links: Array<Link>;
}

export default function NavColumn({ title, links }: NavColumnProps) {
  return (
    <div className="mx-2 flex w-full flex-col items-center p-2">
      <label htmlFor={`${title}-column-list`} className="lato-bold text-xl">
        {title}
      </label>
      <ul
        id={`${title}-column-list`}
        className="mt-7 flex w-full flex-col items-center"
      >
        {links.map((link) => (
          <NavLink link={link} />
        ))}
      </ul>
    </div>
  );
}
