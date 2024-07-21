import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

import Nav from "./Nav";

export default function NavBar() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  return (
    <div
      className={`sm:h-18 fixed flex h-14 w-full justify-between justify-items-center bg-opacity-75 px-6 transition-colors duration-300 ease-in-out sm:px-10 md:h-16 lg:px-14 xl:px-20 ${screenPosition > window.innerHeight && "bg-white"}`}
    >
      <div className="flex justify-items-center">
        <img
          className={`justify-self-center ${screenPosition > window.innerHeight ? "text-black" : "text-white"}`}
          alt="site logo"
        ></img>
      </div>
      <Nav />
    </div>
  );
}
