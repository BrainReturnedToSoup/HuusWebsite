//used to listen and update the corresponding redux store in the case of the screen
//width changes. Includes custom throttling and filtering to only apply the change
//when necessary for responsive design.

import { store, selectors } from "../state/store";
import deviceWidthSlice from "../state/slices/deviceWidth";

function resizehandler() {
  const currDeviceWidth = window.innerWidth;

  //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
  //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
  const storedDeviceWidth = selectors.deviceWidth();

  if (currDeviceWidth === storedDeviceWidth) return;

  store.dispatch(deviceWidthSlice.actions.set(currDeviceWidth));
}

window.addEventListener("resize", resizehandler);
