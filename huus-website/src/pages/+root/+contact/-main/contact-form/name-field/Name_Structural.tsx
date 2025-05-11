import { NameProps_Interface } from "./Name_Interface";

export function Name({}: NameProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <label
        htmlFor="contact-form-name"
        className="default-font-bold mb-1 text-base"
      >
        Your Name
      </label>
      <input
        id="contact-form-name"
        type="email"
        placeholder="Example: John Doe"
        className="default-font-bold bg-neutral-100 px-2 py-2 text-base"
      />
    </div>
  );
}
