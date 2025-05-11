import { ServiceSelectionProps_Interface } from "./ServiceSelection_Interface";

function ServiceSelection({}: ServiceSelectionProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <label
        htmlFor="contact-form-selected-service"
        className="default-font-bold mb-1 text-base"
      >
        Selected Service*
      </label>
      <select
        id="contact-form-selected-service"
        className="default-font-bold px-2 py-2 text-base text-black"
      >
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
