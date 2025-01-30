import { NameProps_Interface } from "./Name_Interface";

export function Name({}: NameProps_Interface) {
  return (
    <div className="mb-6 flex flex-col">
      <label htmlFor="contact-form-name" className="lato-bold mb-2 text-sm">
        Your Name
      </label>
      <input
        id="contact-form-name"
        type="email"
        placeholder="Example: John Doe"
        className="bg-neutral-100 px-2 py-3 text-xl"
      />
    </div>
  );
}
