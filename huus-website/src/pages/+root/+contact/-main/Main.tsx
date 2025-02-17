import Preface from "./preface/Preface";
import ContactForm from "./contact-form/ContactForm_Component";
import BackupEmail from "./backup-email/BackupEmail";

import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";
import { createInvocationId } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";
import { contactFormSubmissionService } from "../../../../services/contact-form/form-submission/FormSubmissionService_Instance";
import { contactFormResetService } from "../../../../services/contact-form/form-reset/FormResetService_Instance";
import { useSelector } from "react-redux";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Preface />
      <ContactForm
        logger={defaultLogger}
        createInvocationId={createInvocationId}
        formSubmissionService={contactFormSubmissionService}
        formResetService={contactFormResetService}
        useGeneralState={useSelector}
      />
      <BackupEmail />
    </main>
  );
}
