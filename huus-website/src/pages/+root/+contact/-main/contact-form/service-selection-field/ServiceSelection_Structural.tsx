import { ServiceSelectionProps_Interface } from "./ServiceSelection_Interface";

import constraintViolationWarning from "../../../../../../assets/images/warning-symbol.svg";

function ServiceSelection({}: ServiceSelectionProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1 mr-3 flex">
          <label
            htmlFor="contact-form-selected-service"
            className="default-font-bold mr-1 text-base"
          >
            Selected Service*
          </label>
          <img
            src={constraintViolationWarning}
            alt="Selected Service Constraint Violation Warning"
            className="aspect-square max-w-[20px]"
          />
        </div>
        <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
          Example Message Example Message Example Message Example Message
          Example Message Example Message Example
        </p>
      </div>
      <select
        id="contact-form-selected-service"
        className="default-font-bold border-[1px] border-red-500 px-2 py-2 text-base text-black"
      >
        <option value="null" className="default-font-bold px-2 py-3">
          Select a service
        </option>
        <option value="None" className="default-font-bold px-2 py-3">
          None
        </option>
        <option
          value="random-selection-1"
          className="default-font-bold px-2 py-3"
        >
          selection 1
        </option>
        <option
          value="random-selection-2"
          className="default-font-bold px-2 py-3"
        >
          selection 2
        </option>
        <option
          value="random-selection-3"
          className="default-font-bold px-2 py-3"
        >
          selection 3
        </option>
        <option
          value="random-selection-4"
          className="default-font-bold px-2 py-3"
        >
          selection 4
        </option>
      </select>
    </div>
  );
}

export { ServiceSelection };
