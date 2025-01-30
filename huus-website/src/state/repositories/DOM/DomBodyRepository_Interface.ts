import { InvocationId } from "../../../logging/Logging_types";
import { DomBodyOverflowY_Enum } from "./DomBodyRepository_Enum";

export interface DomBodyRepository_Interface {
  getOverflowY(invocationId: InvocationId): DomBodyOverflowY_Enum;

  setOverflowY(
    invocationId: InvocationId,

    property: DomBodyOverflowY_Enum,
  ): void;
}
