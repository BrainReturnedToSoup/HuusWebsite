import { NAV_BUTTONS } from "../../../enums/default/nav";

import DefaultHeader from "../../../components/default/header/DefaultHeader";

export default function Header() {
  return (
    <DefaultHeader
      backdropImageClass={"header-backdrop-image"}
      navButtons={NAV_BUTTONS}
    />
  );
}
