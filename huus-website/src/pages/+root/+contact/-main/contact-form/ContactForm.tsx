import { useSelector } from "react-redux";

import handleContactFormSubmission from "../../../../../services/contact-form/contactFormSubmission/contactFormSummisionImpl";
import clearContactForm_binded from "../../../../../services/contact-form/contactFormClearing";

function YourEmail() {
  return (
    <div className="mb-6 flex flex-col">
      <label
        htmlFor="contact-form-your-email"
        className="lato-bold mb-2 text-sm"
      >
        *Your Email
      </label>
      <input
        id="contact-form-your-email"
        type="email"
        placeholder="Example: email@example.com"
        className="bg-neutral-100 px-2 py-3 text-xl"
      />
    </div>
  );
}

function GeneralLocation() {
  return (
    <div className="mb-6 flex flex-col">
      <label
        htmlFor="contact-form-general-location"
        className="lato-bold mb-2 text-sm"
      >
        *Your General Location
      </label>
      <input
        id="contact-form-general-location"
        type="text"
        placeholder="Example: 'New York City, NY', 'Seattle, WA', etc."
        className="bg-neutral-100 px-2 py-3 text-xl"
      />
    </div>
  );
}

function ServiceSelection() {
  return (
    <div className="mb-6 flex flex-col">
      <label
        htmlFor="contact-form-selected-service"
        className="lato-bold mb-2 text-sm"
      >
        *Selected Service
      </label>
      <select
        id="contact-form-selected-service"
        className="px-2 py-3 text-xl text-black"
      >
        <option value="random-selection-1" className="px-2 py-3">
          selection 1
        </option>
        <option value="random-selection-2" className="px-2 py-3">
          selection 2
        </option>
        <option value="random-selection-3" className="px-2 py-3">
          selection 3
        </option>
        <option value="random-selection-4" className="px-2 py-3">
          selection 4
        </option>
      </select>
    </div>
  );
}

function Message() {
  return (
    <div className="mb-6 flex flex-col">
      <label htmlFor="contact-form-message" className="lato-bold mb-2 text-sm">
        *Message
      </label>
      <textarea
        id="contact-form-message"
        placeholder="Example: 'Hello, I was looking to inquire on the service [service]...' 'I have a question about [example]...' 'Do you offer [example]?'"
        className="min-h-[275px] bg-neutral-100 px-2 py-3 text-xl"
      />
    </div>
  );
}

function GeneralFormSubmissionEM() {
  return <div></div>;
}

function Notes() {
  return (
    <>
      <p className="lato-medium mb-4 p-2 text-end text-base text-neutral-400 underline">
        Note: fields annotated with * are required
      </p>
    </>
  );
}

function ClearAndSubmitButtons() {
  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        className="lato-bold min-w-[125px] bg-black px-4 py-2 text-xl text-white"
        onClick={clearContactForm_binded}
      >
        Clear
      </button>
      <button
        type="submit"
        className="lato-bold min-w-[125px] bg-black px-4 py-2 text-xl text-white"
      >
        Send
      </button>
    </div>
  );
}

export default function ContactForm() {
  return (
    <div className="flex w-full max-w-[760px] items-center justify-center">
      <form
        className="w-full border-2 border-neutral-300 p-4 text-xl"
        onSubmit={handleContactFormSubmission}
      >
        <Notes />
        <GeneralFormSubmissionEM />
        <YourEmail />
        <GeneralLocation />
        <ServiceSelection />
        <Message />
        <ClearAndSubmitButtons />
      </form>
    </div>
  );
}

// will use 'emailjs' in order to send emails via the client without a backend.
// it has a free tier for 200 requests per month, and it also has CAPTCHA mechanisms.
// Also, it should be safe to hard-code the raw API keys in the front-end.
// https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/

//
//  fields:
//
//  -individual's email
//
//  -general location (not exact)
//
//  -selected service (drop down)
//
//  -custom message
//
