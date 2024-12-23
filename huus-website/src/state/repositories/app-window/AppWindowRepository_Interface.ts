import { AppWindowSliceState } from "../../react-redux/slices/app-window/appWindow";
import { AppWindowChangeSources } from "../../react-redux/slices/app-window/appWindow_Enum";

export type StateChangeSubscriberId = string | number;

export type StateChangeSubscriber_Lambda = (
  newSliceState: AppWindowSliceState,
) => void;

export interface AppWindowRepository_Interface {
  getWidth(): number;
  setWidth(width: number, changeSource: AppWindowChangeSources): void;

  getPositionY(): number;
  setPositionY(positionY: number, changeSource: AppWindowChangeSources): void;

  subscribeToStateChange(
    subscriberId: StateChangeSubscriberId,
    callback: StateChangeSubscriber_Lambda,
  ): void;

  unsubscribeFromState(subscriberId: StateChangeSubscriberId): void;
}
