import NavBar from "./nav-bar/NavBar";

import { NAV_BUTTONS } from "../../../enums/default/nav";

interface HeaderProps {
  backdropImageClass: string;
  navButtons: typeof NAV_BUTTONS;
}

export default function DefaultHeader({
  backdropImageClass,
  navButtons,
}: HeaderProps) {
  return (
    <header className={`${backdropImageClass} h-[765px] bg-black`}>
      <div className="h-full bg-black bg-opacity-15 lg:px-20">
        <NavBar navButtons={navButtons} />
      </div>
    </header>
  );
}
