import { InvocationId } from "../../../logging/Logging_types";
import { AppWindowSliceState } from "../../react-redux/slices/app-window/appWindow";

export type StateChangeSubscriberId = string;

export type StateChangeSubscriber_Lambda = (
  newSliceState: AppWindowSliceState,
) => void;

export interface AppWindowRepository_Interface {
  getViewPortWidth(invocationId: InvocationId): number;
  setViewPortWidth(
    invocationId: InvocationId,

    viewPortWidth: number,
  ): void;

  getViewPortPositionY(invocationId: InvocationId): number;
  setViewPortPositionY(
    invocationId: InvocationId,

    ScrollPositionY: number,
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
