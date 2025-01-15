import { AppWindowWidthResizeListener_Interface } from "./AppWindowWidthResize_Interface";

import {
  AppWindowRepository_Interface,
  StateChangeSubscriberId,
} from "../../../repositories/app-window/AppWindowRepository_Interface";

import { ListenerNotBinded_Error } from "../../_errors/ListenerNotBinded_Error";
import { ListenerAlreadyBinded_Error } from "../../_errors/ListenerAlreadyBinded_Error";

import { AppWindowSliceState } from "../../../react-redux/slices/app-window/appWindow";
import { AppWindowChangeSources } from "../../../react-redux/slices/app-window/appWindow_Enum";

import { LISTENER_TYPE } from "./AppWindowWidthResize_Interface";

class AppWindowWidthResizeListener_Impl
  implements AppWindowWidthResizeListener_Interface
{
  #appWindowRepository: AppWindowRepository_Interface;

  #appWindowRepositoryStateSubscriptionId: StateChangeSubscriberId | null;

  // simple flag for keeping state, which its more for predictability and traceability.
  // in reality, appending listeners to the window in this way, its unique based on the combination
  // of the type of event, the specific handler callback, and potential options. However, the add or removal
  // definitions are idempotent, so its hard to ensure that a specific lifecycle is actually happening.
  // this is where this flag comes in for system correctness rather than actually being a listener failsafe
  #appWindowStateBinded: boolean;

  constructor(appWindowRepository: AppWindowRepository_Interface) {
    this.#appWindowRepository = appWindowRepository;

    // need to use local flag since no returned ID, window event listeners have implicit
    // uniqueness based on combination of the instances' given properties
    this.#appWindowStateBinded = false;

    // this is a custom pub/sub reactive system, which returns an ID on subscription,
    // so the existence of the subscription ID represents true, and of course non-existence means false
    this.#appWindowRepositoryStateSubscriptionId = null;
  }

  /* event handler that binds to the given repository */

  #eventHandler_Repository({
    viewPortWidth: width,
    viewPortWidth_lastChangeSource: width_lastChangeSource,
  }: AppWindowSliceState): void {
    // need to add an event change source ID that is stored in the redux as well
    // this way any circular events are exited on the backswing when reading the
    // change source ID within this handler.

    if (width_lastChangeSource !== AppWindowChangeSources.LISTENER) {
      // if the last change to the 'width' property in the app window slice was NOT due to this listener itself.
      // if so, then apply that state value to the actual window object.
      window.resizeTo(width, window.innerHeight); // WILL CAUSE ASSOCIATED EVENT LISTENERS TO FIRE BE CAREFUL
    }
  }

  bindListener_Repository(): void {
    if (this.#appWindowRepositoryStateSubscriptionId !== null) {
      const err = new ListenerAlreadyBinded_Error();

      // maybe add more stuff to err like meta data or something idk not finalized yet

      throw err;
    }

    const id: StateChangeSubscriberId = crypto.randomUUID();

    this.#appWindowRepository.subscribeToRepositoryStateChange(
      id,
      this.#eventHandler_Repository,
    );

    this.#appWindowRepositoryStateSubscriptionId = id;
  }

  unbindListener_Repository(): void {
    if (this.#appWindowRepositoryStateSubscriptionId === null) {
      const err = new ListenerNotBinded_Error();

      // maybe add more stuff to err like meta data or something idk not finalized yet

      throw err;
    }

    const id: StateChangeSubscriberId =
      this.#appWindowRepositoryStateSubscriptionId;

    this.#appWindowRepository.unsubscribeFromRepositoryStateChange(id);

    this.#appWindowRepositoryStateSubscriptionId = null;
  }

  /* general event handler */

  #eventHandler_Window(): void {
    const newWidth = window.innerWidth;

    this.#appWindowRepository.setViewPortWidth(
      newWidth,
      AppWindowChangeSources.LISTENER,
    ); // add setter source eventually like an ID
  }

  bindListener_Target(): void {
    if (this.#appWindowStateBinded) {
      const error = new ListenerAlreadyBinded_Error();

      // add additional properties or flags maybe ?

      throw error;
    }

    // since the repository is also binded,
    window.addEventListener(LISTENER_TYPE, this.#eventHandler_Window);

    this.#appWindowStateBinded = true;
  }

  unbindListener_Target(): void {
    if (!this.#appWindowStateBinded) {
      const error = new ListenerNotBinded_Error();

      // add additional properties or flags maybe ?

      throw error;
    }

    window.removeEventListener(LISTENER_TYPE, this.#eventHandler_Window);

    this.#appWindowStateBinded = false;
  }
}

// ADD A LOGGER FOR DI IN THE FUTURE

export { AppWindowWidthResizeListener_Impl };
