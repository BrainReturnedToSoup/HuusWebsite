import { AppWindowSliceState } from "../../react-redux/slices/app-window/appWindow";
import { AppWindowChangeSources } from "../../react-redux/slices/app-window/appWindow_Enum";

export type StateChangeSubscriberId = string;

export type StateChangeSubscriber_Lambda = (
  newSliceState: AppWindowSliceState,
) => void;

export interface AppWindowRepository_Interface {
  getViewPortWidth(): number;
  setViewPortWidth(width: number, changeSource: AppWindowChangeSources): void;

  getViewPortPositionY(): number;
  setViewPortPositionY(
    positionY: number,
    changeSource: AppWindowChangeSources,
  ): void;

  subscribeToRepositoryStateChange(
    subscriberId: StateChangeSubscriberId,
    callback: StateChangeSubscriber_Lambda,
  ): void;

  unsubscribeFromRepositoryStateChange(
    subscriberId: StateChangeSubscriberId,
  ): void;
}
