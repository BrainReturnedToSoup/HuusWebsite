import { WindowEventListener_Interface } from "../../WindowEventListener_Interface";

export interface AppWindowPositionYChange_Interface
  extends WindowEventListener_Interface {}

export type WindowListenerEventHandler_Lambda = () => void;

export const LISTENER_TYPE: string = "scroll";
