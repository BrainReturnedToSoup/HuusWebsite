import { useState } from "react";

type Link = { text: string; redirect: { route: string; positionY: number } };

interface FooterNavColumnProps {
  title: string;
  links: Array<Link>;
}

interface FooterNavLinkProps {
  link: Link;
}

const footerNavColumns = [
  {
    title: "Services",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
  {
    title: "About",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
];

function FooterNavLink({ link }: FooterNavLinkProps) {
  const [isHovered, setHoveredState] = useState(false);

  function handleMouseEnter() {
    setHoveredState(true);
  }

  function handleMouseLeave() {
    setHoveredState(false);
  }

  return (
    <li className="mb-5">
      <a
        href={link.redirect.route}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${isHovered ? "underline" : ""}`}
      >
        {link.text}
      </a>
    </li>
  );
}

function FooterNavColumn({ title, links }: FooterNavColumnProps) {
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
          <FooterNavLink link={link} />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="h-[550px] w-full px-6 pt-16 sm:px-10 lg:px-14 xl:px-20">
      <div className="flex h-5/6 w-full border-t-2 border-black">
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
            (social media links go here)
          </div>
        </div>
        <div className="flex h-full w-2/3 grow px-2 py-6">
          {footerNavColumns.map((column) => {
            return (
              <FooterNavColumn title={column.title} links={column.links} />
            );
          })}
        </div>
      </div>
      <div className="flex h-1/6 w-full items-center justify-start border-t-2 border-black">
        <h3>
          <span className="mr-1">&#169;</span>2024 Huus Fitness & Personal
          Training, Inc. All rights reserved.
        </h3>
      </div>
    </footer>
  );
}
