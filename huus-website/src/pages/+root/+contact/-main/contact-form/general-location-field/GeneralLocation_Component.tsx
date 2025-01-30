import { GeneralLocationProps_Interface } from "./GeneralLocation_Interface";

export function GeneralLocation({}: GeneralLocationProps_Interface) {
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
