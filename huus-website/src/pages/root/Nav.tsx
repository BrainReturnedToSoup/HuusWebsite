import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const headerNavLinks = [
  { name: "Services", route: "/services", key: 1 },
  { name: "Contact", route: "/contact", key: 2 },
  { name: "Media", route: "/media", key: 3 },
  { name: "About", route: "/about", key: 4 },
];

const whiteBackground = "text-black hover:bg-black hover:text-white";
const blackBackground = " text-white hover:bg-white hover:text-black";

function MobileHamburgerMenu() {
  return <div>mobile hamburger menu</div>;
}

function RegularNavButtons() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  return (
    <div className="flex justify-items-center">
      {headerNavLinks.map((buttonData) => {
        return (
          <a
            className={`center-text flex justify-items-center px-9 text-xl transition-colors duration-300 ease-in-out ${screenPosition > window.innerHeight ? whiteBackground : blackBackground}`}
            key={buttonData.key}
            href={buttonData.route}
          >
            {buttonData.name}
          </a>
        );
      })}
    </div>
  );
}

export default function Nav() {
  //use the responsive design max widths along with the redux store
  //that keeps track of the current screen width to display specific components
  //based on the device width. Responsive design 101

  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  //mobile menu will be for devices that have a width less than 1200px,
  //so basically, portrait tablets and below
  return (
    <nav className="flex justify-center">
      {screenWidth < 768 ? <MobileHamburgerMenu /> : <RegularNavButtons />}
    </nav>
  );
}
