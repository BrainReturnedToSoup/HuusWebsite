import { InvocationId } from "../../../logging/Logging_types";
import { AppWindowSliceState } from "../../react-redux/slices/app-window/appWindow";
import { AppWindowChangeSources } from "../../react-redux/slices/app-window/appWindow_Enum";

export type StateChangeSubscriberId = string;

export type StateChangeSubscriber_Lambda = (
  newSliceState: AppWindowSliceState,
) => void;

export interface AppWindowRepository_Interface {
  getViewPortWidth(invocationId: InvocationId): number;
  setViewPortWidth(
    invocationId: InvocationId,

    width: number,
    changeSource: AppWindowChangeSources,
  ): void;

  getViewPortPositionY(invocationId: InvocationId): number;
  setViewPortPositionY(
    invocationId: InvocationId,

    positionY: number,
    changeSource: AppWindowChangeSources,
  ): void;

  subscribeToRepositoryStateChange(
    invocationid: InvocationId,

    subscriberId: StateChangeSubscriberId,
    callback: StateChangeSubscriber_Lambda,
  ): void;

  unsubscribeFromRepositoryStateChange(
    invocationId: InvocationId,

    subscriberId: StateChangeSubscriberId,
  ): void;
}
