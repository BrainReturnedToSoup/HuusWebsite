import { ClearAndSubmit } from "./clear-and-submit/ClearAndSubmit_Component";
import { ContactFormLogKeys_Enum } from "./ContactForm_Enum";
import { ContactFormProps_Interface } from "./ContactForm_Interface";
import { DisplayedNotes } from "./displayed-notes/DisplayedNotes_Component";
import { Email } from "./email-field/Email_Component";
import { GeneralErrorMessage } from "./general-error-message/GeneralErrorMessage_Component";
import { GeneralLocation } from "./general-location-field/GeneralLocation_Component";
import { Message } from "./message-field/Message_Component";
import { Name } from "./name-field/Name_Component";
import { ServiceSelection } from "./service-selection-field/ServiceSelection_Component";

export default function ContactForm({
  logger,
  createInvocationId,

  formSubmissionService,
  formResetService,

  useDomainState,
  useDomainStateUpdater,
}: ContactFormProps_Interface) {
  return (
    <div className="flex w-full max-w-[760px] items-center justify-center">
      <form
        className="w-full border-2 border-neutral-300 p-4 text-xl"
        onSubmit={(event) => {
          event.stopPropagation();

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
        <GeneralLocation useDomainStateUpdater={useDomainStateUpdater} />

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
