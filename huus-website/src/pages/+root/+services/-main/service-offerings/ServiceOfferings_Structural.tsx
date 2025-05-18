import { useSelector } from "react-redux";

import { AppStoreRootState } from "../../../../../state/react-redux/store";

import { ServiceOfferingsSubsection } from "./service-offerings-subsection/ServiceOfferingsSubsection_Structural";

function ServiceOfferings() {
  const serviceOfferingsSubsections = useSelector(
    (state: AppStoreRootState) =>
      state.serviceOfferingsSlice.serviceOfferingsSubsections,
  );

  return (
    <div>
      {serviceOfferingsSubsections.map((subsection) => {
        return (
          <ServiceOfferingsSubsection
            subsectionTitle={subsection.title}
            serviceOfferings={subsection.serviceOfferings}
          />
        );
      })}
    </div>
  );
}

export { ServiceOfferings };
