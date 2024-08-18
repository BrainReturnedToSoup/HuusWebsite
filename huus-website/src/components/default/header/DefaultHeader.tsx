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

        <NavBar navButtons={navButtons} />

    </header>
  );
}
