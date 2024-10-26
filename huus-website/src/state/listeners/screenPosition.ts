//meant to constantly listen to where the user currently.
//This is going to be used for a particular type of UI behavior regarding
//interactivity contrast with the nav bar links. For instance, if the backdrop
//is something white, then change the button contrasts to be more friendly with the white backdrop.
//this applies vice versa.

import { store, selectors } from "../store";
import deviceScreenSlice from "../slices/deviceScreen";

type SubscriberCallback = (pos: number) => void;

class ScreenPositionListener {
  #eventListenerAppended: boolean = false;

  #subscribers = new Map<string, SubscriberCallback>();

  constructor() {
    this.subscribe("position-y-redux", this.#savePositionYToRedux);
  }

  #publisher() {
    this.#subscribers.forEach((callback) => callback(window.scrollY));
  }

  #savePositionYToRedux(): void {
    const currScreenPosition: number = Math.round(window.scrollY);

    //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
    //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE ACTION METHODS ON SLICES INSTEAD
    const storedScreenPosition: number = selectors.deviceScreen.position();

    if (currScreenPosition === storedScreenPosition) return;

    store.dispatch(deviceScreenSlice.actions.setPosition(currScreenPosition));
  }

  subscribe(label: string, entrypointFunc: SubscriberCallback) {
    if (this.#subscribers.has(label)) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    this.#subscribers.set(label, entrypointFunc);
  }

  unsubscribe(label: string) {
    if (!(this.#subscribers.has(label))) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    this.#subscribers.delete(label);
  }

  initListener() {
    if (this.#eventListenerAppended) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    window.addEventListener("scroll", this.#publisher.bind(this));

    this.#eventListenerAppended = true;
  }

  destroyListener() {
    if (!this.#eventListenerAppended) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    window.removeEventListener("scroll", this.#publisher);

    this.#eventListenerAppended = false;
  }
}

const screenPositionListener = new ScreenPositionListener();

screenPositionListener.initListener();

export default screenPositionListener;
