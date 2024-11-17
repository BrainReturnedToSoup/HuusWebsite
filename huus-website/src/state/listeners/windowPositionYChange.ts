//meant to constantly listen to where the user currently.
//This is going to be used for a particular type of UI behavior regarding
//interactivity contrast with the nav bar links. For instance, if the backdrop
//is something white, then change the button contrasts to be more friendly with the white backdrop.
//this applies vice versa.

import { AppWindowRepositoryInterface } from "../repositories/app-window/AppWindowInterface";
import { appWindowRepository } from "../repositories/app-window/AppWindowImpl";
import { ListenerInterface } from "./listenerInterface";

type SubscriberCallback = (pos: number) => void;

class WindowPositionYChangeListener implements ListenerInterface<number> {
  #appWindowRepository: AppWindowRepositoryInterface;
  #eventListenerAppended: boolean = false;

  #subscribers = new Map<string, SubscriberCallback>();

  constructor(appWindowRepository: AppWindowRepositoryInterface) {
    this.#appWindowRepository = appWindowRepository;

    this.subscribe(
      "app-window-position-y-repository",
      this.#savePositionYToRepository,
    );
  }

  #publisher(): void {
    this.#subscribers.forEach((callback) => callback(window.scrollY));
  }

  #savePositionYToRepository(scrollY: number): void {
    const currScreenPosition: number = Math.round(scrollY);

    //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
    //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE REPOSITORY SETTERS INSTEAD

    if (currScreenPosition === this.#appWindowRepository.getPositionY()) return;

    this.#appWindowRepository.setPositionY(currScreenPosition);
  }

  subscribe(label: string, entrypointFunc: SubscriberCallback): void {
    if (this.#subscribers.has(label)) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    this.#subscribers.set(label, entrypointFunc);
  }

  unsubscribe(label: string): void {
    if (!this.#subscribers.has(label)) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    this.#subscribers.delete(label);
  }

  initListener(): void {
    if (this.#eventListenerAppended) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    window.addEventListener("scroll", this.#publisher.bind(this));

    this.#eventListenerAppended = true;
  }

  destroyListener(): void {
    if (!this.#eventListenerAppended) throw new Error(); //STILL NEED TO ADD CUSTOM ERROR

    window.removeEventListener("scroll", this.#publisher);

    this.#eventListenerAppended = false;
  }

  isListenerOn(): boolean {
    return this.#eventListenerAppended;
  }
}

const singletonForAppUse = new WindowPositionYChangeListener(
  appWindowRepository,
);

singletonForAppUse.initListener();

const windowPositionYChangeListener = singletonForAppUse;

export { WindowPositionYChangeListener, windowPositionYChangeListener };
