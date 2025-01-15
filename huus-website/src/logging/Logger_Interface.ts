/*
  <L> : the type of the log instance returned. This log instance should be fluent-pattern compatible

  UTILIZE THIS INTERFACE FOR CONSTRUCTOR TYPING IF YOU WANT TO INJECT A LOGGER AS A DEPENDENCY
*/

import { Log_Interface } from "./Log_Interface";

export interface Logger_Interface<L extends Log_Interface> {
  createNewLog(): L;
}
