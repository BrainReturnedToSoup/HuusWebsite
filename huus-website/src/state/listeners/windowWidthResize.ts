//used to listen and update the corresponding redux store in the case of the screen
//width changes. Includes custom throttling and filtering to only apply the change
//when necessary for responsive design.

import { AppWindowRepositoryInterface } from "../repositories/app-window/AppWindowInterface";
import { appWindowRepository } from "../repositories/app-window/AppWindowImpl";
import { ListenerInterface } from "./listenerInterface";

type SubscriberCallback = (width: number) => void;

class WindowWidthResizeListener implements ListenerInterface<number> {
  #appWindowRepository: AppWindowRepositoryInterface;
  #eventListenerAppended: boolean = false;

  #subscribers = new Map<string, SubscriberCallback>();

  constructor(appWindowRepository: AppWindowRepositoryInterface) {
    this.#appWindowRepository = appWindowRepository;

    this.subscribe(
      "app-window-width-repository",
      this.#saveWindowWidthToRepository,
    );
  }

  #publisher(): void {
    this.#subscribers.forEach((callback) => callback(window.innerWidth));
  }

  #saveWindowWidthToRepository(width: number): void {
    const currScreenPosition: number = Math.round(width);

    //THIS DOES NOT CREATE A CLONE, ITS THE ACTUAL REFERENCE FOR WHAT IS SAVED IN STATE
    //DO NOT UPDATE THE RETURNED REFERENCES FOR STATE UPDATES. USE REPOSITORY SETTERS INSTEAD

    if (currScreenPosition === this.#appWindowRepository.getWidth()) return;

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

const singletonForAppUse = new WindowWidthResizeListener(appWindowRepository);

singletonForAppUse.initListener();

const windowWidthResizeListener = singletonForAppUse;

export { WindowWidthResizeListener, windowWidthResizeListener };
