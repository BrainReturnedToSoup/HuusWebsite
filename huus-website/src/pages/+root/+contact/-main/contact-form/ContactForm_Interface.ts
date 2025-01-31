import { Logger_Interface } from "../../../../../logging/logger/Logger_Interface";
import { InvocationIdFactory_LambdaInterface } from "../../../../../logging/invocation-id/InvocationIdFactory_LambdaInterface";
import { ContactFormSubmissionService_Interface } from "../../../../../services/contact-form/form-submission/FormSubmissionService_Interface";
import { ContactFormResetService_Interface } from "../../../../../services/contact-form/form-reset/FormResetService_Interface";
import { UseDomainState_LambdaInterface } from "../../../../../state/react-state-hooks/UseDomainState_LambdaInterface";
import { UseDomainStateUpdater_LambdaInterface } from "../../../../../state/react-state-hooks/UseDomainStateUpdater_LambdaInterface";

export interface ContactFormProps_Interface {
  logger: Logger_Interface;
  createInvocationId: InvocationIdFactory_LambdaInterface;

  formSubmissionService: ContactFormSubmissionService_Interface;
  formResetService: ContactFormResetService_Interface;

  useDomainState: UseDomainState_LambdaInterface;
  useDomainStateUpdater: UseDomainStateUpdater_LambdaInterface;
}
