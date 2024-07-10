import mobileMenuStateActions from "../../business-logic/mobileMenu";
import xWhite from "../../assets/x-white.svg";

const headerNavLinks = [
  { name: "Services", route: "/services", key: 1 },
  { name: "Contact", route: "/contact", key: 2 },
  { name: "Media", route: "/media", key: 3 },
  { name: "About", route: "/about", key: 4 },
];

function MobileNavButtonMenu() {
  return (
    <div className="fixed z-10 h-dvh w-full bg-black">
      <div className="flex items-center justify-between p-5 pt-0">
        <h1 className="text-4xl font-normal text-white flex justify-center items-center">Navigation</h1>
        <button
          className="flex aspect-square w-20 items-center justify-center"
          id="mobile-nav-exit"
          onClick={mobileMenuStateActions.closeMenu}
        >
          <img
            className="aspect-square w-14 text-white"
            alt="Close menu"
            src={xWhite}
          ></img>
        </button>
      </div>
      <div className="flex flex-col">
        {headerNavLinks.map((buttonData) => {
          return (
            <a
              className="mb-3 text-3xl font-light text-white"
              key={buttonData.key}
              href={buttonData.route}
            >
              {buttonData.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default MobileNavButtonMenu;
