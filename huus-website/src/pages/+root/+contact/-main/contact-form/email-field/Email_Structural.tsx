import { EmailProps_Interface } from "./Email_Interface";

export function Email({}: EmailProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <label
        htmlFor="contact-form-email"
        className="default-font-bold mb-1 text-base"
      >
        Your Email*
      </label>
      <input
        id="contact-form-email"
        type="email"
        placeholder="Example: email@example.com"
        className="default-font-bold bg-neutral-100 px-2 py-2 text-base"
      />
    </div>
  );
}
