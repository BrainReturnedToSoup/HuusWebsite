import { NAV_LINKS } from "../../../../../enums/pages/+root/-header/nav";

export default function Nav() {
  return (
    <div className={`flex h-[45px] justify-center`}>
      {NAV_LINKS.map((linkData) => {
        return (
          <a
            className={`lato-medium flex h-full items-center justify-items-center px-5 text-center text-xl text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black`}
            key={linkData.key}
            href={linkData.route}
          >
            {linkData.name}
          </a>
        );
      })}
    </div>
  );
}
