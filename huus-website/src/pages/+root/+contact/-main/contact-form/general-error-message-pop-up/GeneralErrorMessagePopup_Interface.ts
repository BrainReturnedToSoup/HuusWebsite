import { Logger_Interface } from "../../../../../../logging/logger/Logger_Interface";
import { InvocationIdFactory_LambdaInterface } from "../../../../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { DomBodyRepository_Impl } from "../../../../../../state/repositories/DOM/DomBodyRepository_Impl";

export interface GeneralErrorMessagePopupProps_Interface {
    logger: Logger_Interface;
    createInvocationId: InvocationIdFactory_LambdaInterface;
    componentUsageSource: string;

    domBodyRepository: DomBodyRepository_Impl
}
