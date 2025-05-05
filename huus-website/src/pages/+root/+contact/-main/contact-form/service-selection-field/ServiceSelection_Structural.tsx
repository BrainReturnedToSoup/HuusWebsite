import { ServiceSelectionProps_Interface } from "./ServiceSelection_Interface";

function ServiceSelection({}: ServiceSelectionProps_Interface) {
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

export { ServiceSelection };
