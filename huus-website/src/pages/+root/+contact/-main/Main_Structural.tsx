import { useDispatch } from "react-redux";

import { Preface } from "./preface/Preface_Structural";
import { ContactForm } from "./contact-form/ContactForm_Structural";
import { BackupEmail } from "./backup-email/BackupEmail_Structural";

import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";
import { createInvocationId } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";
import { contactFormSubmissionService } from "../../../../services/contact-form/form-submission/FormSubmissionService_Instance";
import { contactFormResetService } from "../../../../services/contact-form/form-reset/FormResetService_Instance";

const BACKUP_EMAIL = "random@email.com";

function Main() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Preface />
      <ContactForm
        logger={defaultLogger}
        createInvocationId={createInvocationId}
        formSubmissionService={contactFormSubmissionService}
        formResetService={contactFormResetService}
        useDomainStateUpdater={useDispatch}
      />
      <BackupEmail emailAddr={BACKUP_EMAIL} />
    </main>
  );
}

export { Main, BACKUP_EMAIL };
