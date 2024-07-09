//used to listen and update the corresponding redux store in the case of the screen
//width changes. Includes custom throttling and filtering to only apply the change
//when necessary for responsive design.

import { store, selectors } from "../state/store";
import deviceScreenSlice from "../state/slices/deviceWidth";
import getReponsiveSizeWidth from "../lib/getResponsiveSize";

function resizehandler(): void {
  const currDeviceWidth: number = window.innerWidth;

  //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
  //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
  const storedDeviceWidth: number = selectors.deviceScreen.width();

  if (currDeviceWidth === storedDeviceWidth) return;

  store.dispatch((dispatch) => {
    //these are grouped together to alter the redux state in a translaction-like way.
    //this can make sure that state is updated all at once, which reduces unnecessary
    //react rerenders relvant to this particular context, and reduces the amount of garbage due
    //to immutable state changes which creates clone data.

    dispatch(deviceScreenSlice.actions.setScreenWidth(currDeviceWidth));

    const responsiveSize: string = getReponsiveSizeWidth(currDeviceWidth);

    dispatch(deviceScreenSlice.actions.setWidthRange(responsiveSize));
  });
}

window.addEventListener("resize", resizehandler);
