//used to listen and update the corresponding redux store in the case of the screen
//width changes. Includes custom throttling and filtering to only apply the change
//when necessary for responsive design.

import { store, selectors } from "../store";
import deviceScreenSlice from "../slices/deviceScreen";

function resizeHandler(): void {
  const currDeviceWidth: number = window.innerWidth;

  //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
  //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
  const storedDeviceWidth: number = selectors.deviceScreen.width();

  console.log(`stored device width: `, storedDeviceWidth);
  console.log(`curr device width: `, currDeviceWidth);

  if (currDeviceWidth === storedDeviceWidth) return;

  store.dispatch(deviceScreenSlice.actions.setWidth(currDeviceWidth));
}

window.addEventListener("resize", resizeHandler);
