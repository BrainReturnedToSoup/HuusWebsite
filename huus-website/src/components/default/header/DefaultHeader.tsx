import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import NavBar from "./nav-bar/NavBar";

export default function Header() {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <header className="header-backdrop-image h-[765px] bg-black">
      <div className={`h-full bg-black bg-opacity-15 lg:px-20`}>
        <NavBar screenWidth={screenWidth} />
      </div>
    </header>
  );
}
