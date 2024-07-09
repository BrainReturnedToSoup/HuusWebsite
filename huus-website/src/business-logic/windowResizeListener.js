//used to listen and update the corresponding redux store in the case of the screen
//width changes. Includes custom throttling and filtering to only apply the change
//when necessary for responsive design.

import { store, selectors } from "../state/store";
import deviceWidthSlice from "../state/slices/deviceWidth";
import getReponsiveSizeWidth from "../lib/getResponsiveSize";

function resizehandler() {
  const currDeviceWidth = window.innerWidth;

  //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
  //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
  const storedDeviceWidth = selectors.deviceWidth();

  if (currDeviceWidth === storedDeviceWidth) return;

  store.dispatch((dispatch) => {
    //these are grouped together to alter the redux state in a translaction-like way.
    //this can make sure that state is updated all at once, which reduces unnecessary
    //react rerenders relvant to this particular context, and reduces the amount of garbage due
    //to immutable state changes which creates clone data.

    dispatch(deviceWidthSlice.actions.setScreenWidth(currDeviceWidth));

    const responsiveSize = getReponsiveSizeWidth(currDeviceWidth);

    dispatch(deviceWidthSlice.actions.setResponsiveScreenSize(responsiveSize));
  });
}

window.addEventListener("resize", resizehandler);
