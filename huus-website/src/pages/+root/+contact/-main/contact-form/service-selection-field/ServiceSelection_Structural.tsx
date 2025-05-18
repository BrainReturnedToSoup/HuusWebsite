import { ServiceSelectionProps_Interface } from "./ServiceSelection_Interface";

import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../state/react-redux/store";
import { ServiceOfferingsSubsections } from "../../../../../../domain-data-types/service-offerings/ServiceOfferings_DomainDataTypes";

function ServiceSelection({}: ServiceSelectionProps_Interface) {
  const serviceSelectionError: string = useSelector(
    (state: AppStoreRootState) => state.contactForm.serviceSelectionError,
  );

  const serviceOfferingsSubsections: ServiceOfferingsSubsections = useSelector(
    (state: AppStoreRootState) =>
      state.serviceOfferingsSlice.serviceOfferingsSubsections,
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
        <option value="_null" className="default-font-bold px-2 py-3">
          Select a service
        </option>
        <option value="_custom" className="default-font-bold px-2 py-3">
          Custom
        </option>
        <option value="None" className="default-font-bold px-2 py-3">
          None
        </option>

        {serviceOfferingsSubsections.map((subsection) => {
          return subsection.serviceOfferings.map((offering) => {
            return (
              <option
                value={offering.id}
                className="default-font-bold px-2 py-3"
              >
                {offering.title}
              </option>
            );
          });
        })}
      </select>
    </div>
  );
}

export { ServiceSelection };
