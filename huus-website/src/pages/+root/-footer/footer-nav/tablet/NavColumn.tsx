import "../../../../../App.css";

type Link = { text: string; redirect: { route: string; positionY: number } };

interface FooterNavLinkProps {
  link: Link;
}

function NavLink({ link }: FooterNavLinkProps) {
  return (
    <li className="mb-6">
      <a className={`lato-medium hover:underline`} href={link.redirect.route}>
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
    <div className="mx-2 flex w-full flex-col items-center">
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
