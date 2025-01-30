import { EmailProps_Interface } from "./Email_Interface";

export function Email({}: EmailProps_Interface) {
  return (
    <div className="mb-6 flex flex-col">
      <label htmlFor="contact-form-email" className="lato-bold mb-2 text-sm">
        *Your Email
      </label>
      <input
        id="contact-form-email"
        type="email"
        placeholder="Example: email@example.com"
        className="bg-neutral-100 px-2 py-3 text-xl"
      />
    </div>
  );
}
