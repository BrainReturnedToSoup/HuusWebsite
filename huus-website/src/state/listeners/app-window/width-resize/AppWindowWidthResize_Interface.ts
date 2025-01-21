import { Listener_Interface } from "../../Listener_Interface";

export interface AppWindowWidthResizeListener_Interface
  extends Listener_Interface {}

export type WindowListenerEventHandler_Lambda = () => void;

export const LISTENER_TYPE = "resize";
