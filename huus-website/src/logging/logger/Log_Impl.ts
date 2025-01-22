import { LogAlreadyCommitted_Error } from "./_errors/LogAlreadyCommitted_Error";
import { LogAttributeAlreadyExists_Error } from "./_errors/LogAttributeAlreadyExists_Error";
import { OnCommit_LambdaInterface } from "./OnCommit_LambdaInterface";

import {
  Log_Interface,
  LogAttributeKey,
  LogAttributes_Interface,
  LogAttributeVal,
} from "./Log_Interface";

export class Log_Impl implements Log_Interface {
  #onCommit: OnCommit_LambdaInterface;
  #commited: boolean = false;

  #logAttributes: LogAttributes_Interface = {};

  constructor(onCommit: OnCommit_LambdaInterface) {
    this.#onCommit = onCommit;
  }

  addAttribute(key: LogAttributeKey, val: LogAttributeVal): this {
    //... logic to add key value pair to a instance level data structure

    if (key in this.#logAttributes) {
      throw new LogAttributeAlreadyExists_Error(`attemptedKey:${key}`);
    }

    this.#logAttributes[key] = val;

    return this;
  }

  commit(): void {
    if (this.#commited) {
      throw new LogAlreadyCommitted_Error(
        `logAttributes:${String(this.#logAttributes)}`,
      );
    }

    this.#commited = true;

    this.#onCommit(this.#logAttributes);
  }
}
