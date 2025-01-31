import { InvocationId } from "../../../logging/Logging_types";
import {
  DomBodyOverflowX_Enum,
  DomBodyOverflowY_Enum,
} from "./DomBodyRepository_Enum";

export interface DomBodyRepository_Interface {
  getOverflowY(invocationId: InvocationId): DomBodyOverflowY_Enum;

  setOverflowY(
    invocationId: InvocationId,

    property: DomBodyOverflowY_Enum,
  ): void;

  getOverflowX(invocationId: InvocationId): DomBodyOverflowX_Enum;

  setOverflowX(
    invocationId: InvocationId,

    property: DomBodyOverflowX_Enum,
  ): void;
}
