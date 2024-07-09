import { RootState } from "../../state/store";
import { useSelector } from "react-redux";

const headerNavLinks = [
  { name: "Services", route: "/services", key: 1 },
  { name: "Contact", route: "/contact", key: 2 },
  { name: "Media", route: "/media", key: 3 },
  { name: "About", route: "/about", key: 4 },
];

function MobileMenu() {
  return <div>mobile menu</div>;
}

function RegularMenu() {
  return (
    <div className="flex justify-items-center">
      {headerNavLinks.map((buttonData) => {
        return (
          <a
            className="center-text flex justify-items-center bg-black px-5 text-xl text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
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

  const deviceScreenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  //mobile menu will be for devices that have a width less than 1200px,
  //so basically, portrait tablets and below
  return (
    <nav className="flex justify-center">
      {deviceScreenWidth < 768 ? <MobileMenu /> : <RegularMenu />}
    </nav>
  );
}
