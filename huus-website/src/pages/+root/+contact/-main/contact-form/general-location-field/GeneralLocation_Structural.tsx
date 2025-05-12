import { GeneralLocationProps_Interface } from "./GeneralLocation_Interface";

import constraintViolationWarning from "../../../../../../assets/images/warning-symbol.svg"

export function GeneralLocation({}: GeneralLocationProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1 mr-3 flex">
          <label
            htmlFor="contact-form-general-location"
            className="default-font-bold mr-1 text-base"
          >
            General Location*
          </label>
          <img
            src={constraintViolationWarning}
            alt="Message Constraint Violation Warning"
            className="aspect-square max-w-[20px]"
          />
        </div>
        <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
          Example Message Example Message Example Message Example Message
          Example Message Example Message Example
        </p>
      </div>
      <input
        id="contact-form-general-location"
        type="text"
        placeholder="Example: 'New York City, NY', 'Seattle, WA', etc."
        className="default-font-bold bg-neutral-100 px-2 py-2 text-base border-[1px] border-red-500"
      />
    </div>
  );
}
