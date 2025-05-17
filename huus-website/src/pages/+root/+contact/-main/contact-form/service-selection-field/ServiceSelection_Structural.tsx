import { ServiceSelectionProps_Interface } from "./ServiceSelection_Interface";

import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../state/react-redux/store";

function ServiceSelection({}: ServiceSelectionProps_Interface) {
  const serviceSelectionError: string = useSelector(
    (state: AppStoreRootState) => state.contactForm.serviceSelectionError,
  );

  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1">
          <label
            htmlFor="contact-form-selected-service"
            className="default-font-bold text-base"
          >
            Selected Service*
          </label>
        </div>

        {serviceSelectionError && (
          <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
            {serviceSelectionError}
          </p>
        )}
      </div>
      <select
        id="contact-form-selected-service"
        className={`default-font-bold border-[1px] ${serviceSelectionError ? "border-red-500" : "border-transparent"} px-2 py-2 text-base text-black`}
      >
        <option value="null" className="default-font-bold px-2 py-3">
          Select a service
        </option>
        <option value="Custom" className="default-font-bold px-2 py-3">
          Custom
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
