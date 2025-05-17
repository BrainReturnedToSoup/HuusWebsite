import { ClearAndSubmit } from "./clear-and-submit/ClearAndSubmit_Structural";
import { ContactFormLogKeys_Enum } from "./ContactForm_Enum";
import { ContactFormProps_Interface } from "./ContactForm_Interface";
import { DisplayedNotes } from "./displayed-notes/DisplayedNotes_Structural";
import { Email } from "./email-field/Email_Structural";
import { GeneralErrorMessage } from "./general-error-message/GeneralErrorMessage_Structural";
import { Message } from "./message-field/Message_Structural";
import { Name } from "./name-field/Name_Structural";
import { ServiceSelection } from "./service-selection-field/ServiceSelection_Structural";

function ContactForm({
  logger,
  createInvocationId,

  formSubmissionService,
  formResetService,

  useDomainStateUpdater,
}: ContactFormProps_Interface) {
  return (
    <div className="flex w-full max-w-[760px] items-center justify-center">
      <form
        className="w-full border-[1px] border-neutral-400 p-4 text-xl"
        onSubmit={(e) => {
          e.preventDefault();

          const formSubmissionInvocationId = createInvocationId();

          logger
            .createNewLog()
            .addAttribute(
              ContactFormLogKeys_Enum.INVOCATION_ID,
              formSubmissionInvocationId,
            )
            .addAttribute(ContactFormLogKeys_Enum.ACTION, "form-submitted")
            .commit();

          formSubmissionService.submitForm(formSubmissionInvocationId);
        }}
      >
        <DisplayedNotes />
        <GeneralErrorMessage />

        <Name useDomainStateUpdater={useDomainStateUpdater} />
        <Email useDomainStateUpdater={useDomainStateUpdater} />

        <ServiceSelection />

        <Message useDomainStateUpdater={useDomainStateUpdater} />

        {/*
            logging and invocation dependencies below purely for the clearing button. The submit event should be caught by the form,
            which its callback has the invocation ID and logging within it.
          */}
        <ClearAndSubmit
          logger={logger}
          createInvocationId={createInvocationId}
          formResetService={formResetService}
        />
      </form>
    </div>
  );
}

export { ContactForm };

// will use the library and platform 'emailjs' in order to send emails via the client without a backend.
// it has a free tier for 200 requests per month, and it also has CAPTCHA mechanisms.
// Also, it should be safe to hard-code the raw API keys in the front-end.
// https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/

//
//  fields:
//
//  -individual's name
//
//  -individual's email
//
//  -general location (not exact)
//
//  -selected service (drop down)
//
//  -custom message
//
