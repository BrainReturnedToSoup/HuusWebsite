import { NameProps_Interface } from "./Name_Interface";

import { FirstName } from "./first-name-field/FirstName_Structural";
import { LastName } from "./last-name-field/LastName_Structural";

export function Name({}: NameProps_Interface) {
  return (
    <>
      <FirstName />
      <LastName />
    </>
  );
}
