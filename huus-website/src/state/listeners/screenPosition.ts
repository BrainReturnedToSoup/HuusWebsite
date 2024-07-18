//meant to constantly listen to where the user currently.
//This is going to be used for a particular type of UI behavior regarding
//interactivity contrast with the nav bar links. For instance, if the backdrop
//is something white, then change the button contrasts to be more friendly with the white backdrop.
//this applies vice versa.

import { store, selectors } from "../store";
import deviceScreenSlice from "../slices/deviceScreen";

function positionHandler(): void {
  const currScreenPosition: number = Math.round(window.scrollY);

  //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
  //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
  const storedScreenPosition: number = selectors.deviceScreen.position();

  if (currScreenPosition === storedScreenPosition) return;

  store.dispatch(deviceScreenSlice.actions.setPosition(currScreenPosition));
}

window.addEventListener("scroll", positionHandler);