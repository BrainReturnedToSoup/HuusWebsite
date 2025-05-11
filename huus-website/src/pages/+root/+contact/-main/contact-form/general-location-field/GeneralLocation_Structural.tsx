import { GeneralLocationProps_Interface } from "./GeneralLocation_Interface";

export function GeneralLocation({}: GeneralLocationProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <label
        htmlFor="contact-form-general-location"
        className="default-font-bold mb-1 text-base"
      >
        Your General Location*
      </label>
      <input
        id="contact-form-general-location"
        type="text"
        placeholder="Example: 'New York City, NY', 'Seattle, WA', etc."
        className="default-font-bold bg-neutral-100 px-2 py-2 text-base"
      />
    </div>
  );
}
