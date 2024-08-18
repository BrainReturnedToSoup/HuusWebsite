import DefaultHeader from "../../../../components/default/header/DefaultHeader";

import { NAV_BUTTONS } from "../../../../enums/default/nav";

export default function Header() {
  return (
    <DefaultHeader
      backdropImageClass={"about-header-backdrop-image"}
      navButtons={NAV_BUTTONS}
    />
  );
}
